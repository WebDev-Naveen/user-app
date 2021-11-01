import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserPost, getUserPostAsync } from "./userPostSlice";

function UserPost({ id }) {
  const dispatch = useDispatch();
  const userPost = useSelector(getUserPost);
  console.log(userPost);
  useEffect(() => {
    dispatch(getUserPostAsync({ param: `user/${id}/post`, method: "get" }));
  }, [dispatch, id]);
  return (
    <Box>
      {userPost.userPost?.data?.map((post) => {
        return (
          <Box>
            <p>{post.text}</p>
            <img src={post.image} width="100" height="100" alt="postimage" />
            {post.tags.map((e) => (
              <span>{e}</span>
            ))}
          </Box>
        );
      })}
    </Box>
  );
}

export default UserPost;
