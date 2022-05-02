import React from 'react';
import './Ben.css';
const Ben = () => {
    const style = {
        backgroundColor: 'red',
        color: 'white',
    }
    return (
        <div style={{width:'100%'}}>  <center> <h1> Student Login Form </h1> </center> 
        <div class="container">
            <form>
                <label>Enter Username </label><br/>
                <input type="text" placeholder="Enter" style={style} />
                <br/>
                <label>Password</label><br/>
                <input type="password" placeholder="Enter Password" name="password"></input>
              <br/>
                <button type="submit">Login</button>

            </form>
            </div>
        </div>
    )
}
export default Ben;