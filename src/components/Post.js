import React from "react";
// import Grid from "../elements/Grid";
// import Image from "../elements/Image";
// import Text from "../elements/Text";

import {Grid, Image, Text, Button} from "../elements";
import {history} from "../redux/configureStore";

const Post = (props) => {

    return (
      <React.Fragment>
        <Grid>
          <Grid is_flex padding="16px">
            <Grid is_flex width="auto">
              <Image shape="circle" src={props.src} />
              <Text bold>{props.user_info.user_name}</Text>
            </Grid>
            <Grid is_flex width="auto">
              <Text>{props.insert_dt}</Text>
              {props.is_me && 
              <Button padding='4px' width='auto' margin='4px'
              _onClick={()=>{history.push(`/write/${props.id}`);
            }}>
                수정하기</Button>}
            </Grid>
          </Grid>
          <Grid padding="16px">
            <Text>{props.contents}</Text>
          </Grid>
          <Grid>
            <Image shape="rectangle" src={props.image_url}/>
          </Grid>
          <Grid padding="16px" is_flex>
            <Text margin="0px" bold>댓글 {props.comment_cnt}개</Text>
            <Text margin="0px" bold>좋아요 {props.like_cnt}개</Text>
          </Grid>
        </Grid>
      </React.Fragment>
    );
}

Post.defaultProps = {
  user_info: {
    user_name: "yoo",
    user_profile: "https://i.pinimg.com/236x/01/a8/63/01a863d210654433f6334764f003307c.jpg",
  },
  image_url: "https://i.pinimg.com/236x/01/a8/63/01a863d210654433f6334764f003307c.jpg",
  contents: "고양이네요!",
  comment_cnt: 10,
  like_cnt:"2.2k",
  insert_dt: "2021-02-27 10:00:00",
  is_me:false,
};

export default Post;