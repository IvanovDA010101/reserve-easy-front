import { Link } from "react-router-dom";
import AdminSettingsButton from "../../components/AdminSettingsButton/AdminSettingsButton";
import "./AdminNavigationLayout.css"
function AdminNavigationLayout() {
    return(
        <div className="admin-navigation-layout">
            {/*
            Все ссылки, т.е. роутинг ("/admin/settings", "/admin/reserve") и т.д. должны храниться где-нибудь в общей мапе и уже
            здесь ссылаться на эту мапу.
            <AdminSettingsButton as={Link} to={LINK_ADMIN.SETTINGS} text="Настройки заведения"/>
            <AdminSettingsButton as={Link} to={LINK_ADMIN.RESERVE} text="Бронирование"/>
            */}
            <AdminSettingsButton as={Link} to='/admin/settings' text="Настройки заведения"/>
            {/*
            Т.к. кнопка теперь будет являться ссылкой (тег a), то к ней приклеются дефолтные стили от браузера, т.е. нижнее подчеркиевание, цвет и тд
            Если эти стили портят картину, то в таком случае нужно завести глобальные стили и переопредлить там стили для ссылок (т.е. сбросить)
            */}
            <AdminSettingsButton as={Link} to='/admin/reserve' text="Бронирование"/>
            <AdminSettingsButton text="Акции"/>
            <AdminSettingsButton text="События"/>
            <AdminSettingsButton text="Общие настройки"/>
        </div>
    )
}
export default AdminNavigationLayout;