import { Link } from "react-router-dom"

let Header = () => {
    return (
        <div className="Header">
            <div className="Header-logo"></div>

            <div className="Header-nav-container">
                <Link className="header-nav-nav" to='/home'>Home</Link>
                <Link className="header-nav-nav" to='/videos'>Movie</Link>
            </div>

        </div>
    )
}

export default Header