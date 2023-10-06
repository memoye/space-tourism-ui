import { NavLink, useNavigate } from "react-router-dom"

export default ({ data, className, numLabel, parent }) => {
    const navigate = useNavigate()

    return (
        <nav className={ className && className }>
            <ul>
                { data
                    .map(member => (
                        <li
                            key={ member.id }
                            onClick={ () => {
                                navigate(`/${parent}/${member.id}`)
                            } }
                        >
                            <NavLink
                                to={ `/${parent}/${member.id}` }
                                className={ `${({ isActive }) => isActive ? 'active' : ''}` }
                            >
                                { numLabel && member.id
                                }
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav >
    )
}