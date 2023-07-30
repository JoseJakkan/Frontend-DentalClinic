import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import format from "date-fns/format";
import {
  TextField,
  Box,
  Typography,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

import userService from "../../_services/userService";

export default function FindOneAppointment() {
  const token = useSelector((state) => state.auth.token);
  const [appointments, setappointments] = useState(false);

  const handleChange = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      let appointmentId = data.get("name_appoint");

      if (!isNaN(appointmentId) && appointmentId != "") {
        const idAppointment = { appoId: appointmentId };
        console.log(idAppointment);
        console.log(token);
        const appointSearch = await userService.findOneAppointment(
          token,
          idAppointment
        );

        console.log(idAppointment);
        setappointments(appointSearch);
        //console.log(appointSearch);
      }

      // console.log(idCita);

      // setSuccess("Se ha modificado correctamente");
    } catch (error) {
      console.log(error.message);
    }
  };

  /////////////////////////////////////////////////////////////////

  const AppointmentsView = ({ appointment }) => {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Appointment number</TableCell>
              <TableCell>Patient</TableCell>
              <TableCell>Doctor</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointment.map((appoint) => (
              <TableRow key={appoint.patient.id}>
                <TableCell>{appoint.id}</TableCell>
                <TableCell>{appoint.patient.user.user_name}</TableCell>
                <TableCell>{appoint.doctor.user.user_name}</TableCell>
                <TableCell>
                  {format(new Date(appoint.fecha), "dd/MM/yyyy")}
                </TableCell>
                {/* <TableCell>
                                    <Button startIcon={<DeleteIcon />} sx={{color: "red"}} onClick={()=> clickDelete(appoint)}/>
                                </TableCell>
                                <TableCell>
                                    <Button startIcon={<CreateIcon />} onClick={()=> changeAppointment(appoint)}/>
                                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  /////////////////////////////////////////////////////////////////

  return (
    <div className="back">
      <Typography
        variant="h6"
        gutterBottom
        textAlign={"center"}
        sx={{ marginTop: "30px" }}
      >
        Search your appointment by number
      </Typography>
      <Box
        component="form"
        sx={{ display: "flex", justifyContent: "center", mt: 3 }}
        onSubmit={handleChange}
      >
        <TextField name="name_appoint" label="Search" variant="filled" />
        <Button sx={{ ml: 3 }} type="submit" variant="contained">
          Search
        </Button>
      </Box>
      {appointments && (
        <Box sx={{ mt: 5 }}>
          <Typography component="h3" variant="h5" gutterBottom>
            Appointment
          </Typography>
          <AppointmentsView appointment={appointments} />
        </Box>
      )}
    </div>
  );
}


