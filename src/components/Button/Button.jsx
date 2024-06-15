import './Button.css';
import { memo } from 'react';

function Button({ as: Component = 'button', to, children, onClick, className }) {
    console.log('Button');
    return (
        <Component to={to} className={className} onClick={onClick}>{children}</Component>
    );
}

export default memo(Button);