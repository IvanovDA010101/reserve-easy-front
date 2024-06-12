import AdminSettingsButton from "../../components/AdminSettingsButton/AdminSettingsButton";
import "./AdminNavigationLayout.css"
function AdminNavigationLayout({onClickSettings, onClickReserve}){


    return(
        <div className="admin-navigation-layout">
            <AdminSettingsButton onClick={onClickSettings} text="Настройки заведения"/>
            <AdminSettingsButton onClick={onClickReserve} text="Бронирование"/>
            <AdminSettingsButton text="Акции"/>
            <AdminSettingsButton text="События"/>
            <AdminSettingsButton text="Общие настройки"/>
        </div>
    )

}
export default AdminNavigationLayout;