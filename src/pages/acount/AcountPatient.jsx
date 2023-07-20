import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// @MUI
import { Container, Typography } from "@mui/material";
import userService from "../../_services/userService";

import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import "../../App.scss";

export default function AcountPage() {
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
    } catch (error) {
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
        Acount
      </Typography>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          id="outlined-required"
          label="Name"
          defaultValue={user.user_name}
        />

        <TextField
          required
          id="outlined-required"
          label="Last Name"
          defaultValue={user.ser_lastname}
        />

        <TextField
          id="outlined-read-only-input"
          label="Email"
          defaultValue={user.email}
          InputProps={{
            readOnly: true,
          }}
        />

        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete={user.password}
        />
        <TextField
          required
          id="outlined-required"
          label="Address"
          defaultValue={user.address}
        />
        <TextField
          id="outlined-number"
          label="Phone"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>
    </Container>
  );
}
