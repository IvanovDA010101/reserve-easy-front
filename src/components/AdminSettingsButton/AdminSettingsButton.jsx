import Button from "../Button/Button";

function AdminSettingsButton({children, onClick}) {

    return (
        <Button className='button accent' onClick={onClick} children={children}></Button>
    )
}

export default AdminSettingsButton;