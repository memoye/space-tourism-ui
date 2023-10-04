import './navBar.css'

const NavBar = ({ children }) => {


    return (
        <nav className='navBar'>
            { children }
        </nav>
    )
}
export default NavBar