import Button from "../Button/Button";
import "./AdminSwitchers.css"

function AdminPanelInput({children}) {

    return (
        <input type="text">{children}</input>
    )
}

export default AdminPanelInput;