import React from 'react';

export default class Profile extends React.Component {
  
  render() {
    const profiles = this.props.profiles;
    const listItems = profiles.map((profile) =>
      <li key={profile.id}> 
        {profile.firstName} {profile.lastName} ({profile.role})
      </li>
    )

    return (
      <div>
        {listItems}
      </div>
    )
  }
}