import { Link } from "react-router-dom"

let Header = ({ responsive, nav }) => {
    return (
        <>
            <div className="responsive-button" onClick={() => responsive()}></div>
            <div className="Header" style={{ display: nav === true ? 'none' : 'flex' }}>
                <div className="Header-logo"></div>

                <div className="Header-nav-container">
                    <Link className="header-nav-nav" to='/home'>Home</Link>
                    <Link className="header-nav-nav" to='/videos'>Movie</Link>
                </div>

            </div>
        </>


    )
}

export default Header