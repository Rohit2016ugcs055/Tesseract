import React, { Component} from 'react'
import {connect} from 'react-redux'
import getJobFeeds from '../api.js'
import { render } from 'react-dom'
import FormWrapper from '../../../components/Card'
import calculateDateInFormat from '../../../utils/calculateDate'
//import {buyCake,addCake} from '../redux/cake/cakeActions.js'

// function CakeContainer(props){
//     return (
//         <div className="App">
//             <h2>Number of cakes-{props.numberOfCakes}</h2>
//             <button onClick={props.buyCake}>Buy Cake</button>
//         </div>
//     )
// }


// class HyristContainer extends Component{

      

//     render(){

       
//          return(
                
//             <div className="App G">
//                     <h2>Number of cakes-{this.props.numberOfCakes}</h2>
//                    <button onClick={this.props.buyCake}>BUY_CAKE</button>
//                    <button onClick={this.props.addCake}>ADD_CAKE</button>
//            </div>

//          );

//     }
// }


// const mapStateToProps=state=>{
//     return{
//         numberOfCakes:state.numberOfCakes
//     }
// }


// const mapDispatchToProps=dispatch=>{
//     return {
//         buyCake:()=>dispatch(buyCake()),
//         addCake:()=>dispatch(addCake())
//     }
// }



// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// ) (CakeContainer)



class HyristContainer extends Component{


    componentDidMount() {
        this.props.dispatch(getJobFeeds());
      }
    

  render(){

        
   // console.log(this.props.userData,"CHECKIT")

    return this.props.userData.loading ?(
        <h2>Loading</h2>
    ):this.props.userData.error ?(
        <h2>{this.props.userData.error}</h2>
    ):(
        <div>
            <h2>User List</h2>
            <div>
                {
                this.props.userData.feed&&this.props.userData.feed.jobFeed&&this.props.userData.feed.jobFeed.map(user => {
                   
                   return(
                   
                   <FormWrapper>
                       <h2>{user.title}</h2>
                        <p>
	                     <span className="cardDisplay">{user.companyData.companyName}</span> 
	                     <span className="cardDisplay">{user.min}- {user.max}</span> 
	                     <span className="cardDisplay">{user.location.name}</span>
	                     <span className="cardDisplay">{calculateDateInFormat(user.createdTimeMs)}</span>

                        </p>
                   </FormWrapper>
                   );
                })
                }
            </div>
        </div>
    )
            }
}



const mapStateToProps=state=>{
    return{
       userData:state
    }
}
const mapDispatchToProps = dispatch => ({
    dispatch
  })




export default connect(
    mapStateToProps,
    mapDispatchToProps
) (HyristContainer)
