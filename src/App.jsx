import { Route, Routes } from "react-router-dom";
import NotFound from "./style/ui/NotFound";
import Ath from "./pages/Ath";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile";
import Home from "./pages/Home";

const queryClient = new QueryClient();
function App() {
  return (
    <div className='container xl:max-w-screen-xl'>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <Routes>
          <Route path='/auth' element={<Ath />} />
          <Route path='/complete-profile' element={<CompleteProfile />} />
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
