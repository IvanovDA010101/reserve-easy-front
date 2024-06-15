import "./AdminInformationPanel.css"
import React from "react";
import AdminSettingsPanel from "../AdminSettingsPanel/AdminSettingsPanel";
import AdminReservePanel from "../AdminReservePanel/AdminReservePanel";

const ADMIN_TYPES = {
    SETTINGS: 'settings',
    RESERVE: 'reserve',
    PROMOTION: 'promotions',
    EVENTS: 'events',
    GENERAL_SETTINGS: 'generalSettings'
}


//todo не стал удлять, вдруг пригодится
/**
 * Но если решите делать на стейтах, то одного стейта будет достаточно, просто нужен будет не булевый стейт,
 * а хранить там тип страницы, которую нужно рендерить.
 *
 * Например, так:
 * adminType - стейт, который может принимать след строки: settings, reserve, promotions, events, generalSettings
 * НО мапа ADMIN_TYPES должна быть общей и находиться в другом месте, т.к. задаваться стейт adminType тоже должен через мапу ADMIN_TYPES
 */
function AdminInformationPanel({ adminType }) {
    return (
        <>
            {adminType === ADMIN_TYPES.SETTINGS && <AdminSettingsPanel/>}
            {adminType === ADMIN_TYPES.RESERVE && <AdminReservePanel/>}
        </>
    )
}

export default AdminInformationPanel;