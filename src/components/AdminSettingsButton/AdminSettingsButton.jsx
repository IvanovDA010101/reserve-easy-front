import Button from "../Button/Button";
import "./AdminSettingsButton.css"

function AdminSettingsButton({as, to, children, text, onClick}) {

    return (
        <Button as={as} className='admin-settings-button' to={to} onClick={onClick} children={children} >{text}</Button>
    )
}

export default AdminSettingsButton;