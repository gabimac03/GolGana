// 📦 Librerías
import { Routes, Route } from "react-router-dom";

// 🧩 Componentes
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";

// 🌐 Contextos
import { PrediosProvider } from "./context/PrediosContext";

// 📄 Páginas
import BuscarPredios from "./pages/BuscarPredios";
import CrearCancha from "./pages/CrearCancha";
import CrearPredio from "./pages/CrearPredio";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MisCanchas from "./pages/MisCanchas";
import PredioDetalle from "./pages/PredioDetalle";
import Predios from "./pages/Predios";
import Register from "./pages/Register";
import Reservar from "./pages/FormularioReserva";
import Reservas from "./pages/MisReservas";
import ReservasAdmin from "./pages/ReservasAdmin";
import MisReservas from "./pages/MisReservas";
import FormularioReserva from "./pages/FormularioReserva";

function App() {
    return (
        <>
            <Navbar />
            <PrediosProvider>
                <Routes>
                    {/* 🌐 Rutas públicas */}
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/buscar-predios" element={<BuscarPredios />} />
                    <Route path="/crear-predio" element={<CrearPredio />} />
                    <Route path="/mis-canchas" element={<MisCanchas />} />
                    <Route path="/reservar/:id" element={<FormularioReserva />} />

                    {/* 🔒 Rutas protegidas para usuarios autenticados */}
                    <Route element={<ProtectedRoute />}>
                        <Route path="/crear-cancha" element={<CrearCancha />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/predios/:id" element={<PredioDetalle />} />
                        <Route path="/reservas" element={<MisReservas />} />
                    </Route>

                    {/* 🔐 Rutas exclusivas para empleados/admin */}
                    <Route element={<AdminRoute />}>
                        <Route path="/predios" element={<Predios />} />
                        <Route path="/reservas-admin" element={<ReservasAdmin />} />
                    </Route>
                </Routes>
            </PrediosProvider>
        </>
    );
}

export default App;
