// import React, { useState } from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import { TableVirtuoso } from "react-virtuoso";
// import IconButton from "@mui/material/IconButton";
// import PauseIcon from "@mui/icons-material/Pause";
// import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
// import PowerOffIcon from "@mui/icons-material/PowerOff";
// import styles from "./detail.module.css";

// const localServersData = [
//   {
//     id: 12345,
//     name: "Admin",
//     location: "New York",
//     type: "Web Server",
//     status: "Активен до 18.06.24",
//     tariff: "vds.kg 450",
//     ip: "77.695.88.40.45698",
//     password: "Grup8569",
//   },
//   {
//     id: 69444,
//     name: "Admin",
//     location: "New York",
//     type: "Web Server",
//     status: "Активен до 18.06.24",
//     tariff: "vds.kg 450",
//     ip: "77.695.88.40.45698",
//     password: "Grup8569",
//   },
//   {
//     id: 78955,
//     name: "Admin",
//     location: "New York",
//     type: "Web Server",
//     status: "Активен до 18.06.24",
//     tariff: "vds.kg 450",
//     ip: "77.695.88.40.45698",
//     password: "Grup8569",
//   },
//   {
//     id: 18345,
//     name: "Admin",
//     location: "New York",
//     type: "Web Server",
//     status: "Активен до 18.06.24",
//     tariff: "vds.kg 450",
//     ip: "77.695.88.40.45698",
//     password: "Grup8569",
//   },
//   {
//     id: 12445,
//     name: "Admin",
//     location: "New York",
//     type: "Web Server",
//     status: "Активен до 18.06.24",
//     tariff: "vds.kg 450",
//     ip: "77.695.88.40.45698",
//     password: "Grup8569",
//   },
//   {
//     id: 14565,
//     name: "Admin",
//     location: "New York",
//     type: "Web Server",
//     status: "Активен до 18.06.24",
//     tariff: "vds.kg 450",
//     ip: "77.695.88.40.45698",
//     password: "Grup8569",
//   },
//   {
//     id: 92345,
//     name: "Admin",
//     location: "New York",
//     type: "Web Server",
//     status: "Активен до 18.06.24",
//     tariff: "vds.kg 450",
//     ip: "77.695.88.40.45698",
//     password: "Grup8569",
//   },
//   {
//     id: 12785,
//     name: "Admin",
//     location: "New York",
//     type: "Web Server",
//     status: "Активен до 18.06.24",
//     tariff: "vds.kg 450",
//     ip: "77.695.88.40.45698",
//     password: "Grup8569",
//   },
//   {
//     id: 16645,
//     name: "Admin",
//     location: "New York",
//     type: "Web Server",
//     status: "Активен до 18.06.24",
//     tariff: "vds.kg 450",
//     ip: "77.695.88.40.45698",
//     password: "Grup8569",
//   },
// ];

// const columns = [
//   {
//     label: "ID",
//     dataKey: "id",
//   },
//   {
//     label: "Тарифы",
//     dataKey: "tariff",
//   },
//   {
//     label: "IP",
//     dataKey: "ip",
//   },
//   {
//     label: "Логин",
//     dataKey: "name",
//   },
//   {
//     label: "Пароль",
//     dataKey: "password",
//   },
//   {
//     label: "Статус",
//     dataKey: "status",
//   },
//   {
//     label: "Продлить",
//     dataKey: "update",
//   },
//   {
//     label: "Перезагрузить",
//     dataKey: "pauseIcon",
//   },
//   {
//     label: "Выключить",
//     dataKey: "powerOffIcon",
//   },
// ];

// const VirtuosoTableComponents = {
//   Scroller: React.forwardRef((props, ref) => (
//     <TableContainer component={Paper} {...props} ref={ref} />
//   )),
//   Table: (props) => (
//     <Table
//       {...props}
//       sx={{ borderCollapse: "separate", tableLayout: "fixed" }}
//     />
//   ),
//   TableHead,
//   TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
//   TableBody: React.forwardRef((props, ref) => (
//     <TableBody {...props} ref={ref} />
//   )),
// };


// const calculateMinWidth = (dataKey) => {
//   switch (dataKey) {
//     case "id":
//       return 50;
//     case "tariff":
//       return 0; // Скрываем колонку с тарифом
//     case "ip":
//       return 150; // Устанавливаем ширину для колонки с IP
//     case "name":
//       return 80;
//     case "password":
//       return 80;
//     case "status":
//       return 120;
//     case "update":
//       return 80;
//     case "pauseIcon":
//       return 40;
//     case "powerOffIcon":
//       return 40;
//     default:
//       return 100;
//   }
// };




// const fixedHeaderContent = () => {
//   return (
//     <TableRow>
//       {columns.map((column) => (
//         <TableCell
//           key={column.dataKey}
//           variant="head"
//           align="left"
//           sx={{
//             backgroundColor: "background.paper",
//             minWidth: calculateMinWidth(column.dataKey),
//           }}
//           className={styles.tableCell} 
//         >
//           {column.label}
//         </TableCell>
//       ))}
//     </TableRow>
//   );
// };

// export default function MyServer() {
//   const [paused, setPaused] = useState({});
//   const [poweredOff, setPoweredOff] = useState({});

//   const handlePause = (id) => {
//     setPaused((prevPaused) => ({
//       ...prevPaused,
//       [id]: !prevPaused[id],
//     }));
//   };

//   const handlePowerOff = (id) => {
//     setPoweredOff((prevPoweredOff) => ({
//       ...prevPoweredOff,
//       [id]: !prevPoweredOff[id],
//     }));
//   };
//   const rowContent = (_index, row) => {
//     return (
//       <React.Fragment>
//         {columns.map((column) => (
//           <TableCell
//             key={column.dataKey}
//             align="left"
//             className={
//               column.dataKey === "tariff"
//                 ? `${styles.tableCell} ${styles.tariffCell}`
//                 : column.dataKey === "ip"
//                 ? `${styles.tableCell} ${styles.ipCell}`
//                 : styles.tableCell
//             }
//           >
//             {column.dataKey === "pauseIcon" ? (
//               <IconButton onClick={() => handlePause(row.id)}>
//                 {paused[row.id] ? <DoubleArrowIcon /> : <PauseIcon />}
//               </IconButton>
//             ) : column.dataKey === "powerOffIcon" ? (
//               <IconButton
//                 onClick={() => handlePowerOff(row.id)}
//                 style={{ color: poweredOff[row.id] ? "grey" : "red" }}
//               >
//                 <PowerOffIcon />
//               </IconButton>
//             ) : column.dataKey === "update" ? (
//               "IP"
//             ) : (
//               row[column.dataKey]
//             )}
//           </TableCell>
//         ))}
//       </React.Fragment>
//     );
//   };

//   return (
//     <Paper
//       style={{
//         height: 550,
//         width: "90%",
//         marginLeft: "7%",
//         marginTop: "1%",
//         borderRadius: 15,
//         overflow: "hidden",
//       }}
//     >
//       <TableVirtuoso
//         data={localServersData}
//         components={VirtuosoTableComponents}
//         fixedHeaderContent={fixedHeaderContent}
//         itemContent={rowContent}
//       />
//     </Paper>
//   );
// }
