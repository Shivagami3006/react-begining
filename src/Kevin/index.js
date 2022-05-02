import React,{useState, useEffect}  from "react";
import './Kevin.css';
const Kevin =()=>
{
    const [currentSum,setCurrentSum]=useState(0);
    const [clear,setClear]=useState(false);

  useEffect(()=>{
    document.querySelector('#result').value="";
  },[])
  
  useEffect(()=>{
    if(clear)
    document.querySelector('#result').value="";
  })
    const Add=(e)=>{
        e.preventDefault();
        if(clear) setClear(false);
        let currentNum=document.querySelector('#num').value
        if(currentNum=='')
        return;
        console.log({ currentNum, currentSum})
        let sum= currentSum+parseInt(currentNum);
        setCurrentSum(sum);
        document.querySelector('#num').value="";
 
    }
    const Sub=(e)=>{
        e.preventDefault();
        if(clear) setClear(false);
        let currentNum=document.querySelector('#num').value
        if(currentNum=='')
        return;
        console.log({ currentNum, currentSum})
        let sum= currentSum === 0 ? currentNum :currentSum-parseInt(currentNum);
        setCurrentSum(sum);
        document.querySelector('#num').value="";
 
    }
    const Multiple=(e)=>{
        e.preventDefault();
        if(clear) setClear(false);
        let currentNum=document.querySelector('#num').value
        if(currentNum=='')
        return;
        console.log({ currentNum, currentSum})
        let sum= currentSum === 0 ? currentNum :currentSum*parseInt(currentNum);
        setCurrentSum(sum);
        document.querySelector('#num').value="";
 
    }
    const Clear=(e)=>{
        e.preventDefault();
        console.log('sum:', currentSum);
        document.querySelector('form').reset();
        setClear(true);
        setCurrentSum(0);
      }
      const Jai=(e)=> {
        e.preventDefault();  
     console.log("click!")
        setCurrentSum(true);
        console.log(e)

    }
   

    return(<div className="App">
    <div className="app-title">
      <h1> Basic Form Calculator</h1>
    </div>
    <form>
          <input type="text" id="result" value={currentSum}  readOnly />   
          <input type="text" id="num" placeholder="enter a number" />
          <button onClick={Add}>Add</button>
          <button onClick={Sub}>Sub</button>
          <button onClick={Jai}>Clicme</button>
          <button onClick={Multiple}>Multiple</button>
          <button onClick={Clear}>Clear</button>
    </form>
  </div>
    
    );
}
export default Kevin;