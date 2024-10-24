import '../styles/home.css'
import { Link } from 'react-router-dom'

let Home = () => {
    return (
        <div className="HomeSection">

            <div className="Home-page" id="Home-page1">
                <div className='Home-page-Title'>Welcome to BD SCREENS</div>
                <div className='Home-page-Header'>Download Unlimited<br></br> Movies, Drama, Music Video and More Content.</div>
                <div className='Home-page-text1'>Enjoy exclusive Music Video popular movies and Live shows. Subscribe <strong>BD Screen</strong> now</div>
                <Link className='Home-page-button' to='/Videos' style={{textDecoration:'none'}} >Watch Now!</Link>
            </div>



        </div>
    )
}

export default Home