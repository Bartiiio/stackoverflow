import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BackgroundContainer from "./components/background/Background";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";

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
                  <Route path="*" element={<PageNotFound />} />
               </Routes>
            </BackgroundContainer>
         </BrowserRouter>
      </QueryClientProvider>
   );
}

export default App;
