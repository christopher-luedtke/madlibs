import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import MadLibs from './MadLibs'
import Words from './Words'

function App() {
  // const [fData, setFdata] = useState({
  //   adjective1: "",
  //   pluralnoun1: "",
  //   adjective2: "",
  //   bodypart1: "",
  //   bodypart2: "",
  //   noun2: "",
  //   noun3: "",
  //   noun4: "",
  //   noun5: "",
  //   noun6: "",
  //   noun7: ""
  // })

  const [fData, setFdata] = useState([])

  useEffect(() => {
    fetch("/madlibs").then(data => {
      setFdata(data.fData)
    })
  }, [])

  return (
    <div className="App">
      <BrowserRouter>

          <h1>HALLOWEEN MADLIBS!</h1>
          <Route exact path="/" component={Words} setfData={setFdata} />
          <Route component={MadLibs} exact path="/madlibs" fData={fData} />
        
      </BrowserRouter>
    </div>
  );
}

export default App;
