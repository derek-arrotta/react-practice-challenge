import React from 'react';

export default class Form extends React.Component {

onSubmitForm = (e) => {
  e.preventDefault()
  const firstNameAdded = e.target.firstname.value;
  const lastNameAdded = e.target.lastname.value;
  const roleAdded = e.target.role.value;
  this.props.clickSubmit(firstNameAdded, lastNameAdded, roleAdded)

}
render() {
  return (
    <form onSubmit={this.onSubmitForm}>
      <label htmlFor="first-name">First name
        <input type="text" name="firstname" value={this.props.firstName} required/>
      </label>
      <label htmlFor="last-name">Last name
        <input type="text" name="lastname" value={this.props.lastName} required/>
      </label>
      <label htmlFor="role">role
        <input type="text" name="role" value={this.props.role} required/>
      </label>
      <button type='submit'>
        submit
      </button>
    </form>
  )
}

}