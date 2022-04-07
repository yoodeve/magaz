import React from "react";
import { useDispatch } from "react-redux";

import { Grid, Image, Text, Button } from "../elements";
import { history } from "../redux/configureStore";
import { actionCreators as postAction } from "../redux/modules/post";

const Post = (props) => {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
        <Grid is_flex padding="16px" width="100%" bg="alice-blue">
          <Grid is_flex width="auto">
            <Image shape="circle" src={props.src} size="100%"/>
            <Text color="#464E2E" size="20px" bold>{props.user_info.user_name}</Text>
          </Grid>
          <Grid is_flex width="auto">
            <Text>{props.insert_dt}</Text>
            {props.is_me && (
              <Button
                padding="7px"
                width="auto"
                margin="7px"
                _onClick={() => {
                  history.push(`/write/${props.id}`);
                }}
              >
                수정하기
              </Button>
            )}
            {props.is_me && (
              <Button
                padding="7px"
                width="auto"
                margin="7px"
                // _onClick={() => {
                //   dispatch(postAction.deletePostFB())
                //   }}
                  >
                삭제하기
              </Button>
            )}
          </Grid>
        </Grid>
        <Grid padding="16px">
          <Text size="18px">{props.contents}</Text>
        </Grid>
        <Grid>
          <Image shape="rectangle" src={props.image_url}/>
        </Grid>
        <Grid padding="16px" is_flex>
          <Text margin="0px" bold>
            댓글 {props.comment_cnt}개
          </Text>
        </Grid>
    </React.Fragment>
  );
};

Post.defaultProps = {
  user_info: {
    user_name: "yoo",
    user_profile:
      "https://i.pinimg.com/236x/01/a8/63/01a863d210654433f6334764f003307c.jpg",
  },
  image_url:
    "https://i.pinimg.com/236x/01/a8/63/01a863d210654433f6334764f003307c.jpg",
  contents: "관심주시오...!",
  comment_cnt: 10,
  like_cnt: "2.2k",
  insert_dt: "2021-02-27 10:00:00",
  is_me: false,
};

export default Post;
