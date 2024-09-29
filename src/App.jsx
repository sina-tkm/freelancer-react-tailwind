import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./style/ui/NotFound";
import Auth from "./pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile";
import Home from "./pages/Home";
import AppLayOut from "./style/ui/AppLayOut";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import OwnerDashboard from "./pages/OwnerDashboard";
import DarkModeProvider from "./contexts/DarkModeContext";
import OwnerLayOut from "./features/OwnerLayOut";

const queryClient = new QueryClient();
function App() {
  return (
    <div>
      <DarkModeProvider>
        <QueryClientProvider client={queryClient}>
          <Toaster />
          <Routes>
            <Route path='/auth' element={<Auth />} />
            <Route path='/complete-profile' element={<CompleteProfile />} />
            <Route path='/owner' element={<OwnerLayOut />}>
              <Route index element={<Navigate to='dashboard' replace />} />
              <Route path='dashboard' element={<OwnerDashboard />} />
              <Route path='projects' element={<Projects />} />
              <Route path='projects/:id' element={<Project />} />
            </Route>

            <Route path='/' element={<Home />} />

            <Route path='*' element={<NotFound />} />
          </Routes>
        </QueryClientProvider>
      </DarkModeProvider>
    </div>
  );
}

export default App;
