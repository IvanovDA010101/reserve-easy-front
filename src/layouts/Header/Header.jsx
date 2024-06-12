import Logo from "../../components/Logo/Logo";
import "./Header.css";
import Button from "../../components/Button/Button";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../Context/AuthProvider";

function Header() {
    const navigate = useNavigate();

    const {token, logout} = useContext(AuthContext)

    const handleClickSignIn = () => {
        navigate("/login")
    }

    const handleClickSignUp = () => {
        navigate("/register")
    }

    const handleLogOut = () => {
        logout()
        navigate("/")
    }

    return (
        <div className="header">
            <Logo/>
            <div className="button-heare-wrapper">
                {!token ?
                    <>
                        <Button className="button accept" onClick={handleClickSignIn}>Войти</Button>
                        <Button className="button accept" onClick={handleClickSignUp}>Зарегистрироваться</Button>
                    </>
                    :
                    <Button className="button accept" onClick={handleLogOut}>Выйти</Button>}
            </div>
        </div>
    )
}

export default Header;