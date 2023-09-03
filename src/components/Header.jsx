import { Link } from 'react-router-dom'
import './styles/Header.css'

//Export the Header
export default function Header() {
    return (
        <nav className="nav-bar">
            <div>
                <Link to="/">About</Link>
            </div>
            <div>
                <Link to="/projects">Projects</Link>
            </div>
            <div>
                <Link to="/work">Work</Link>
            </div>
            <div>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
}