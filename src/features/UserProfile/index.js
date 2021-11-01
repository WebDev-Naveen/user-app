import { Card, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getUserProfile, getUserProfileAsync } from "./userProfileSlice";
import { withStyles } from "@mui/styles";
import UserPost from "../userPost";
const styles = (muiBaseTheme) => ({
  media: {
    width: "100px",
    height: "100px",
  },
});

function UserProfile({ classes }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const userProfile = useSelector(getUserProfile);
  console.log(userProfile);

  useEffect(() => {
    dispatch(getUserProfileAsync({ param: `user/${id}`, method: "get" }));
  }, [id, dispatch]);
  return (
    <Box>
      <Box
        width="90%"
        margin="50px auto"
        display="flex"
        alignItems="center"
        justifyContent="space-around"
      >
        <CardMedia
          className={classes.media}
          image={userProfile.usersProfile?.picture}
        />
        <Box>
          <Box>
            {userProfile.usersProfile?.firstName}
            {userProfile.usersProfile?.lastName}
          </Box>
          <Box>{userProfile.usersProfile?.email}</Box>
          <Box>{userProfile.usersProfile?.gender}</Box>
          <Box>{userProfile.usersProfile?.dateOfBirth}</Box>
          <Box>{userProfile.usersProfile?.phone}</Box>
          <Box>
            Address:{userProfile.usersProfile?.location?.street},
            {userProfile.usersProfile?.location?.city},
            {userProfile.usersProfile?.location?.state},
            {userProfile.usersProfile?.location?.country},
            {userProfile.usersProfile?.location?.timezone}
          </Box>
        </Box>
      </Box>
      <Typography>Post</Typography>
      <UserPost id={id} />
    </Box>
  );
}
const UserProfileApp = withStyles(styles)(UserProfile);
export default UserProfileApp;
