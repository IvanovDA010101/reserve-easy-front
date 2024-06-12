import './App.css';
import Header from "./layouts/Header/Header";
import {AuthProvider} from "./Context/AuthProvider";
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import RestaurantPage from "./pages/RestaurantPage/RestaurantPage";
import Login from "./pages/SignInPage/SignInPage";
import Register from "./pages/SignUpPage/SignUpPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import Footer from "./layouts/Footer/Footer";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Header/>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/restaurant/:id" element={<RestaurantPage/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/admin" element={<AdminPage/>}/>
                </Routes>
                <Footer/>
            </AuthProvider>
        </div>
    );
}

export default App;
