import React, { useState } from 'react'
import { useHistory } from "react-router-dom"

const WordForm = (props) => {
  const [adjective1, setAdjective1] = useState('')
  const [pluralNoun1, setPluralNoun1] = useState('')
  const [adjective2, setAdjective2] = useState('')
  const [bodypart1, setBodyPart1] = useState('')
  const [bodypart2, setBodyPart2] = useState('')
  const [noun2, setNoun2] = useState('')
  const [noun3, setNoun3] = useState('')
  const [noun4, setNoun4] = useState('')
  const [noun5, setNoun5] = useState('')
  const [noun6, setNoun6] = useState('')
  const [noun7, setNoun7] = useState('')

  const history = useHistory()

  const handleSubmit = e => {
    e.preventDefault()
  }

  // const handleChange = (e, word) => {
  //   props.setfData(fData => ({
  //     ...fData,
  //     [word]: e.target.value
  //   }))
  // }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          id="adjective1"
          name="adjective1"
          type="text"
          placeholder="Adjective"
          onChange={(e) => setAdjective1(e.target.value)}
          value={adjective1}
        />
        <br />
        <input 
          id="pluralnoun1"
          name="pluralnoun1"
          type="text"
          placeholder="Plural Noun"
          onChange={(e) => setPluralNoun1(e.target.value)}
          value={pluralNoun1}
        />
        <br />
        <input 
          id="adjective2"
          name="adjective2"
          type="text"
          placeholder="Adjective"
          onChange={(e) => setAdjective2(e.target.value)}
          value={adjective2}
        />
        <br />
        <input 
          id="bodypart1"
          name="bodypart1"
          type="text"
          placeholder="Body Part"
          onChange={(e) => setBodyPart1(e.target.value)}
          value={bodypart1}
        />
        <br />
        <input 
          id="bodypart2"
          name="bodypart2"
          type="text"
          placeholder="Body Part"
          onChange={(e) => setBodyPart2(e.target.value)}
          value={bodypart2}
        />
        <br />
        <input 
          id="noun2"
          name="noun2"
          type="text"
          placeholder="Noun"
          onChange={(e) => setNoun2(e.target.value)}
          value={noun2}
        />
        <br />
        <input 
          id="noun3"
          name="noun3"
          type="text"
          placeholder="Noun"
          onChange={(e) => setNoun3(e.target.value)}
          value={noun3}
        />
        <br />
        <input 
          id="noun4"
          name="noun4"
          type="text"
          placeholder="Noun"
          onChange={(e) => setNoun4(e.target.value)}
          value={noun4}
        />
        <br />
        <input 
          id="noun5"
          name="noun5"
          type="text"
          placeholder="Noun"
          onChange={(e) => setNoun5(e.target.value)}
          value={noun5}
        />
        <br />
        <input 
          id="noun6"
          name="noun6"
          type="text"
          placeholder="Noun"
          onChange={(e) => setNoun6(e.target.value)}
          value={noun6}
        />
        <br />
        <input 
          id="noun7"
          name="noun7"
          type="text"
          placeholder="Noun"
          onChange={(e) => setNoun7(e.target.value)}
          value={noun7}
        />
        <br />
        <button onClick={() => {
          // let madlib = { 
          //   adjective1,
          //   pluralnoun1,
          //   adjective2,
          //   bodypart1,
          //   bodypart2,
          //   noun2,
          //   noun3,
          //   noun4,
          //   noun5,
          //   noun6,
          //   noun7
          // }
          history.push('/madlibs')}}>Get My MadLib!</button>
      </form>
    </div>)
  
}

export default WordForm