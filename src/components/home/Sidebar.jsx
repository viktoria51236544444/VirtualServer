import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styles from "./home.module.css";
import { Link, NavLink } from "react-router-dom";

const drawerWidth = 240;

function Sidebar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={styles.sidebar__container}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            bgcolor: "#354152",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Typography variant="h6" noWrap component="div">
                Business Soft
              </Typography>
            </div>
            <div style={{ display: "flex", gap: "4%" }}>
              <div>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ fontSize: "18px" }}
                >
                  0
                </Typography>
              </div>
              <div>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ fontSize: "14px" }}
                >
                  victoriaagarkova@gmail.com
                </Typography>
              </div>
              <div>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ fontSize: "14px" }}
                >
                  Язык
                </Typography>
              </div>
            </div>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          ></Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            <div>
              <Toolbar />
              <Divider />
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <img
                        width="30"
                        height="30"
                        src="https://img.icons8.com/ios-filled/50/server-shutdown.png"
                        alt="choose"
                      />
                    </ListItemIcon>
                    <Link
                      style={{ color: "black", textDecoration: "none" }}
                      to={"/myserver"}
                    >
                      <ListItemText primary="Мои сервера" />
                    </Link>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <img
                        width="30"
                        height="30"
                        src="https://img.icons8.com/ios-filled/50/aliexpress.png"
                        alt="aliexpress"
                      />
                    </ListItemIcon>
                    <Link
                      style={{ color: "black", textDecoration: "none" }}
                      to={"/order"}
                    >
                      <ListItemText primary="Заказать сервер" />
                    </Link>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <img
                        width="30"
                        height="30"
                        src="https://img.icons8.com/fluency-systems-filled/48/choose.png"
                        alt="server-shutdown"
                      />
                    </ListItemIcon>
                    <ListItemText primary="Конфигурация" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <img
                        width="30"
                        height="30"
                        src="https://img.icons8.com/ios-filled/50/combi-ticket.png"
                        alt="combi-ticket"
                      />
                    </ListItemIcon>
                    <ListItemText primary="Мои билеты" />
                  </ListItemButton>
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <img
                        width="30"
                        height="30"
                        src="https://img.icons8.com/ios-filled/50/news.png"
                        alt="news"
                      />
                    </ListItemIcon>
                    <ListItemText primary="Новости" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <img
                        width="30"
                        height="30"
                        src="https://img.icons8.com/ios-filled/50/questions.png"
                        alt="questions"
                      />
                    </ListItemIcon>
                    <ListItemText primary="Вопросы" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <img
                        width="30"
                        height="30"
                        src="https://img.icons8.com/glyph-neue/64/online-support.png"
                        alt="online-support"
                      />
                    </ListItemIcon>
                    <ListItemText primary="Помощь" />
                  </ListItemButton>
                </ListItem>
              </List>
            </div>
          </Drawer>
        </Box>
      </Box>
    </div>
  );
}

export default Sidebar;
