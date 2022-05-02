import React from 'react';
import './Quven.css';
const Quven = () => {
    const style = {

    };
    const chessBox=[1,2,3,4,5,6,7,8];
    const startwhitebox=chessBox.map(x=> <div class={x%2===0 ? 'whitebox' : 'blackbox'}>{x}</div>);
    console.log(startwhitebox)
    const startblackbox=chessBox.map(x=> <div class={x%2!==0 ? 'whitebox' : 'blackbox'}>{x}</div>);

    return (<div>
        <h1>chess Box</h1>
        <div class="container">
         {startwhitebox} 
        </div>
        <div class="container">
         {startblackbox} 
        </div> 
        <div class="container">
         {startwhitebox} 
        </div>
        <div class="container">
         {startblackbox} 
        </div>
        <div class="container">
         {startwhitebox} 
        </div>
        <div class="container">
         {startblackbox} 
        </div> 
        <div class="container">
         {startwhitebox} 
        </div>
        <div class="container">
         {startblackbox} 
        </div>


    </div>
    );
}
export default Quven;