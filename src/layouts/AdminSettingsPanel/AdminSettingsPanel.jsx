import "./AdminSettingsPanel.css"
import AdminPanelHeader from "../../components/AdminPanelHeader/AdminPanelHeader";
import AdminSwitchers from "../../components/AdminSwitchers/AdminSwitchers";
import AdminPanelInput from "../../components/AdminPanelInput/AdminPanelInput";
import Button from "../../components/Button/Button";
import React, {useState} from "react";

function AdminSettingsPanel() {
    const [showSettings, setShowSettings] = useState(true);
    const [showPhotos, setShowPhotos] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const onSubmit = () => {
    }

    const onClickSettings = () => {
        setShowMenu(false)
        setShowPhotos(false)
        setShowSettings(true)
    }
    const onClickMenu = () => {
        setShowMenu(true)
        setShowPhotos(false)
        setShowSettings(false)
    }
    const onClickPhotos = () => {
        setShowMenu(false)
        setShowPhotos(true)
        setShowSettings(false)
    }
    return (
        <div className="admin-information-panel">
            <AdminPanelHeader headerText="Настройки заведения"/>
            <AdminSwitchers onClickSettings={onClickSettings} onClickMenu={onClickMenu} onClickPhotos={onClickPhotos}/>
            {showSettings && <form onSubmit={onSubmit}>
                <AdminPanelInput placeholder="Название" height="40px"/>
                <AdminPanelInput placeholder="Транслитное название" height="40px"/>
                <AdminPanelInput placeholder="Описание" height="159px"/>
                <AdminPanelInput placeholder="Краткое описание" height="159px"/>
                <Button className="button save-changes" type="submit">Сохранить изменения</Button>
            </form>}
            {showPhotos &&
                <input type="file"/>
            }
            {showMenu &&
                <div>Меню</div>}
        </div>
    )
}

export default AdminSettingsPanel;