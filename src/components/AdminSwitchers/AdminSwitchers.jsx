import Button from "../Button/Button";
import "./AdminSwitchers.css"

function AdminSwitchers({children, onClick}) {

    return (
        <div className="admin-switchers">
            <Button className='admin-switch' onClick={onClick} children="Общие настройки"></Button>
            <Button className='admin-switch' onClick={onClick} children="Фотографии"></Button>
            <Button className='admin-switch' onClick={onClick} children="Меню"></Button>
        </div>
    )
}

export default AdminSwitchers;