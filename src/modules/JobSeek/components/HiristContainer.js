import React, { Component} from 'react'
import {connect} from 'react-redux'
import getJobFeeds from '../api.js'
import FormWrapper from '../../../components/Card'
import calculateDateInFormat from '../../../utils/calculateDate'

class HyristContainer extends Component{


    componentDidMount() {
        this.props.dispatch(getJobFeeds());
      }
    

  render(){

        
    console.log(this.props)
    return this.props.userData.feed.isJobLoading ?(
        <h2>Loading</h2>
    ):this.props.userData.feed.error ?(
        <h2>{this.props.userData.feed.error}</h2>
    ):(
        <div>
            <h2>{this.props.name}</h2>
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
