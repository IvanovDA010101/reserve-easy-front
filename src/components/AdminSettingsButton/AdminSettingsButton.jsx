import Button from "../Button/Button";
import "./AdminSettingsButton.css"

function AdminSettingsButton({children, onClick}) {

    return (
        <Button className='admin-settings-button' onClick={onClick} children={children}></Button>
    )
}

export default AdminSettingsButton;