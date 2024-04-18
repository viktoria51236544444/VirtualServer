import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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

  const examples = [
    // Примеры для вкладки "Cloud VPS"
    [
      {
        label: "Cloud VPS 1",
        cpu: "4 vCPU Cores",
        ram: "6 GB RAM",
        storage: "100 GB NVMe or 400 GB SSD",
        dataTransfer: "32 TB Traffic",
        price: "$7.75 / month",
      },
      {
        label: "Cloud VPS 2",
        cpu: "6 vCPU Cores",
        ram: "16 GB RAM",
        storage: "200 GB NVMe or 400 GB SSD",
        dataTransfer: "32 TB Traffic",
        price: "$15.80 / month",
      },
      {
        label: "Cloud VPS 3",
        cpu: "8 vCPU Cores",
        ram: "24 GB RAM",
        storage: "300 GB NVMe or 1.2 TB SSD",
        dataTransfer: "32 TB Traffic",
        price: "$22.54 / month",
      },
    ],
    // Примеры для вкладки "Storage VPS"
    [
      {
        label: "Storage VPS 1",
        cpu: "2 vCPU Cores",
        ram: "3 GB RAM",
        storage: "800 GB SSD",
        dataTransfer: "200 Mbit/s Port",
        price: "$7.75 / month",
      },
      {
        label: "Storage VPS 2",
        cpu: "4 vCPU Cores",
        ram: "8 GB RAM",
        storage: "800 GB SSD",
        dataTransfer: "400 Mbit/s Port",
        price: "$15.80 / month",
      },
      {
        label: "Storage VPS 3",
        cpu: "6 vCPU Cores",
        ram: "12 GB RAM",
        storage: "2.4 TB SSD",
        dataTransfer: "600 Mbit/s Port",
        price: "$22.54 / month",
      },
    ],
    // Примеры для вкладки "Cloud VDS"
    [
      {
        label: "Cloud VDS S",
        cpu: "3 Physical Cores",
        ram: "24 GB RAM",
        storage: "180 GB NVMe",
        dataTransfer: "250 Mbit/s Port",
        price: "$57.27 / month",
      },
      {
        label: "Cloud VDS M",
        cpu: "4 Physical Cores",
        ram: "32 GB RAM",
        storage: "240 GB NVMe",
        dataTransfer: "500 Mbit/s Port",
        price: "$71.71 / month",
      },
      {
        label: "Cloud VDS L",
        cpu: "6 Physical Cores",
        ram: "48 GB RAM",
        storage: "360 GB NVMe",
        dataTransfer: "750 Mbit/s Port",
        price: "$109.62 / month",
      },
    ],
    // Примеры для вкладки "Bare Metal"
    [
      {
        label: "AMD Ryzen 12",
        cpu: "AMD Ryzen 9 7900",
        ram: "64 GB REG ECC",
        storage: "1 TB NVMe",
        dataTransfer: "1 Gbit/s Port",
        price: "$149.04 / month",
      },
      {
        label: "AMD EPYC 16 Cores",
        cpu: "AMD EPYC 7282",
        ram: "256 GB REG ECC",
        storage: "3 TB HDD",
        dataTransfer: "1 Gbit/s Port",
        price: "$330.49 / month",
      },
      {
        label: "AMD EPYC 32 Cores",
        cpu: "2 x AMD EPYC 7282",
        ram: "256 GB REG ECC",
        storage: "3 TB HDD",
        dataTransfer: "1 Gbit/s Port",
        price: "$433.49 / month",
      },
    ],
    // Примеры для вкладки "Object Storage"
    [
      {
        label: "250 GB Object Storage in Singapore",
        price: "$3.39 / month",
      },
      {
        label: "500 GB Object Storage in Singapore",
        price: "$6.78 / month",
      },
      {
        label: "1 TB Object Storage in Singapore",
        price: "$13.56 / month",
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
    },
    {
      label: "Storage VPS",
    },
    {
      label: "Cloud VDS",
    },
    {
      label: "Bare Metal",
    },
    {
      label: "Object Storage",
    },
  ];

  return (
    <Box
      sx={{
        width: "114%",
        marginLeft: "30%",
        marginTop: "5%",
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
            label={tab.label}
            {...a11yProps(index)}
            style={{
              borderTopRightRadius: "35%",
              borderTopLeftRadius: "35%",
              border: "2px solid black",
              minHeight: "9vh",
              minWidth: "28vh",
              marginRight: "0.5%",
            }}
          />
        ))}
      </Tabs>
      <CustomTabPanel value={value} index={value}>
        <table
          style={{
            borderCollapse: "collapse",
            width: "60%",
            marginLeft: "-6.8%",
            marginTop: "-1%",
          }}
        >
          <thead>
            <tr style={{ borderBottom: "1px solid lightgrey", height: "20%" }}>
              <th>Label</th>
              <th>CPU</th>
              <th>RAM</th>
              <th>Storage</th>
              <th>Data Transfer</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {filteredExamples.map((example, idx) => (
              <tr
                key={idx}
                style={{
                  borderBottom: "1px solid lightgrey",
                }}
              >
                <td style={{ lineHeight: "4" }}>{example.label}</td>
                <td style={{ lineHeight: "4" }}>{example.cpu}</td>
                <td style={{ lineHeight: "4" }}>{example.ram}</td>
                <td style={{ lineHeight: "4" }}>{example.storage}</td>
                <td style={{ lineHeight: "4" }}>{example.dataTransfer}</td>
                <td style={{ lineHeight: "4" }}>{example.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CustomTabPanel>
    </Box>
  );
}
