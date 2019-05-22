import React from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';

class Profiles extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
				userProfile: [] 
			};
		}
	componentWillMount(){
		 let that = this;
		
		const  { match }  = this.props;
	   //console.log()
		fetch(`/engineerworker/${match.params.id}`)
		  .then( (response) => response.json())	
			.then( data =>  that.setState({userProfile: data }))
			//.then(console.log(that.state.userProfile))
			.catch(err => { console.log(err) })
		
	}


	 
	 	render() {
			return (
		    <div>
					{ this.state.userProfile.map( (user, i)=>
				  <ul key = {i} >
					<h2  style={{  margin: '10px', display:'block', color: 'orange', fontSize: '25px' }}>	
					<strong>{ 'WELCOME to  '+ user.fullName +"'s   PROFILE"}</strong><br/>
					</h2>
					<h2 style= {{color: 'white', fontSize: '18px'}}> {'Name:  '} {user.fullName}</h2> 
					<h2 style= {{color: 'white', fontSize: '18px'}}> {'experienceLevel:  '} {user.experienceLevel}</h2> 
					<h2 style= {{color: 'white', fontSize: '18px'}}> {'expectedSalary:  '} {user.expectedSalary}</h2>
					<h2 style= {{color: 'white', fontSize: '18px'}}> {'phoneNumber:  '} {user.phoneNumber}</h2>  
					<h2 style= {{color: 'white', fontSize: '18px'}}> {'status:  '} {user.status}</h2> 
					<h2 style= {{color: 'white', fontSize: '18px'}}> {'role:  '} {user.role}</h2>
					 {<button id="book" onClick={ () =>{
						 if(user.status === "not Available"){
							alert(user.fullName + 'is not availbale at the moment');
							return;
						 }else{
							 const workerNAME = user.userName ;
							 fetch('/orders', {
								method: 'POST',
								body: JSON.stringify({ workers : workerNAME , endDate: '2019-05-25 21:13:03' }),
								headers: {'Content-Type': 'application/json'}
							 })
							 .then((response) => {
									return response.json();
								})
							 .then( (data)=> console.log(data) ) 		
						 }
					 } } >Book Now</button>}
					</ul>
					
					) 
					
					}
				
			 
	      </div>	

		);
	}
	
}

export default Profiles;

// { console.log(this.state.x) }
// <h1>{'WELCOME '+this.state.x +'' }</h1>
// <table> 
//  <tbody>
// {this.state.userProfile.map( (user, i) => 
// 		<tr key = {i } style={{  margin: '10px', display:'block' }}>  
// <td><strong> NAME: </strong></td><td>{user.fullName}</td>
// <td><strong>EXPERIENCE LEVEL:</strong></td><td>{user.experienceLevel}</td>
// <td><strong>SALARY:</strong></td><td>{user.expectedSalary}</td>
// <td><strong>PHONE NUMBER:</strong></td><td>{user.phoneNumber}</td>
// <td><strong>STATUS:</strong></td><td>{user.status}</td>
// <td><strong>ROLE:</strong></td><td>{user.role}</td>
// { this.state.x = user.fullName}
// </tr>
// )}
// </tbody>

// </table>