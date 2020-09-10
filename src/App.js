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
    // this.sortBy=this.sortBy.bind(this)
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
  
    <Tracker/>,
    <Work/>

   

  
    
     return(
     
     <div>
       <Router>
        <Link to="/Tracker">About</Link>
        <Link to="/Work">Form</Link>
        <Route exact path="/Tracker" component={Tracker}/>
        <Route exact path="/Work" component={Work}/>



       </Router>
     </div>
    
       
      

     );
  }

}
export default App;