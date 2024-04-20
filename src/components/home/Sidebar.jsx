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
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next"; // Добавлено
import styles from "./home.module.css";
import Group1 from "./SidebarSvg/Group 2226.svg";
import Group2 from "./SidebarSvg/Group 2215.svg";
import Group3 from "./SidebarSvg/Group 2213.svg";
import Group4 from "./SidebarSvg/Group 2212.svg";
import Group5 from "./SidebarSvg/Group 2201.svg";
import Group6 from "./SidebarSvg/Group 2225.svg";
import Group7 from "./SidebarSvg/Group 2220.svg";
import Group26 from "./SidebarSvg/Group 26.svg";

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
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("ru");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleLanguageClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = (lang) => {
    setAnchorEl(null);
    setSelectedLanguage(lang);
  };

  const isMenuOpen = Boolean(anchorEl);

  // Используйте хуки useTranslation для получения функций перевода
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <CssBaseline />
      <Box
        sx={{
          width: `calc(98% - ${drawerWidth}px)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 40px",
          marginLeft: "20%",
          backgroundColor: "white",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
          borderRadius: "10px",
          height: "80px",
          marginTop: "1%",
        }}
      >
        <div className={styles.search__container}>
          <input
            className={styles.search__input}
            type="text"
            placeholder={t("search")}
          />
        </div>

        <div className={styles.navbarRight}>
          <IconButton onClick={handleLanguageClick}>
            <LanguageIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={isMenuOpen}
            onClose={() => handleLanguageClose(selectedLanguage)}
          >
            <MenuItem onClick={() => handleLanguageClose("ru")}>
              Русский
            </MenuItem>
            <MenuItem onClick={() => handleLanguageClose("en")}>
              English
            </MenuItem>
            <MenuItem onClick={() => handleLanguageClose("kg")}>
              Кыргызча
            </MenuItem>
          </Menu>
        </div>
      </Box>

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
            <Link to={"/auth"} style={{ textDecoration: "none" }}>
              <p>Виктория</p>
            </Link>
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
                        <img style={{ width: "20px" }} src={item.icon} alt="" />
                      </ListItemIcon>
                      <ListItemText
                        className={styles.listItemText}
                        primary={t(item.text)} // Используйте функцию перевода для текста
                      />
                    </ListItemButton>
                  </ListItem>
                </Link>
              ))}
            </List>
          </div>
        </Drawer>
      </Box>
    </div>
  );
}

export default Sidebar;
