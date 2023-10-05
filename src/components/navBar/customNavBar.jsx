import { NavLink, useNavigate } from "react-router-dom"

export default ({ data, className, children }) => {
    const navigate = useNavigate()

    return (
        <nav className={ className && className }>
            <ul>
                { data
                    .map(member => (
                        <li
                            key={ member.id }
                            onClick={ () => {
                                navigate(`/crew/${member.id}`)
                            } }
                        >
                            <NavLink
                                to={ `/crew/${member.id}` }
                                className={ `${({ isActive }) => isActive ? 'active' : ''}` }
                            >
                                { children && children }
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav >
    )
}