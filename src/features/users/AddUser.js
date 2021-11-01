import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Controller, useForm } from "react-hook-form";

function AddUser() {
  const { control, handleSubmit, reset } = useForm();
  function onSubmit(data, e) {
    console.log(data);
    e.target.reset();
    reset();
  }

  return (
    <Box width="100%">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          display="flex"
          flexDirection="column"
          width="100%"
          alignItems="center"
        >
          <Box width="40%" marginTop="100px">
            <Controller
              name="firstName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  id="outlined-basic"
                  label="firstName"
                  variant="outlined"
                  {...field}
                  style={{ width: "100%" }}
                />
              )}
            />
          </Box>
          <Box width="40%" marginTop="20px">
            <Controller
              name="lastName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  id="outlined-basic"
                  label="lastName"
                  variant="outlined"
                  {...field}
                  style={{ width: "100%" }}
                />
              )}
            />
          </Box>
          <Box width="40%" marginTop="20px">
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  id="outlined-basic"
                  label="email"
                  variant="outlined"
                  {...field}
                  style={{ width: "100%" }}
                />
              )}
            />
          </Box>
          <Box width="60%" marginTop="20px">
            <Button type="submit" variant="outlined">
              Add User
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
}

export default AddUser;
