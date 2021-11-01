import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import styled from "styled-components";
import UserCardApp from "./UserCard";
import { NavLink } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getAllEmployees, getUserAsync } from "./userSlice";

const AddEmployee = styled(NavLink)`
  height: 40px;
  border: 1px solid blue;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  margin-top: 20px;
  margin-left: 60px;
  border-radius: 4px;
`;

function EmployeeList() {
  const dispatch = useDispatch();
  const users = useSelector(getAllEmployees);

  useEffect(() => {
    dispatch(getUserAsync({ param: "user", method: "get" }));
  }, [dispatch]);
  return (
    <div>
      {users.loaded ? (
        <>
          <nav>
            <AddEmployee to="/add_user">Add User</AddEmployee>
          </nav>
          <Typography fontSize="18px"> Users </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              marginTop: "20px",
            }}
          >
            <Box
              display="flex"
              flexWrap="wrap"
              width="98%"
              justifyContent="center"
            >
              {users.users?.map((e) => (
                <UserCardApp key={e.id} data={e} />
              ))}
            </Box>
          </div>
        </>
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
}

export default EmployeeList;
