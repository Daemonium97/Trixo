import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {  Navi } from './components/navigation'
import { About } from './components/about'
import { Services } from './components/services'
import { Gallery } from './components/gallery'
import { Contact } from './components/contact'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'



export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route>
           <Navi/>
            <About data={landingPageData.About} />
            <Services data={landingPageData.Services} />
            <Gallery />
            <Contact data={landingPageData.Contact} />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  )
}

export default App
