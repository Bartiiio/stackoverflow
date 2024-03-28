import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { StyledEngineProvider } from "@mui/material/styles";
import { useGetTags } from "../../hooks/useGetTags";
import { useState, useEffect } from "react";
import { Alert, CircularProgress } from "@mui/material";

interface Tag {
   id: number;
   name: string;
   count: number;
}

interface Props {
   pageSize: number;
}

const columns: GridColDef[] = [
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

export default function DataTable({ pageSize }: Props) {
   const { Tags = {}, isLoading } = useGetTags(pageSize);
   const [tagsDataRows, setTagsDataRow] = useState([]);

   useEffect(() => {
      if (Tags.items) {
         const mappedData = Tags.items.map((item: Tag, index: number) => ({
            id: index,
            tag: item.name,
            count: item.count,
         }));
         setTagsDataRow(mappedData);
      }
   }, [Tags]);

   return (
      <StyledEngineProvider>
         <Box
            sx={{
               width: "100%",
               backgroundColor: "gray",
               height: 650,
               position: "relative",
               borderRadius: "6px",
            }}
         >
            {isLoading ? (
               <div className="absolute inset-0 flex items-center justify-center">
                  <CircularProgress size="120px" />
               </div>
            ) : (
               <>
                  {tagsDataRows.length > 0 ? (
                     <DataGrid
                        rows={tagsDataRows}
                        columns={columns}
                        initialState={{
                           pagination: {
                              paginationModel: { page: 0, pageSize: pageSize },
                           },
                        }}
                        pageSizeOptions={[5, 10, 15, 20, 25, 50]}
                        checkboxSelection
                     />
                  ) : (
                     <Alert className="m-12 p-4 " severity="error">
                        Data downloading failed...
                     </Alert>
                  )}
               </>
            )}
         </Box>
      </StyledEngineProvider>
   );
}
