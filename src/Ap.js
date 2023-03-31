



import React from 'react'
import InstaFeeds from './components/InstaFeeds'
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
 

const Ap = () => {

  
console.log(process.env.GATSBY_API_URL)

  return (
    <>
      <header className="App-header" style={{textAlign:'center'}}>
        <h1 style = {{  
      
     
      fontSize: "50px",
      padding: "40px",
      fontFamily: "Roboto"}} >Showcase</h1>
      </header>

      <InstaFeeds token={process.env.GATSBY_API_URL} limit={12}/>
    </>
  );
}
/* export*/
export default Ap;