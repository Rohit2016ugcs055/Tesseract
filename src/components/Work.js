import React ,{Component, cloneElement} from 'react';
import Person from '../Person/Person.js';
import logo from '../logo.svg';
import '../App.css';
class  Work extends Component{
  constructor(props){
      super(props);
      this.state={
          Persons:[
              {name:"Rohit",age:22},
              {name:"Roshan",age:32},
              {name:"Sahil",age:21},
          ]
      }
  }



//   componentDidMount(){
//     fetch("https://www.mohfw.gov.in/data/datanew.json")
//     .then(res=>res.json())
//     .then(res=>{ 
//         this.setState({
//           record:res,
//           newrecord:res,
          
//         })
//     })
//   }

 
switchNameHandler=()=>{
    this.setState({
        Persons:[
            {name:"Rounak",age:22},
            {name:"Roshan",age:32},
            {name:"Sahil",age:25},
        ]
    })
}






  


     


  render()
  {
    
  
    
     return(
     
     
     
      

      <div className="App">
      <button onClick={this.switchNameHandler}>Switch</button>
      {/* <Person 
      name={this.state.Persons[0].name}
      age={this.state.Persons[0].age}/>

      <Person 
      name={this.state.Persons[1].name}
      age={this.state.Persons[1].age}/>
      
      <Person 
      name={this.state.Persons[2].name}
      age={this.state.Persons[2].age}/> */}
      <h1>Hi here!</h1>
      
      </div>
     );
  }

}
export default Work;