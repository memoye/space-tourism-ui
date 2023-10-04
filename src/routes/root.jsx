import './root.css'
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom"
import { logo } from "../assets"
import NavBar from '../components/navBar/navBar'


const Root = () => {
    const pages = [
        {
            name: 'home',
            path: '/',
        },
        {
            name: 'destination',
            path: '/dest',
        },
        {
            name: 'crew',
            path: '/crew',
        },
        {
            name: 'technology',
            path: '/tech',
        },
    ]
    const navigate = useNavigate()

    return (
        <>
            <header>
                <Link className='logo' to='/'>
                    <img src={ logo } alt="Space tourism logo" />
                </Link>
                <hr className='headerLine' />

                <NavBar>
                    <ol>
                        {
                            pages
                                .map(page => (
                                    <li
                                        onClick={ () => navigate(page.path) }
                                        key={ page.path }
                                    >
                                        <NavLink
                                            className={ `navLink ${({ isActive, isPending }) => {
                                                isActive ?
                                                    'active'
                                                    : isPending ?
                                                        'pending'
                                                        : ''
                                            }}` }
                                            to={ page.path }
                                        >
                                            { page.name }
                                        </NavLink></li>
                                ))
                        }
                    </ol>
                </NavBar>

            </header>
            <main className='pageContent'>
                <Outlet />
            </main>
        </>
    )
}
export default Root