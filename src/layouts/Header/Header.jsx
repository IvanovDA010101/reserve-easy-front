import Logo from "../../components/Logo/Logo";
import "./Header.css";
import Button from "../../components/Button/Button";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../Context/AuthProvider";

const logos = ['/logo.jpg']

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
            <Logo image={logos[0]}/>
            {!token ?
                <>
                    <Button onClick={handleClickSignIn}>Войти</Button>
                    <Button onClick={handleClickSignUp}>Зарегистрироваться</Button>

                </>
                :
                <Button onClick={handleLogOut} >Выйти</Button>}
        </div>
    )
}

export default Header;