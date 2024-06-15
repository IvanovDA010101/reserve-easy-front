import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";

import AdminNavigationLayout from "../../layouts/adminNavigationLayout/AdminNavigationLayout";
import AdminSettingsPanel from "../../layouts/AdminSettingsPanel/AdminSettingsPanel";
import AdminReservePanel from "../../layouts/AdminReservePanel/AdminReservePanel";

import "./AdminPage.css"

function AdminPage(){

    return(
        <div className="admin page">
            <AdminNavigationLayout />
            <Routes>
                {/*
                  Все пути также как и ссылки (Link) должны ссылаться на одну общую мапу
                  <Route path={ROUTES_ADMIN.RESERVE} element={<AdminReservePanel/>}/>
                */}
                <Route path="settings" element={<AdminSettingsPanel/>}/>
                <Route path="reserve" element={<AdminReservePanel/>}/>
                <Route path="*" element={<Navigate to="/admin/settings" />} />
            </Routes>
        </div>
    )
}

export default AdminPage;