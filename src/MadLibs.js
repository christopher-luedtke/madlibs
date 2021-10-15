import React from 'react'

const MadLib = ({fData}) => {

  return (
    <div>
      <form>
        {fData.map(data => {
          return (
            <p> Here is a list of the most {data.adjective1} horror {data.pluralnoun1} ever made in Hollywood! Each of these {data.adjective2} films recieved a rating of two {data.bodypart1} up from Siskel and Ebert.
          1. The Hunch {data.bodypart2} of Notre {data.noun2}
          2. The {data.noun3} of the Living {data.noun4}
          5. {data.noun5} of Frankenstein
          6. Last {data.noun6} on the Left
          7. The {data.noun7} of the Opera 
        </p>
         )
        })}
      
      </form>
    </div>)
}

export default MadLib