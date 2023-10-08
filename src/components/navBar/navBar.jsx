import './navBar.css'


const NavBar = ({ children, className }) => {


    return (
        <nav className={ `navBar ${className && className}`.trimEnd() } >
            { children }
        </nav>
    )
}
export default NavBar