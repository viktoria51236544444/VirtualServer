import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableVirtuoso } from "react-virtuoso";

const staticData = [
  {
    id: 1,
    dessert: "Apple Pie",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
  },
  {
    id: 2,
    dessert: "Chocolate Cake",
    calories: 262,
    fat: 16.0,
    carbs: 24,
    protein: 6.0,
  },
  {
    id: 3,
    dessert: "Chocolate Cake",
    calories: 262,
    fat: 16.0,
    carbs: 24,
    protein: 6.0,
  },
  {
    id: 4,
    dessert: "Chocolate Cake",
    calories: 262,
    fat: 16.0,
    carbs: 24,
    protein: 6.0,
  },
  {
    id: 5,
    dessert: "Chocolate Cake",
    calories: 262,
    fat: 16.0,
    carbs: 24,
    protein: 6.0,
  },
  {
    id: 6,
    dessert: "Chocolate Cake",
    calories: 262,
    fat: 16.0,
    carbs: 24,
    protein: 6.0,
  },
  {
    id: 7,
    dessert: "Chocolate Cake",
    calories: 262,
    fat: 16.0,
    carbs: 24,
    protein: 6.0,
  },
  {
    id: 8,
    dessert: "Chocolate Cake",
    calories: 262,
    fat: 16.0,
    carbs: 24,
    protein: 6.0,
  },
];

const columns = [
  {
    label: "Dessert",
    dataKey: "dessert",
  },
  {
    label: "Calories (g)",
    dataKey: "calories",
    numeric: true,
  },
  {
    label: "Fat (g)",
    dataKey: "fat",
    numeric: true,
  },
  {
    label: "Carbs (g)",
    dataKey: "carbs",
    numeric: true,
  },
  {
    label: "Protein (g)",
    dataKey: "protein",
    numeric: true,
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
          align={column.numeric || false ? "right" : "left"}
          style={{ width: column.width }}
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
        <TableCell
          key={column.dataKey}
          align={column.numeric || false ? "right" : "left"}
          className="tableCell2"
        >
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
        height: 400,
        width: "70%",
        marginLeft: "20%",
        marginTop: "5%",
        borderRadius: 30,
        overflow: "hidden",
      }}
    >
      <TableVirtuoso
        data={staticData}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}
