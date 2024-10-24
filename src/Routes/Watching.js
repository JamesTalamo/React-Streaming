import '../styles/watching.css'

let Watching = ({ watching }) => {


    return (
        <div className="WatchingSection">

            <div className="Watching-page" id="Watching-page1">

                <video className='Watching-container-vid'
                    src={watching.sources[0]}
                    controls
                    autoPlay >

                </video>

            </div>

        </div>
    )
}

export default Watching
