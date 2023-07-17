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
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RestoreIcon from "@mui/icons-material/Restore";
import DeleteIcon from "@mui/icons-material/Delete";

import "../../App.scss";

//table
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

//table

export default function ProfilePage() {
  // hooks
  const [user, setUser] = useState({});
  const [appointment, setAppointment] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    findAppointment();
  }, []);

  function createData(name, doctor, date, time) {
    return { name, doctor, date, time };
  }

  const rows = appointment.map((appointment) =>
    createData(
      appointment.patient_id,
      appointment.doctor_id,
      appointment.date,
      appointment.time
    )
  );

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

  const findAppointment = async () => {
    setIsLoading(true);
    try {
      const data = await userService.findAppointment(token);
      setAppointment(data);
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
              {`${user.user_name} ${user.user_lastname}`}
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
            <ListItemText primary={user.birthdate} />
          </ListItemButton>
        </List>
      </div>
      {/* table */}
      <h3>
        Appointments <AddCircleIcon fontSize="small" />
      </h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Doctor</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{row.patient}</TableCell>

                <TableCell align="right">{row.doctor}</TableCell>

                <TableCell align="right">{row.date}</TableCell>

                <TableCell align="rigth">{row.time}</TableCell>
                <TableCell>
                  {" "}
                  <RestoreIcon fontSize="small" />
                  <DeleteIcon fontSize="small" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
