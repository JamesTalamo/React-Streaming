import '../styles/videos.css'
import { Link } from 'react-router-dom'

let Vidoes = ({ video, setWatching }) => {
    return (
        <div className="VideosSection">
            <div className="Video-page" id="Video-page1">
                {video.map((video) => (
                    <Link className='Video-item' to={`/Watch/${video.title}`} onClick={() => setWatching(video)}>
                        <p className='video-item-title'>{video.title}</p>
                        <div className='Video-item-desc'>{video.description}</div>
                    </Link>
                ))}

            </div>
        </div>
    )
}

export default Vidoes



