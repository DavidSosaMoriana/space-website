import { Link } from 'react-router-dom';
import Logo from '../assets/share/logo.svg';

export default function Header() {
    return (
        <>
            <header className="header">
                <div>
                    <Link to="/">
                        <img src={Logo} alt="Space Trip" />
                    </Link>
                </div>
            </header>
        </>
    );
}
