import AdminSettingsButton from "../../components/AdminSettingsButton/AdminSettingsButton";
import "./AdminNavigationLayout.css"
function AdminNavigationLayout(){

    return(
        <div className="admin-navigation-layout">
            <AdminSettingsButton/>
            <AdminSettingsButton/>
            <AdminSettingsButton/>
            <AdminSettingsButton/>
            <AdminSettingsButton/>
        </div>
    )

}
export default AdminNavigationLayout;