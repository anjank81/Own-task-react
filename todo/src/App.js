import React, { Component } from 'react';
import style from "./style.css";

class App extends React.Component {
  state =
   {
     styleOne: {}, styleTwo: {} 
    };

    
   transfor(offset) {
    const cos = Math.cos(offset);
    const sin = Math.sin(offset);
    return { transform: `matrix3d(${sin}, ${-cos}, ${sin}, 0, ${-cos}, ${sin}, 0, 0, 0, ${cos}, ${cos}, ${sin}, 0, 0, 0, 1)` };
  }
   
  
  onMouseMove = (e) => {
    this.setState({
      styleOne: this.transfor(-e.clientX / e.clientY),
      styleTwo: this.transfor(e.clientX / e.clientY)
    })
  }
 
  render() {
    console.log(this.state.styleOne);
    return <div className="div-out" onMouseMove={this.onMouseMove}>
      <div className="panel1" style={{...this.state.styleOne}} >ffbdf</div>
      <div className="panel2" style={{...this.state.styleTwo}} >hf</div>      
    </div>    
  } 
}

export default App;