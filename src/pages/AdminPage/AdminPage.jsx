import AdminNavigationLayout from "../../layouts/adminNavigationLayout/AdminNavigationLayout";
import AdminInformationPanel from "../../layouts/AdminInformationPanel/AdminInformationPanel";
import "./AdminPage.css"
import {useState} from "react";
function AdminPage(){
    const [showSettingsLayout, setShowSettingsLayout] = useState(true);
    const [showReserveLayout, setShowReserveLayout] = useState(false);

    const onClickSettings = () => {
        setShowReserveLayout(false)
        setShowSettingsLayout(true)
    }
    const onClickReserve = () => {
        setShowReserveLayout(true)
        setShowSettingsLayout(false)
    }
    return(
        <div className="admin page">
            <AdminNavigationLayout onClickSettings={onClickSettings} onClickReserve={onClickReserve}/>
            <AdminInformationPanel showSettingsLayout={showSettingsLayout} showReserveLayout={showReserveLayout}/>
        </div>
    )
}

export default AdminPage;