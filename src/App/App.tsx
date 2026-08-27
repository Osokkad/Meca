import { BrowserRouter } from "react-router-dom";
import NavBar from "../Components/Navbar/Navbar";
import AppRoutes from "../Routes/app.routes";
import WhatsAppButton from "../Components/WhatsAppButton/WhatsAppButton";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRoutes />
      <WhatsAppButton />
    </BrowserRouter>
  );
}
