import { getByDisplayValue } from '@testing-library/dom'
import React from 'react'
 

const  fname = "ahmad naeem ch ";
let curTime= new Date();
curTime=curTime.getHours();
let greet= ' ';
const cssStyle= { };


if(curTime >=1 && curTime<12){
    greet="GOOD MORNING";
    cssStyle.color= 'green';
}
else if(curTime>=12 && curTime<19){
    greet="GOOD AFTERNOON";
    cssStyle.color= 'Orange';
} else {
    greet="GOOD NIGHT";
    cssStyle.color= 'black';
}



// const heading ={
// color:"blue ",
// textAlign: "center",
// fontWeight: 'bold',
// textShadow: '3px 2px powderblue',
// textTransform:'capitalize',
// padding: '10px',
// fontFamily: '"Train One", cursive',
// };
class Home2 extends React.Component {
    
    render() {
        return(
            <>
            <div>

            <h1> Hello sir,  <span style = {cssStyle}> {greet}</span></h1>
            </div>
            </>

            
        )
    }
}
export default Home2