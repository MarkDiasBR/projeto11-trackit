import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import { createContext, useContext, useState, useEffect } from "react";
import LoginPage from "./pages/LoginPage/LoginPage";
import CadastroPage from "./pages/CadastroPage/CadastroPage";
import HabitosPage from "./pages/HabitosPage/HabitosPage"
import HojePage from "./pages/HojePage/HojePage";
import HistoricoPage from "./pages/HistoricoPage/HistoricoPage";
import ErroPage from "./pages/ErroPage/ErroPage";

export const UserContext = createContext();

function App() {
    const localStorageUser = JSON.parse(localStorage.getItem("user"))
    const [user, setUser] = useState(localStorageUser)
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        window.onload = function () {
            window.ontransitionend = function () {
                window.scrollTo({ top: 0, behavior: 'smooth' })
            }
        }
    }, [])
    



    return (
        <UserContext.Provider value={{ user, setUser, percentage, setPercentage }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/cadastro" element={<CadastroPage />} />
                    <Route path="/habitos" element={<HabitosPage />} />
                    <Route path="/hoje" element={<HojePage />} />
                    <Route path="/historico" element={<HistoricoPage />} />
                    <Route path="*" element={<ErroPage />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;