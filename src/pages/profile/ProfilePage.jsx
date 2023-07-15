import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// @MUI
import { Container, Typography } from "@mui/material";
import userService from "../../_services/userService";

import { styled } from "@mui/material/styles";

import List from "@mui/material/List";

import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import ListSubheader from "@mui/material/ListSubheader";

import ListItemButton from "@mui/material/ListItemButton";

import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CakeIcon from "@mui/icons-material/Cake";

import "../../App.scss";

export default function ProfilePage() {
  // hooks
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    setIsLoading(true);
    try {
      const data = await userService.getProfile(token);
      setUser(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const Demo = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));

  function NestedList() {
    const [open, setOpen] = React.useState(true);
  }
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Typography
        variant="h1"
        fontSize={40}
        align="center"
        fontWeight={400}
        gutterBottom
      >
        Profile
      </Typography>
      <div className="divCenter">
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            align: "center",
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              sx={{ fontSize: 50, align: "center" }}
            >
              {`${user.name} ${user.last_name}`}
            </ListSubheader>
          }
        >
          <ListItemButton>
            <ListItemIcon>
              <AlternateEmailIcon />
            </ListItemIcon>
            <ListItemText primary={user.email} />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <CakeIcon />
            </ListItemIcon>
            <ListItemText primary={user.birthday} />
          </ListItemButton>
        </List>
      </div>
    </Container>
  );
}
