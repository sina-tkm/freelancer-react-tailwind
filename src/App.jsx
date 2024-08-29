import { Route, Routes } from "react-router-dom";
import Ath from "./pages/Ath";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile";

const queryClient = new QueryClient();
function App() {
  return (
    <div className='container xl:max-w-screen-xl'>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <Routes>
          <Route path='/auth' element={<Ath />} />
          <Route path='/complete-profile' element={<CompleteProfile />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
