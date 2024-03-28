import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BackgroundContainer from "./components/background/Background";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
   const queryClient = new QueryClient({
      defaultOptions: {
         queries: {
            staleTime: 0,
         },
      },
   });
   return (
      <QueryClientProvider client={queryClient}>
         <BrowserRouter>
            <BackgroundContainer>
               <Routes>
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="/" element={<Navigate to="dashboard" />} />
               </Routes>
            </BackgroundContainer>
         </BrowserRouter>
      </QueryClientProvider>
   );
}

export default App;
