import "./AdminSettingsPanel.css"
import AdminPanelHeader from "../../components/AdminPanelHeader/AdminPanelHeader";
import React from "react";
import {MyFabricComponent} from "../../components/RestaurantScheme/RestaurantScheme";

function AdminReservePanel() {

    return (
        <div className="admin-information-panel">
            <AdminPanelHeader headerText="Бронирование"/>
            <MyFabricComponent/>
        </div>
    )
}

export default AdminReservePanel;