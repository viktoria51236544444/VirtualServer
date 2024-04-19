import React, { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import styles from "./home.module.css";
import Group1 from "./image/Group 2226.svg";
import Group2 from "./image/文件夹.svg";
import Group3 from "./image/Group 2213.svg";
import Group4 from "./image/Group 2212.svg";
import Group5 from "./image/Group 2201.svg";
import Group6 from "./image/Group 2225.svg";
import Group7 from "./image/Group 2220.svg";
import Group26 from "./image/Group 26.svg";

const drawerWidth = 290;

const navigationItems = {
  servers: {
    text: "Мои сервера",
    icon: Group1,
    link: "/myserver",
  },
  order: {
    text: "Заказать сервер",
    icon: Group2,
    link: "/order",
  },
  config: {
    text: "Конфигурация",
    icon: Group3,
    link: "/config",
  },
  tickets: {
    text: "Мои тикеты",
    icon: Group4,
  },
  news: {
    text: "Новости",
    icon: Group5,
  },
  questions: {
    text: "Вопросы",
    icon: Group6,
  },
  help: {
    text: "Помощь",
    icon: Group7,
  },
};

function Sidebar(props) {
  const { window } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

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
            <div className={styles.container__header_sidebar}>
              <img
                className={styles.img_user}
                src="https://zuramai.github.io/mazer/demo/assets/compiled/jpg/5.jpg"
                alt=""
              />
              <p>Виктория</p>
              <p style={{ marginLeft: "6%" }}>2000$</p>
              <img style={{ width: "40px" }} src={Group26} alt="" />
            </div>
            <div>
              <List>
                {Object.entries(navigationItems).map(([itemId, item]) => (
                  <Link
                    key={itemId}
                    to={item.link}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <ListItem
                      disablePadding
                      className={`${styles.listItem} ${
                        selectedItem === itemId ? styles.selectedItem : ""
                      }`}
                    >
                      <ListItemButton onClick={() => handleItemClick(itemId)}>
                        <ListItemIcon className={styles.listItemIcon}>
                          <img
                            style={{ width: "22px" }}
                            src={item.icon}
                            alt=""
                          />
                        </ListItemIcon>
                        <ListItemText
                          className={styles.listItemText}
                          primary={item.text}
                        />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                ))}
              </List>
            </div>
          </Drawer>
        </Box>
      </Box>
    </div>
  );
}

export default Sidebar;
