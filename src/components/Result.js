import React from 'react'
 
const Result = ({ term, secretNum }) => {
  
  let result;
  let highscore = 0
  let score = 20;
  if (term) {
            
    if (!term) {
      result = 'You lost'
      console.log('lost')
    }
    else if (term !== secretNum) {
             
      if (secretNum > term) {
        result = 'You guessed lower'
        console.log('lower');
            
         score --
      } else if (secretNum < term) {
        result = 'You guessed higher'
        console.log('higher');
        score--
              
      }
      else {
        result = 'You Guessed Right'
        console.log('Winner🏆');
        highscore = score;
      }
            
    }
  }
  return (
    <div>
      {/* <h6>{score}</h6>
      <h6>{highscore}</h6> */}
      <h5>{result}</h5>
    </div>
  )
}
    
 
export default Result


 

 