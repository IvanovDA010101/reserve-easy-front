import "./AdminPanelHeader.css"

function AdminPanelHeader({children}) {

    const header = "Настройки заведения"

    return (
        <div className="admin-panel-header">{header}</div>
    )
}

export default AdminPanelHeader;