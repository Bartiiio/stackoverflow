import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { Alert, CircularProgress } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import { useGetTags } from "../hooks/useGetTags";
import { columns } from "../components/table/TableColumnsDef";

interface Tag {
   id: number;
   name: string;
   count: number;
}

interface Props {
   pageSize: number;
}

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
