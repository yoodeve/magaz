import React from "react";
import { Grid, Text, Button, Image, Input } from "../elements";
import Upload from "../shared/Upload";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as imageActions } from "../redux/modules/image";

const PostWrite = (props) => {
  const dispatch = useDispatch();

  const is_login = useSelector((state)=>state.user.is_login);
  const preview = useSelector((state)=>state.image.preview);
  const post_list = useSelector((state)=>state.post.list);
  
  const post_id = props.match.params.id;
  const is_edit = post_id? true:false;
  const {history} = props;
  
  let postData = is_edit?post_list.find((p)=>p.id===post_id):null;

  const [contents, setContents] = React.useState(postData?postData.contents:'');

  const editPost = () => {
    dispatch(postActions.editPostFB(post_id, {contents:contents}));
  }

  console.log(preview, postData);
  React.useEffect (()=> {
    if(is_edit && ! postData) {
    window.alert('포스트 정보가 없습니다');
    history.goBack();

    return;
    }
    if(is_edit){
      console.log(imageActions.setPre(postData.img_url))
      dispatch(imageActions.setPre(postData.img_url));
    }
  },[])

  const changeContents = (e) => {
    setContents(e.target.value);
  }

  const addPost = () => {
    if(!contents || !preview){
      window.alert('게시물을 작성하세요')
      return;
    }
    dispatch(postActions.addPostFB(contents));
  }

  if(!is_login){
    return (
      <Grid margin = "100px 0px" padding="16px" center width="80%">
        <Text size="30px" bold>앗! 잠시</Text>
        <Text size="15px">로그인 하고 오세요 !</Text>
        <Button _onClick={()=>{history.replace("/");}}>로그인 ㄱㄱ</Button>
      </Grid>
    )}
      return <React.Fragment>
        <Grid padding="16px" width="80%">
          <Text margin="0px" size="36px" bold>
            {is_edit?"게시글수정":"게시글 작성"}
          </Text>
          <Upload/>
        </Grid>

        <Grid>
          <Grid padding="16px">
            <Text margin="0px" size="24px" bold>
              미리보기
            </Text>
          </Grid>
          <Image shape="rectangle"
          src = { preview ?
            preview : 
            postData && postData.image_url ? 
            postData.image_url : 
            "https://previews.123rf.com/images/kolibrico/kolibrico2002/kolibrico200200005/139369246-vector-empty-transparent-background-vector-transparency-grid-seamless-pattern-.jpg"} />
        </Grid>

        <Grid padding="16px" width="80%">
          <Input 
          value={contents}
          _onChange={changeContents} label="게시글 내용" 
          placeholder="게시글 작성" multiLine />
        </Grid>

        <Grid padding="16px" width="80%">
          {is_edit?
          <div>
            <Button _onClick={editPost} text="게시글 수정" width="48%"></Button>
            <Button _onClick={()=>{history.replace('/')}} text="뒤로가기" width="48%"></Button>
          </div>
          :
          // (Image.src="https://previews.123rf.com/images/kolibrico/kolibrico2002/kolibrico200200005/139369246-vector-empty-transparent-background-vector-transparency-grid-seamless-pattern-.jpg"?
          // (<Button text="게시물 작성하고 누르기"></Button>) :
          (
            <div>
              <Button _onClick={addPost} text="게시글 작성" width="48%"></Button>
              <Button _onClick={()=>{history.replace('/')}} text="뒤로가기" width="48%"></Button>
            </div>
          )
          }
        </Grid>
      </React.Fragment>
}

export default PostWrite;