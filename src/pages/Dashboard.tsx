import { FC, useState } from "react";
import Table from "../components/table/Table";
import { Input } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => {
   const [pageSize, setPageSize] = useState<number>(10);
   const queryClient = useQueryClient();
   return (
      <div className="relative z-50 mt-10 p-4  border-red-50 w-[50%] h-[50%] mx-auto flex flex-col items-end">
         <div className="flex items-center">
            <p className="text-white text-center font-bold font-serif">
               Number of items:{" "}
            </p>
            <Input
               id="outlined-number"
               type="number"
               color="primary"
               value={pageSize}
               onChange={(e) => {
                  setPageSize(parseInt(e.target.value));
                  queryClient.invalidateQueries({ queryKey: ["Tags"] });
               }}
               style={{
                  color: "whitesmoke",
                  borderColor: "white",
                  borderStyle: "solid",
                  borderWidth: "2px",
                  margin: "16px",
                  padding: "4px",
                  width: "40%",
                  alignItems: "end",
                  fontWeight: "bold",
               }}
            />
         </div>
         <Table pageSize={pageSize} />
      </div>
   );
};

export default Dashboard;
