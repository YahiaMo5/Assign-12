import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { MovieDetails } from "./pages/MovieDetails";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <div className="app-layout">
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/movies/:id" element={<MovieDetails />} />
                        <Route
                            path="*"
                            element={
                                <div style={{ textAlign: "center", padding: "40px" }}>
                                    <Link to="/">
                                        back to movies
                                    </Link>
                                </div>
                            }
                        />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
