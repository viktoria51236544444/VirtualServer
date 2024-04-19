import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import CloudVPSIcon from "./orderServerIcons/CloudVPSIcon";
import StorageVPSIcon from "./orderServerIcons/StorageVPSIcon";
import CloudVDSIcon from "./orderServerIcons/orderServerIcons/BareMetalIcon";
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // Устанавливаем отфильтрованные примеры для текущей вкладки
    setFilteredExamples(examples[newValue]);
  };

  // Массивы столбцов и индексов столбцов для каждой вкладки
  const columns = [
    ["Model", "CPU", "RAM", "Storage", "Data Transfer", "Price"],
    ["Model", "CPU", "RAM", "Storage", "Port", "Data Transfer", "Price"],
    ["Model", "CPU", "RAM", "Storage", "Port", "Data Transfer", "Price"],
    ["Model", "CPU", "RAM", "Storage", "Port", "Data Transfer", "Price"],
    ["Model", "Price"],
  ];

  const columnIndex = [
    [0, 1, 2, 3, 4, 5],
    [0, 1, 2, 3, 4, 5, 6],
    [0, 1, 2, 3, 4, 5],
    [0, 1, 2, 3, 4, 5, 6],
    [0, 5],
  ];

  const examples = [
    [
      {
        label: "Cloud VPS 1",
        cpu: "4 vCPU Cores",
        ram: "6 GB RAM",
        storage: ["100 GB NVMe", "400 GB SSD"],
        dataTransfer: "32 TB Traffic or Unlimited Incoming ",
        price: " $10.75 / month",
      },
    ],
    [
      {
        label: "Storage VPS 1",
        cpu: "2 vCPU Cores",
        ram: "3 GB RAM",
        storage: ["800 GB SSD"],
        port: "200 Mbit/s Port",
        dataTransfer: "Data Transfer Value",
        price: "$7.75 / month",
      },
    ],
    [
      {
        label: "Cloud VDS S",
        cpu: "3 Physical Cores or AMD EPYC 7282 2.8 GHz",
        ram: "24 GB RAM",
        storage: ["180 GB NVMe", "More storage available"],
        port: "200 Mbit/s Port",
        dataTransfer: "250 Mbit/s Port or Unlimited Available",
        price: "$57.27 / month",
      },
    ],
    [
      {
        label: "AMD Ryzen 12",
        cpu: "AMD Ryzen 9 7900 or 12 x 3.70 GHz",
        ram: "64 GB REG ECC or Up to 128 GB RAM",
        storage: ["1 TB NVMe", "More storage available"],
        port: "1 Gbit/s Port",
        dataTransfer: "1 Gbit/s Port or Up to 324 TB",
        price: "$149.04 / month",
      },
    ],
    [
      {
        label: "250 GB Object Storage in Singapore",
        storage: ["250 GB"],
        price: "$3.39 / month",
      },
    ],
  ];

  // Изначально устанавливаем примеры для первой вкладки
  React.useEffect(() => {
    setFilteredExamples(examples[value]);
  }, [value, examples]);

  const tabsContent = [
    {
      label: "Cloud VPS",
      icon: <CloudVPSIcon width={24} height={24} />,
    },
    {
      label: "Storage VPS",
      icon: <StorageVPSIcon width={24} height={24} />,
    },
    {
      label: "Cloud VDS",
      icon: <CloudVDSIcon width={24} height={24} />,
    },
    {
      label: "Bare Metal",
      icon: <BareMetalIcon width={24} height={24} />,
    },
    {
      label: "Object Storage",
      icon: <ObjectStorageIcon width={24} height={24} />,
    },
  ];

  return (
    <Box
      sx={{
        width: "70%",
        marginLeft: "30%",
        marginTop: "5%",
        fontFamily: "Nunito",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        style={{ marginLeft: "-6%" }}
      >
        {tabsContent.map((tab, index) => (
          <Tab
            key={index}
            label={
              <div style={{ display: "flex", alignItems: "center" }}>
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
              minWidth: "28vh",
              marginRight: "0.5%",
              backgroundColor: "#57caeb",
              color: "white",
            }}
          />
        ))}
      </Tabs>
      <CustomTabPanel value={value} index={value}>
        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            marginLeft: "-8.5%",
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
            {filteredExamples.map((example, idx) => (
              <tr
                key={idx}
                style={{
                  borderBottom: "1px solid lightgrey",
                  padding: "5px",
                }}
              >
                {columnIndex[value].map((index, colIdx) => (
                  <td
                    key={colIdx}
                    style={{ lineHeight: "2", paddingLeft: "20px" }}
                  >
                    {/* Если значение - массив, отображаем каждый элемент на новой строке */}
                    {Array.isArray(example[Object.keys(example)[index]]) ? (
                      <>
                        {example[Object.keys(example)[index]].map(
                          (item, itemIdx) => (
                            <div key={itemIdx}>{item}</div>
                          )
                        )}
                      </>
                    ) : (
                      // Если значение - не массив, просто отображаем его
                      example[Object.keys(example)[index]]
                    )}
                  </td>
                ))}
                <td style={{ lineHeight: "2", verticalAlign: "middle" }}>
                  <Button
                    variant="outlined"
                    style={{ marginLeft: "10px", verticalAlign: "middle" }}
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
  );
}
