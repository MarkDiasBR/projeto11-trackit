import LoginPage from "./pages/LoginPage/LoginPage";
import CadastroPage from "./pages/CadastroPage/CadastroPage";
import HabitosPage from "./pages/HabitosPage/HabitosPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />}/>
                <Route path="/cadastro" element={<CadastroPage />}/>
                <Route path="/habitos" element={<HabitosPage />} />
            </Routes>
        </BrowserRouter>

    );
}

export default App;