import Button from "../Button/Button";
import "./AdminSwitchers.css"

function AdminSwitchers({onClickSettings, onClickPhotos, onClickMenu}) {


    return (
        <div className="admin-switchers">
            <Button className='admin-switch' onClick={onClickSettings} children="Общие настройки"></Button>
            <Button className='admin-switch' onClick={onClickPhotos} children="Фотографии"></Button>
            <Button className='admin-switch' onClick={onClickMenu} children="Меню"></Button>
        </div>
    )
}

export default AdminSwitchers;