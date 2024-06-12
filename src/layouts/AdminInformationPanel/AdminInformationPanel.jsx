import "./AdminInformationPanel.css"
import AdminPanelHeader from "../../components/AdminPanelHeader/AdminPanelHeader";
import AdminSwitchers from "../../components/AdminSwitchers/AdminSwitchers";

function AdminInformationPanel() {
    return (
        <div className="admin-information-panel">
            <AdminPanelHeader/>
            <AdminSwitchers/>
        </div>
    )
}

export default AdminInformationPanel;