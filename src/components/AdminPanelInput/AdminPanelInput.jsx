import "./AdminPanelInput.css"

function AdminPanelInput({children, height, placeholder}) {

    return (
        <input type="text" placeholder={placeholder} style={{height: height}}>{children}</input>
    )
}

export default AdminPanelInput;