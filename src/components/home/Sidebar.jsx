import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import styles from "./home.module.css";
import { Link } from "react-router-dom";
import Group1 from "./image/Group 2226.svg";
import Group2 from "./image/文件夹.svg";
import Group3 from "./image/Group 2213.svg";
import Group4 from "./image/Group 2212.svg";
import Group5 from "./image/Group 2201.svg";
import Group6 from "./image/Group 2225.svg";
import Group7 from "./image/Group 2220.svg";

const drawerWidth = 240;

function Sidebar(props) {
  const { window } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={styles.sidebar__container}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Box
          component="nav"
          sx={{
            width: { sm: drawerWidth },
            flexShrink: { sm: 0 },
            fontFamily: "Nunito",
          }}
          aria-label="mailbox folders"
        >
          <Drawer
            container={container}
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                backgroundColor: "#fff",
                color: "#25396f",
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
              },
            }}
            open
          >
            <div>
              <Toolbar />
              <List>
                <ListItem disablePadding className={styles.listItem}>
                  <ListItemButton>
                    <ListItemIcon className={styles.listItemIcon}>
                      <img style={{ width: "22px" }} src={Group1} alt="" />
                    </ListItemIcon>
                    <Link
                      style={{
                        color: "inherit",
                        textDecoration: "none",
                      }}
                      to={"/myserver"}
                    >
                      <ListItemText
                        className={styles.listItemText}
                        primary="Мои сервера"
                      />
                    </Link>
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding className={styles.listItem}>
                  <ListItemButton>
                    <ListItemIcon className={styles.listItemIcon}>
                      <img style={{ width: "30px" }} src={Group2} alt="" />
                    </ListItemIcon>
                    <Link
                      style={{ color: "inherit", textDecoration: "none" }}
                      to={"/order"}
                    >
                      <ListItemText
                        className={styles.listItemText}
                        primary="Заказать сервер"
                      />
                    </Link>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding className={styles.listItem}>
                  <ListItemButton>
                    <ListItemIcon className={styles.listItemIcon}>
                      <img style={{ width: "22px" }} src={Group3} alt="" />
                    </ListItemIcon>
                    <Link to={"/config"} style={{ textDecoration: "none" }}>
                      <ListItemText
                        className={styles.listItemText}
                        primary="Конфигурация"
                      />
                    </Link>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding className={styles.listItem}>
                  <ListItemButton>
                    <ListItemIcon className={styles.listItemIcon}>
                      <img style={{ width: "22px" }} src={Group4} alt="" />
                    </ListItemIcon>
                    <ListItemText
                      className={styles.listItemText}
                      primary="Мои тикеты"
                    />
                  </ListItemButton>
                </ListItem>
              </List>
              <List>
                <ListItem disablePadding className={styles.listItem}>
                  <ListItemButton>
                    <ListItemIcon className={styles.listItemIcon}>
                      <img style={{ width: "22px" }} src={Group5} alt="news" />
                    </ListItemIcon>
                    <ListItemText
                      className={styles.listItemText}
                      primary="Новости"
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding className={styles.listItem}>
                  <ListItemButton>
                    <ListItemIcon className={styles.listItemIcon}>
                      <img
                        style={{ width: "23px" }}
                        src={Group6}
                        alt="questions"
                      />
                    </ListItemIcon>
                    <ListItemText
                      className={styles.listItemText}
                      primary="Вопросы"
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding className={styles.listItem}>
                  <ListItemButton>
                    <ListItemIcon className={styles.listItemIcon}>
                      <img
                        style={{ width: "25px" }}
                        src={Group7}
                        alt="online-support"
                      />
                    </ListItemIcon>
                    <ListItemText
                      className={styles.listItemText}
                      primary="Помощь"
                    />
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
