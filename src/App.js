import LoginPage from "./pages/LoginPage/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />}/>
            </Routes>
        </BrowserRouter>

    );
}

export default App;