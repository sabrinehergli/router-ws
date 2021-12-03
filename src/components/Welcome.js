import React from "react";
class Welcome extends React.Component {
 state = {
   name: "Sara"
 }
 HandleClick=()=>{
     this.setState({name:"Chayma"})
 }
 render() {
   return (
   <div>
   <h1>hello {this.state.name}</h1>;
   <button onClick={this.HandleClick}>click me</button>
   </div>)
 }
}
export default Welcome;
