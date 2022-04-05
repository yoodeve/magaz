import {createAction, handleActions} from "redux-actions";
import produce from "immer";

import { storage } from "../../shared/firebase";

//action type
const UPLOADING = 'UPLOADING';
const UPLOAD_IMG = 'UPLOAD_IMG';
const SET_PRE = 'SET_PRE';

//actionCreators
const uploading = createAction(UPLOADING, (uploading)=> ({uploading}));
const uploadImg = createAction(UPLOAD_IMG, (img_url)=>({img_url}));
const setPre = createAction(SET_PRE, (preview)=>({preview}));

//initialState
const initialState = {
    img_url : '',
    uploading : false,
    preview:null,
}

export const uploadImageFB = (image) => {
    return function (dispatch, getState, {history}){
        dispatch(uploading(true));
        const uploadRef = storage.ref(`images/${image.name}`).put(image);

        uploadRef.then((snapshot) => {
            console.log(snapshot);
            snapshot.ref.getDownloadURL().then((url)=> {
                dispatch(uploadImg(url));
            })
        })
    }
}

//reducer
export default handleActions({
    [UPLOAD_IMG]:(state, action)=>produce(state, (draft)=>{
        draft.img_url = action.payload.img_url;
        draft.uploading = false;
    }),
    [UPLOADING]:(state, action)=>produce(state, (draft)=>{
        draft.uploading = action.payload.uploading;
    }),
    [SET_PRE]:(state, action)=>produce(state, (draft)=>{
        draft.preview = action.payload.preview;
    })
}, initialState);

const actionCreators = {
    uploadImg,
    setPre,
    uploadImageFB,
}

export {actionCreators};