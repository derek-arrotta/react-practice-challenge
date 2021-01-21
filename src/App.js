import React from 'react';
import Profile from './Profile'
import Form from './Form'
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      profiles : [
        {
          firstName : "Alfredo",
          lastName : "Salazar",
          role : "Mentor",
          id : 123
        },
        {
          firstName : "Daniel",
          lastName : "Di Venere",
          role : "Student",
          id : 456
        }
      ]
    }
  }

  clickSubmit = (firstName, lastName, role) => {
    console.log('click submit ran');
    console.log(firstName);
    console.log(lastName);
    console.log(role);

    this.setState({
      firstName : this.state.profiles.push(firstName),
      //lastName : lastName,
      //role : role,
    })
  }

  
  render(){
    return (
      <div>
          {/* Display the full list of Profiles using the Profile.js component*/}
          <Profile profiles={this.state.profiles} />
          {/* Extra credit (a little more challenging): Add a form to add a new profile to the list  */}
          <Form clickSubmit={this.clickSubmit} />
          
      </div>
    );
  }
}

export default App;
