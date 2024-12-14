import { NavLink } from 'react-router-dom';
import './Navigation.scss';

export default function Navigation() {
    return (
        <ul className="navigation" role="navigation">
            <li className="item">
                <NavLink to="/."
                    className={({ isActive }) => `${isActive && "active"} link`}>
                    Accueil
                </NavLink>
            </li>
            <li className="item">
                <NavLink to="/mes-coups-de-coeur"
                    className={({ isActive }) => `${isActive && "active"} link`}>
                    Mes coups de cœur
                </NavLink>
            </li>
            <li className="item">
                <NavLink to="/films-a-decouvrir"
                    className={({ isActive }) => `${isActive && "active"} link`}>
                    Films à découvrir
                </NavLink>
            </li>
            <li className="item">
                <NavLink to="/films-deja-vu"
                    className={({ isActive }) => `${isActive && "active"} link`}>
                    Films déjà vus
                </NavLink>
            </li>
        </ul >
    )
}
