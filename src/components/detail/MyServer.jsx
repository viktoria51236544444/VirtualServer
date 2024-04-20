import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableVirtuoso } from "react-virtuoso";
import Box from "@mui/material/Box";
import Slider from "./Slider";

const localServersData = [
  {
    id: 1,
    name: "Server A",
    location: "New York",
    type: "Web Server",
    status: "Active",
  },
  {
    id: 2,
    name: "Server B",
    location: "London",
    type: "Database Server",
    status: "Inactive",
  },
  {
    id: 2,
    name: "Server B",
    location: "London",
    type: "Database Server",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Server C",
    location: "Tokyo",
    type: "Application Server",
    status: "Active",
  },
  {
    id: 4,
    name: "Server D",
    location: "Sydney",
    type: "Backup Server",
    status: "Active",
  },
  {
    id: 5,
    name: "Server E",
    location: "Berlin",
    type: "File Server",
    status: "Inactive",
  },
  {
    id: 6,
    name: "Server F",
    location: "Paris",
    type: "Web Server",
    status: "Active",
  },
  {
    id: 7,
    name: "Server G",
    location: "Moscow",
    type: "Database Server",
    status: "Active",
  },
  {
    id: 8,
    name: "Server H",
    location: "Beijing",
    type: "Application Server",
    status: "Inactive",
  },
  {
    id: 9,
    name: "Server I",
    location: "Rio de Janeiro",
    type: "Backup Server",
    status: "Active",
  },
  {
    id: 10,
    name: "Server J",
    location: "Cape Town",
    type: "File Server",
    status: "Inactive",
  },
  {
    id: 11,
    name: "Server K",
    location: "Toronto",
    type: "Web Server",
    status: "Active",
  },
  {
    id: 12,
    name: "Server L",
    location: "Mumbai",
    type: "Database Server",
    status: "Active",
  },
  {
    id: 13,
    name: "Server M",
    location: "Shanghai",
    type: "Application Server",
    status: "Active",
  },
];

const columns = [
  {
    label: "Server Name",
    dataKey: "name",
  },
  {
    label: "Location",
    dataKey: "location",
  },
  {
    label: "Type",
    dataKey: "type",
  },
  {
    label: "Status",
    dataKey: "status",
  },
];

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table
      {...props}
      sx={{ borderCollapse: "separate", tableLayout: "fixed" }}
    />
  ),
  TableHead,
  TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
  TableBody: React.forwardRef((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align="left"
          sx={{
            backgroundColor: "background.paper",
          }}
          className="tableCell"
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index, row) {
  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell key={column.dataKey} align="left" className="tableCell2">
          {row[column.dataKey]}
        </TableCell>
      ))}
    </React.Fragment>
  );
}

export default function MyServer() {
  return (
    <Paper
      style={{
        height: 500,
        width: "60%",
        marginLeft: "20%",
        marginTop: "3%",
        borderRadius: 15,
        overflow: "hidden",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Slider />
      <TableVirtuoso
        data={localServersData}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}
