import * as React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SchoolTwoToneIcon from "@mui/icons-material/SchoolTwoTone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Divider } from "@mui/material";
import BuildTwoToneIcon from "@mui/icons-material/BuildTwoTone";
import LoginTwoToneIcon from "@mui/icons-material/LoginTwoTone";
import AppRegistrationTwoToneIcon from "@mui/icons-material/AppRegistrationTwoTone";
import { updateAuthStateLogout } from "../../features/login/updateAuthState";
import { GiKoala } from "react-icons/gi";

// ----------------------------------------------------------------------

const handleLogout = () => {
  console.log("logout");
  updateAuthStateLogout();
};

const pages = [
  { title: "Home", path: "/" },
  { title: "Services", path: "/" },
  { title: "About", path: "/" },
];

const settings = [
  { title: "Profile", path: "/profile", handle: null },
  { title: "Logout", path: "/", handle: handleLogout },
];

// ----------------------------------------------------------------------

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userName = useSelector((state) => state.auth.userInfo.name);
  const userRole = useSelector((state) => state.auth.userInfo.role);
  const isAdmin = userRole == "admin";

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      className="ResponsiveAppBar"
      color={isAdmin ? "error" : "primary"}
    >
      <Container>
        <Toolbar disableGutters>
          <GiKoala
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              fontWeight: 1000,
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 500,
              letterSpacing: ".3rem",
              className: "secondaryColor",
              textDecoration: "none",
            }}
          >
            Philip Sherman's Dentist Office
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              className="primaryColor"
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <NavLink
                  style={{ textDecoration: "none" }}
                  to={page.path}
                  key={page.title}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                </NavLink>
              ))}
            </Menu>
          </Box>
          <SchoolTwoToneIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <NavLink
                style={{ textDecoration: "none" }}
                to={page.path}
                key={page.title}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.title}
                </Button>
              </NavLink>
            ))}
          </Box>

          {!isLoggedIn && (
            <Box sx={{ flexGrow: 0, display: { xs: "flex" } }}>
              <NavLink style={{ textDecoration: "none" }} to="/login">
                <Button
                  variant="contained"
                  startIcon={<LoginTwoToneIcon />}
                  sx={{
                    my: 2,
                    mr: 1,
                    color: "white",

                    backgroundColor: "#3F51B5",
                  }}
                >
                  Login
                </Button>
              </NavLink>

              <NavLink style={{ textDecoration: "none" }} to="/register">
                <Button
                  variant="contained"
                  startIcon={<AppRegistrationTwoToneIcon />}
                  sx={{
                    my: 2,
                    color: "white",
                    backgroundColor: "#3F51B5",
                  }}
                >
                  Register
                </Button>
              </NavLink>
            </Box>
          )}

          {isAdmin && (
            <Box sx={{ flexGrow: 0, display: { xs: "flex" }, mr: 4 }}>
              <NavLink style={{ textDecoration: "none" }} to="/admin">
                <Button
                  variant="contained"
                  startIcon={<BuildTwoToneIcon />}
                  color="warning"
                  sx={{
                    my: 2,
                    color: "white",
                  }}
                >
                  Admin panel
                </Button>
              </NavLink>
            </Box>
          )}

          {/* user settings */}
          {isLoggedIn && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <AccountCircleIcon
                    sx={{
                      display: { xs: "flex" },
                      mr: 1,
                      color: "white",
                    }}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem sx={{ cursor: "default", pointerEvents: "none" }}>
                  <Typography textAlign="center" fontWeight={500}>
                    Welcome, {userName}
                  </Typography>
                </MenuItem>
                <Divider />
                {settings.map((setting) => (
                  <NavLink
                    style={{ textDecoration: "none" }}
                    to={setting.path}
                    key={setting.title}
                    onClick={setting.handle}
                  >
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">
                        {setting.title}
                      </Typography>
                    </MenuItem>
                  </NavLink>
                ))}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
