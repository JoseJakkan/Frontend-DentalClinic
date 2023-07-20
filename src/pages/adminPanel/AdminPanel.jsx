import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// @MUI
import { Container, Typography, Box, Pagination } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import adminServices from "../../_services/adminServices";
import authService from "../../_services/authService";

// ----------------------------------------------------------------------

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function AdminPage() {
  // hooks
  const [users, setUsers] = useState([]);
  const [usersPage, setUsersPage] = useState(1);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    getUsers();
  }, [usersPage]);

  const handleChange = (event, value) => {
    setUsersPage(value);
  };

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const data = await adminServices.getAll(token, usersPage);
     
      setUsers(data.results);
      setCount(data.info.pages);

      
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const createData = (
    name,
    lastname,
    email,
    birthdate,
    address,
    phone,
    role
  ) => {
    return { name, lastname, email, birthdate, address, phone, role };
  };

  const rows = users.map((user) =>
    createData(
      user.user_name,
      user.user_lastname,
      user.email,
      user.birthdate,
      user.address,
      user.phone,
      user.role_id
    )
  );

  return (
    <>
      <Container sx={{ mt: 5 }}>
        <Typography
          variant="h1"
          fontSize={40}
          align="center"
          fontWeight={400}
          gutterBottom
        >
          Admin panel
        </Typography>
        <Box sx={{ mt: 3, mb: 3, display: "flex", justifyContent: "center" }}>
          <Pagination page={usersPage} count={count} onChange={handleChange} />
        </Box>
        <Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="right">Name</StyledTableCell>
                  <StyledTableCell align="right">Lastname</StyledTableCell>
                  <StyledTableCell align="right">Email</StyledTableCell>
                  <StyledTableCell align="right">Birthdate</StyledTableCell>
                  <StyledTableCell align="right">Address</StyledTableCell>
                  <StyledTableCell align="right">Phone</StyledTableCell>
                  <StyledTableCell align="right">Role</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.lastname}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.email}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.birthdate}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.address}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.phone}</StyledTableCell>
                    <StyledTableCell align="right">{row.role}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </>
  );
}