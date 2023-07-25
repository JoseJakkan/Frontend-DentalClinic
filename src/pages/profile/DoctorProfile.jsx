import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// @MUI
import { Container, Typography } from "@mui/material";
import userService from "../../_services/userService";
import doctorServices from "../../_services/doctorServices";

import List from "@mui/material/List";

import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import ListSubheader from "@mui/material/ListSubheader";

import ListItemButton from "@mui/material/ListItemButton";

import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CakeIcon from "@mui/icons-material/Cake";

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

export default function DoctorProfile() {
  // hooks
  const [user, setUser] = useState({});
  const [appointment, setAppointment] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const token = useSelector((state) => state.auth.token);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    doctorAppoinment();
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

  const doctorAppoinment = async () => {
    setIsLoading(true);
    try {
      const data = await doctorServices.doctorAppoinment(token);
      setDates(data);
      console.log("2", data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const ViewAppo = ({ appointments }) => {
    function createData(
      patientName,
      patientLastname,
      doctorName,
      doctorLastname,
      date,
      time
    ) {
      return {
        patientName,
        patientLastname,
        doctorName,
        doctorLastname,
        date,
        time,
      };
    }

    const dates = appointments.map((appointment) =>
      createData(
        appointment.patient.name,
        appointment.patient.lastname,
        appointment.doctor.name,
        appointment.doctor.lastname,
        appointment.date,
        appointment.time
      )
    );
    console.log("1", dates);

    return (
      <>
        <h3>Appointments</h3>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 600 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Doctor</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dates.map((row) => (
                <TableRow
                  key={row.date}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    {row.patientName}
                    {row.patientLastname}
                  </TableCell>

                  <TableCell>
                    {row.doctorName}
                    {row.doctorLastname}
                  </TableCell>

                  <TableCell>{row.date}</TableCell>

                  <TableCell>{row.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  };

  // ---------------------
  return (
    <Container sx={{ mt: 5 }}>
      <Typography
        variant="h1"
        fontSize={40}
        align="center"
        fontWeight={400}
        gutterBottom
      >
        Doctor Panel
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
      <ViewAppo appointments={dates} />
    </Container>
  );
}
