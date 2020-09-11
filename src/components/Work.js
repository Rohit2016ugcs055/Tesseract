import React ,{Component, cloneElement} from 'react';
import Person from '../Person/Person.js';
import logo from '../logo.svg';
import '../App.css';
import '../Person/Person.css';
import { Redirect } from 'react-router-dom';
class  Work extends Component{
 
    constructor(props){
        super(props);
        this.state={
            persons:[
                {id:"1", name:"Rohit",age:30},
                {id:"2",name: "Rahul",age:23},
                {id:"3",name: "Sourav",age:21},
            ],
            visible:false,
        };
    }


switch=(props)=>{
    this.setState({
        persons:[
            {name:props,age:30},
            {name:"Vidut",age:23},
            {name:"Sourav",age:33},
        ]
    })
}

  
change=(event,id)=>{

     const  personind=this.state.persons.findIndex(per=>{
         return per.id==id
     })
   const person={
       ...this.state.persons[personind]
   }

   person.name=event.target.value;
   const per=[...this.state.persons]
   per[personind]=person
    this.setState({
       persons:per
    });
}

toggle=()=>{
    const show=this.state.visible;
    this.setState({
        visible:!show
    });
}
  
deleteName=(indx)=>{
    const person=[...this.state.persons];
    person.splice(indx,1);
    this.setState({
        persons:person,
    })
}
 

  render()
  {





    const style={
        backgroundColor:'green',
        font:'inherit',
        border:'1px solid blue',
        padding:'8px',
        color:'white'
    };

     let person=null;
    if(this.state.visible){
        person=(
            <div>
               {
                   this.state.persons.map((per,indx)=>{
                     return (<Person
                             name={per.name} 
                             age={per.age}
                             click={this.switch.bind(this,"Rajan")}
                             change={(event)=>{this.change(event,per.id)}}
                             remove={this.deleteName.bind(this,indx)}
                             key={per.id}/>);
                   })
               }
            </div>
        )
        style.backgroundColor='red';
    }


    const classes=[];
    if(this.state.persons.length<=2){
        classes.push('red');
    }
    if(this.state.persons.length<=1){
        classes.push('bold');
    }



    
  
     return(
     
     
     <div className="App">
       <h1>Hi, In am react App</h1>
       <p className={classes.join(' ')}>This is really working!</p>
       <button style={style} onClick={this.toggle}>Toggle</button>
       <button style={style} onClick={this.switch.bind(this,"Rahul")}>Switch</button>
       {person}
     </div>
      

     );

}
}
export default Work;