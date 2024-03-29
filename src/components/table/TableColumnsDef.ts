import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
   {
      field: "id",
      headerName: "ID",
      maxWidth: 200,
      minWidth: 150,
      headerAlign: "center",
      align: "center",
   },
   {
      field: "tag",
      headerName: "Tag",
      maxWidth: 320,
      minWidth: 300,
      headerAlign: "center",
      align: "center",
   },
   {
      field: "count",
      headerName: "Count",
      maxWidth: 320,
      minWidth: 300,
      headerAlign: "center",
      align: "center",
   },
];
