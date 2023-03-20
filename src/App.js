import LoginPage from "./pages/LoginPage/LoginPage";
import CadastroPage from "./pages/CadastroPage/CadastroPage";
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />}/>
                <Route path="/cadastro" element={<CadastroPage />}/>
            </Routes>
        </BrowserRouter>

    );
}

export default App;