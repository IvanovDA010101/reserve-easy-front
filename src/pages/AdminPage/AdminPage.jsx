import AdminNavigationLayout from "../../layouts/adminNavigationLayout/AdminNavigationLayout";
import AdminInformationPanel from "../../layouts/AdminInformationPanel/AdminInformationPanel";
import "./AdminPage.css"
function AdminPage(){
    return(
        <div className="admin page">
            <AdminNavigationLayout/>
            <AdminInformationPanel/>
        </div>
    )
}

export default AdminPage;