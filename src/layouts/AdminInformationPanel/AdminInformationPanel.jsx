import "./AdminInformationPanel.css"
import React, {useState} from "react";
import AdminSettingsPanel from "../AdminSettingsPanel/AdminSettingsPanel";
import AdminReservePanel from "../AdminReservePanel/AdminReservePanel";

function AdminInformationPanel({showSettingsLayout, showReserveLayout}) {

    // const [showSettings, setShowSettings] = useState(true);
    // const [showReserve, setShowReserve] = useState(false);
    // const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            {showSettingsLayout && <AdminSettingsPanel/>}
            {showReserveLayout && <AdminReservePanel/>}
        </>
    )
}

export default AdminInformationPanel;