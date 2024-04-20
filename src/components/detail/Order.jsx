import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Drawer, List, ListItem, ListItemText } from "@mui/material";
import CloudVPSIcon from "./orderServerIcons/CloudVPSIcon";
import StorageVPSIcon from "./orderServerIcons/StorageVPSIcon";
import CloudVDSIcon from "./orderServerIcons/CloudVDSIcon";
import BareMetalIcon from "./orderServerIcons/BareMetalIcon";
import ObjectStorageIcon from "./orderServerIcons/ObjectStorageIcon";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Order() {
  const [value, setValue] = React.useState(0);
  const [filteredExamples, setFilteredExamples] = React.useState([]);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [selectedServer, setSelectedServer] = React.useState(null);

  const columns = [
    ["Модель", "RAM", "CPU", "SSD Nvme", "Цена"],
    ["Модель", "RAM", "CPU", "SSD Nvme", "Цена"],
    ["Модель", "RAM", "CPU", "SSD Nvme", "Цена"],
    ["Модель", "RAM", "CPU", "SSD Nvme", "Цена"],
  ];

  const columnIndex = [
    [0, 1, 2, 3, 4],
    [0, 1, 2, 3, 4],
    [0, 1, 2, 3, 4],
    [0, 1, 2, 3, 4],
  ];

  const servers = [
    [
      {
        label: "VDS",
        ram: "2 GB RAM",
        cpu: "CPU 2",
        ssd: "SSD nvme 32 Gb",
        price: "475 сомов",
      },
      {
        label: "VDS",
        ram: "2 GB RAM",
        cpu: "CPU 2",
        ssd: "SSD nvme 32 Gb",
        price: "475 сомов",
      },
      {
        label: "VDS",
        ram: "2 GB RAM",
        cpu: "CPU 2",
        ssd: "SSD nvme 32 Gb",
        price: "475 сомов",
      },
    ],
    [
      {
        label: "VDS",
        ram: "4 GB RAM",
        cpu: "CPU 4",
        ssd: "SSD nvme 32 Gb",
        price: "750 сомов",
      },
      {
        label: "VDS",
        ram: "4 GB RAM",
        cpu: "CPU 4",
        ssd: "SSD nvme 32 Gb",
        price: "750 сомов",
      },
      {
        label: "VDS",
        ram: "4 GB RAM",
        cpu: "CPU 4",
        ssd: "SSD nvme 32 Gb",
        price: "750 сомов",
      },
    ],
    [
      {
        label: "VDS",
        ram: "6 GB RAM",
        cpu: "CPU 6",
        ssd: "SSD nvme 32 Gb",
        price: "900 сомов",
      },
      {
        label: "VDS",
        ram: "6 GB RAM",
        cpu: "CPU 6",
        ssd: "SSD nvme 32 Gb",
        price: "900 сомов",
      },
      {
        label: "VDS",
        ram: "6 GB RAM",
        cpu: "CPU 6",
        ssd: "SSD nvme 32 Gb",
        price: "900 сомов",
      },
    ],
    [
      {
        label: "VDS",
        ram: "8 GB RAM",
        cpu: "CPU 8",
        ssd: "SSD nvme 64 Gb",
        price: "1500 сомов",
      },
      {
        label: "VDS",
        ram: "8 GB RAM",
        cpu: "CPU 8",
        ssd: "SSD nvme 64 Gb",
        price: "1500 сомов",
      },
      {
        label: "VDS",
        ram: "8 GB RAM",
        cpu: "CPU 8",
        ssd: "SSD nvme 64 Gb",
        price: "1500 сомов",
      },
    ],
  ];

  // Изначально устанавливаем примеры для первой вкладки
  React.useEffect(() => {
    setFilteredExamples(servers[value]);
  }, [value, servers]);

  const tabsContent = [
    {
      label: "VDS 2GB",
      icon: <CloudVPSIcon width={24} height={24} />,
    },
    {
      label: "VDS 4GB",
      icon: <StorageVPSIcon width={24} height={24} />,
    },
    {
      label: "VDS 6GB",
      icon: <CloudVDSIcon width={24} height={24} />,
    },
    {
      label: "VDS 8GB",
      icon: <BareMetalIcon width={24} height={24} />,
    },
  ];

  const [hoveredExampleIndex, setHoveredExampleIndex] = React.useState(null);
  const handleMouseEnter = (index) => {
    setHoveredExampleIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredExampleIndex(null);
  };

  const handleOrderClick = (server) => {
    setSelectedServer(server);
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  const [activeTab, setActiveTab] = React.useState(0);
  const handleActive = (event, newValue) => {
    setActiveTab(newValue);
    setValue(newValue);
    // Устанавливаем отфильтрованные примеры для текущей вкладки
    setFilteredExamples(servers[newValue]);
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <Box
        sx={{
          marginLeft: "24%",
          marginTop: "3%",
          fontFamily: "Nunito",
          width: "70%",
          minHeight: "40vh",
        }}
      >
        <Tabs
          value={value}
          onChange={handleActive}
          aria-label="basic tabs example"
          style={{ marginLeft: "-5%", width: "140%" }}
        >
          {tabsContent.map((tab, index) => (
            <Tab
              key={index}
              label={
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </div>
              }
              {...a11yProps(index)}
              style={{
                borderTopRightRadius: "35%",
                borderTopLeftRadius: "35%",
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                minHeight: "9vh",
                width: "20%",
                backgroundColor: activeTab === index ? "lightblue" : "#7c8db5", // Изменяем цвет фона в зависимости от активной вкладки
                color: "white",
              }}
            />
          ))}
        </Tabs>
        <CustomTabPanel value={value} index={value}>
          <table
            style={{
              borderCollapse: "collapse",
              width: "117%",
              marginLeft: "-7.5%",
              marginTop: "-3%",
              backgroundColor: "white",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
              borderRadius: "2%",
            }}
          >
            <thead>
              <tr
                style={{
                  borderBottom: "1px solid lightgrey",
                  lineHeight: "4",
                }}
              >
                {columns[value].map((column, idx) => (
                  <th key={idx}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredExamples.map((servers, idx) => (
                <tr
                  key={idx}
                  onMouseEnter={() => handleMouseEnter(idx)}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    borderBottom: "1px solid lightgrey",

                    transform:
                      hoveredExampleIndex === idx ? "scale(1.02)" : "scale(1)",
                    transition: "transform 0.2s ease",
                  }}
                >
                  {columnIndex[value].map((index, colIdx) => (
                    <td
                      key={colIdx}
                      style={{
                        lineHeight: "8",
                        paddingLeft: "30px",
                        fontSize: "16px",
                      }}
                    >
                      {/* Если значение - массив, отображаем каждый элемент на новой строке */}
                      {Array.isArray(servers[Object.keys(servers)[index]]) ? (
                        <>
                          {servers[Object.keys(servers)[index]].map(
                            (item, itemIdx) => (
                              <div key={itemIdx}>{item}</div>
                            )
                          )}
                        </>
                      ) : (
                        // Если значение - не массив, просто отображаем его
                        servers[Object.keys(servers)[index]]
                      )}
                    </td>
                  ))}
                  <td style={{ lineHeight: "2", verticalAlign: "middle" }}>
                    <Button
                      variant="outlined"
                      style={{ marginLeft: "10px", verticalAlign: "middle" }}
                      onClick={() => handleOrderClick(servers)}
                    >
                      Заказать
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CustomTabPanel>
      </Box>

      <Drawer anchor="right" open={drawerOpen} onClose={handleCloseDrawer}>
        <div
          style={{
            width: "300px",
            padding: "20px",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Полная характеристика
          </Typography>
          {selectedServer && (
            <List>
              <ListItem>
                <ListItemText primary={`Модель: ${selectedServer.label}`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`RAM: ${selectedServer.ram}`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`CPU: ${selectedServer.cpu}`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`SSD: ${selectedServer.ssd}`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`Цена: ${selectedServer.price}`} />
              </ListItem>
            </List>
          )}

          <Typography variant="h6" gutterBottom style={{ marginTop: "20px" }}>
            Реквизиты оплаты
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="На Мбанк: 996557070199" />
            </ListItem>
            <ListItem>
              <ListItemText primary="На Оптима банк: 4169585344332211" />
            </ListItem>
          </List>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Button
              component="label"
              style={{ backgroundColor: "#9694ff", color: "white" }}
            >
              Прикрепить чек
              <input type="file" style={{ display: "none" }} />
            </Button>

            <Button
              style={{
                backgroundColor: "#7694ff",
                color: "white",
                marginTop: "3%",
              }}
              onClick={handleCloseDrawer}
            >
              Заказать
            </Button>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
