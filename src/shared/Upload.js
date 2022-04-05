import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../elements";
import { storage } from "./firebase";
import {uploadImageFB} from '../redux/modules/image'
import { actionCreators as imgActions } from "../redux/modules/image";

const Upload = (props) => {
    const fileInput = React.useRef();
    const dispatch = useDispatch();
    const uploadingCheck = useSelector(state => state.image.uploading);
    const selectFile = (e) => {
        console.log(e);
        console.log(e.target);
        console.log(e.target.files[0]);

        console.log(fileInput.current.files[0]);

        const reader = new FileReader();
        const file = fileInput.current.files[0];

        reader.readAsDataURL(file);

        reader.onloadend = () => {
            console.log(reader.result);
            dispatch(imgActions.setPre(reader.result));
        }
    }

    const uploadFB = () => {
        let image = fileInput.current.files[0];
        const uploadRef = storage.ref(`images/${image.name}`).put(image);

        uploadRef.then((snapshot) => {
            console.log(snapshot);

            snapshot.ref.getDownloadURL().then((url)=> {
                console.log(url);
                dispatch(uploadImageFB(url))
            })
        })
    }

    return (
        <React.Fragment>
            <input type="file" onChange={selectFile} ref={fileInput} 
            disabled={uploadingCheck}/>
            <Button _onClick={uploadFB}>upload</Button>
        </React.Fragment>
    )
}

export default Upload;