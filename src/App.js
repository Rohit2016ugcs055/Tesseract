import React ,{Component} from 'react';
import Tracker from './components/Tracker.js'
import Work from './components/Work.js'
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';
import person from './Person/Person.js';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
class App extends Component{
  constructor(props){
    super(props);
     this.state={
       record:[],
     }
  }





  componentDidMount(){
    fetch("https://www.mohfw.gov.in/data/datanew.json")
    .then(res=>res.json())
    .then(res=>{ 
        this.setState({
          record:res
          
        })
    })
  }


  // sortBy(key){
  //   this.setState({
  //      record:record.sort((a,b)=>a<b)
  //   })
  // }



  render()
  {
  
    

   

     
    
     return(
     
     <div>
      <Work/>
     </div>
    
       
      

     );
  }

}
export default App;