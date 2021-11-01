import React from "react";

import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { withStyles } from "@mui/styles";

const styles = (muiBaseTheme) => ({
  card: {
    maxWidth: 300,
    margin: "auto",
    marginRight: "16px",
    marginBottom: "20px",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  media: {
    paddingTop: "56.25%",
  },
  content: {
    textAlign: "left",
    padding: 10,
  },
  divider: {
    margin: `10px 0`,
  },
  heading: {
    fontWeight: "bold",
  },
  subheading: {
    lineHeight: 1.8,
  },
  avatar: {
    display: "inline-block",
    border: "2px solid white",
    "&:not(:first-of-type)": {
      marginLeft: 10,
    },
  },
});

function UserCard({ classes, data }) {
  return (
    <div className="App">
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={data.picture} />
        <CardContent className={classes.content}>
          <Typography
            className={"MuiTypography--heading"}
            variant={"h6"}
            gutterBottom
          >
            {data.firstName} {data.lastName}
          </Typography>
          <Typography
            className={"MuiTypography--subheading"}
            variant={"caption"}
          >
            {data.title}
          </Typography>
        </CardContent>
        <Button
          variant="outlined"
          style={{ marginBottom: "20px", marginLeft: "10px" }}
        >
          Edit
        </Button>
        <Button
          variant="outlined"
          style={{
            marginBottom: "20px",
            marginLeft: "40px",
            marginRight: "10px",
            border: "1px solid red",
            color: "red",
          }}
        >
          Delete
        </Button>
      </Card>
    </div>
  );
}

const EmployeeCardApp = withStyles(styles)(UserCard);
export default EmployeeCardApp;
