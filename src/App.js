import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from "./Routes/Home";
import Videos from "./Routes/Videos";
import Watching from './Routes/Watching';

import Header from "./Header";
import Footer from "./Footer";


import { useState, useEffect } from "react";

function App() {

  let [nav, setNav] = useState('')
  let responsive = () => {
    console.log('You clicked me')
    setNav(prev => !prev)
  }

  useEffect(() => {
    let FetchData = async () => {
      try {
        let res = await fetch('/database/videos.json')
        if (!res.ok) throw new Error(`an error here in useEffect `)
        let data = await res.json()
        let obj = data.Video.categories[0].videos
        setVideo(obj)
      } catch (error) {
        console.warn(`fetch error ${error}`)
      }
    }

    FetchData()
  }, [])

  let [video, setVideo] = useState([])
  let [watching, setWatching] = useState('')

  console.log(video)

  return (
    <div className="App">


      <div className="App">
        <Router>
          <Header responsive={responsive} nav={nav} />

          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/videos" element={<Videos video={video} setWatching={setWatching} />} />
            <Route path="/watch/:title" element={<Watching watching={watching} />} />
          </Routes>

          <Footer />

        </Router>
      </div>
    </div>

  );
}

export default App;
