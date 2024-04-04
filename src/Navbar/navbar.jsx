import { useLocation, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import MobileLink from "./Mobile_Link";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import StyledButton from "./button";
import CssBaseline from "@mui/material/CssBaseline";
import srijanlogo from "../../src/Group 33.png";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, Outlet } from "react-router-dom";
import { Link as ScrollRouter } from "react-scroll";

import { Dropdown } from "flowbite-react";

import Wrapper from "./styles";

const StyledDrawer = styled(Drawer)({
  ".bottomBar": {
    borderTop: "1px solid #fff",
    zIndex: "9999",
    background: "black",
    transition: "all 0.3s ease",
    color: "#fff",
  },
});

const Navbar = () => {
   
  const navigate = useNavigate();
  const window = document.body;
  // const mobileView = window.length >= 600;
  // useEffect(() => {
  //   console.log(mobileView);
  // }, [window.length]);

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const scrollDown = () => {
    handleDrawerToggle();
  };

  return (
    <>
      <Wrapper>
        {/* <section className="navbar"> */}
        <div className="d-center">
          <Box sx={{ display: "flex" }} className="d-center">
            <CssBaseline />
            <AppBar component="nav" className="navbar p-9">
              <Toolbar className="w-full toolbar">
                <IconButton
                  color="white"
                  aria-label="open drawer"
                  edge="start"
                  className="postion"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { md: "none" } }}
                >
                  {mobileOpen ? (
                    <CloseIcon className="white" />
                  ) : (
                    <MenuIcon className="white" />
                  )}
                </IconButton>
                <Box
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ color: "#fff", marginRight: "100px" }}
                  >
                    <Button component={Link} to="/">
                      <img src={srijanlogo} width="70px" alt="Hackfest"></img>
                    </Button>
                  </Typography>

                  <Box
                    sx={{
                      display: {
                        xs: "none",
                        md: "flex",
                      },
                      flexGrow: 1,
                      justifyContent: "space-around",
                    }}
                  >
                    {/* <Link to="/admin">
                      <StyledButton name="Events" />
                    </Link> */}
                    <Link to="/event">
                      <StyledButton name="EVENTS" />
                    </Link>
                    <Link to="/accomodation">
                        <StyledButton name="ACCOMODATION" />
                      </Link>
                    
                    <Link to="/merchant">
                      <StyledButton name="MERCHANDISE" />
                    </Link>
                    
                    <Link to="/about">
                      <StyledButton name="ABOUT"></StyledButton>
                    </Link>
                    <Link to="/team">
                      <StyledButton name="CORE TEAM"></StyledButton>
                    </Link>
                     
                    {/* <StyledButton name="Sponsors"></StyledButton>

                  <StyledButton name="Merchandise"></StyledButton>
                  <StyledButton name="About Us"></StyledButton>
                  <StyledButton name="Teams"></StyledButton> */}
                  </Box>
                  <Box
                    sx={{
                      display: {
                        xs: "none",
                        md: "block",
                      },
                    }}
                  >
                    <IconButton
                      color="inherit"
                      component="a"
                      target="_blank"
                      href="https://play.google.com/store/apps/details?id=com.iitism.concetto&pli=1"
                      className="playStoreIcon"
                    ></IconButton>
                  </Box>
                </Box>
              </Toolbar>
            </AppBar>
            <nav>
              <StyledDrawer
                container={window}
                variant="temporary"
                open={mobileOpen}
                anchor={"bottom"}
                className="bottomBar"
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                  display: { xs: "block", sm: "none" },
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: "100vw",
                    height: "100vh",
                    background: "#171717",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "center",
                  },
                }}
              >
                <Box
                  onClick={handleDrawerToggle}
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {/* <Divider /> */}

                  <List>
                    {localStorage.getItem("token") == null ||
                      localStorage.getItem("token") == undefined ? (
                      <div>
                        <Link to={"/register"}>
                          <MobileLink url="/register" text="REGISTER" />
                        </Link>
                        <Link to={"/login"}>
                          <MobileLink url="/login" text="LOGIN" />
                        </Link>
                      </div>
                    ) : (
                      <div>
                        <Link to={"/"}>
                          <MobileLink
                            url="/"
                            text={localStorage.getItem("email")}
                          />
                        </Link>
                      </div>
                    )}

                    <Link to={"/event"}>
                      <MobileLink url="/event" text="EVENTS" />
                    </Link>

                    {/* <ScrollRouter
                      to="sponsor"
                      spy={true}
                      smooth={true}
                      duration={3000}
                      onClick={scrollDown}
                    >
                      <MobileLink
                        text="Sponsors"
                        component="a"
                        href="https://linktr.ee/Concetto_Workshops"
                        target="_blank"
                        rel="noreferrer"
                      />
                    </ScrollRouter> */}
                    
                              <Link to={"/accomodation"}>
                                {" "}
                                <MobileLink
                        text="ACCOMODATION"
                        component="a"
                        url="/merchant"
                        target="_blank"
                        rel="noreferrer"
                      />
                              </Link>
                             
                    <Link to={"/merchant"}>
                      <MobileLink
                        text="MERCHANDISE"
                        component="a"
                        url="/merchant"
                        target="_blank"
                        rel="noreferrer"
                      />
                    </Link>
                    {localStorage.getItem("token") == null ||
                      localStorage.getItem("token") == undefined ? (
                      ""
                    ) : (
                      <>
                        <Link to={"/profile"}>
                          <MobileLink
                            text="PROFILE"
                            component="a"
                            url="/profile"
                            target="_blank"
                            rel="noreferrer"
                          />
                        </Link>
                      </>
                    )}

                    <Link to={"/team"}>
                      <MobileLink
                        text="CORE TEAM"
                        component="a"
                        href="https://forms.gle/J5f4kswgcTCcmLB78"
                        target="_blank"
                        rel="noreferrer"
                      />
                    </Link>

                    {/* <ListItem
                      disablePadding
                      sx={{ borderBottom: "1px solid white" }}
                    >
                      <ListItemButton
                        sx={{
                          textAlign: "center",
                          "&:hover": { color: "#f7f75d" },
                        }}
                        className="mobile-nav-links"
                      >
                        <ListItemText
                          className="mobile-nav-links"
                          primaryTypographyProps={{
                            fontSize: "1.5em",
                            fontFamily: `"ReFormationSansRegular", sans-serif !important`,
                          }}
                          primary="Sponsors"
                        />
                      </ListItemButton>
                    </ListItem> */}
                    {/* <MobileLink url="/tshirt" text="Merchandise" /> */}
                    <Link to="/about">
                      <MobileLink url="/about" text="ABOUT" noBorder />
                    </Link>
                    <hr />
                    {localStorage.getItem("token") == null ||
                      localStorage.getItem("token") == undefined ? (
                      ""
                    ) : (
                      <Link
                        to="/"
                        onClick={() => {
                          localStorage.clear();
                          navigate("/");
                        }}
                      >
                        {/* <i class="fa-solid fa-right-from-bracket"></i>{" "} */}

                        <MobileLink url="/" text="LOGOUT" />
                      </Link>
                    )}

                    {/* <MobileLink url="/teams" text="Teams" noBorder /> */}
                  </List>
                </Box>
              </StyledDrawer>
            </nav>
          </Box>
        </div>
      </Wrapper>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Navbar;