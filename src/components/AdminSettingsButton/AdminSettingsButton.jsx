import Button from "../Button/Button";
import "./AdminSettingsButton.css"

function AdminSettingsButton({children, text, onClick}) {

    return (
        <Button className='admin-settings-button' onClick={onClick} children={children} >{text}</Button>
    )
}

export default AdminSettingsButton;