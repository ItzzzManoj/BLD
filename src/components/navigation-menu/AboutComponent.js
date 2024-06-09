import React from 'react';
import UserDetailsComponent from '../UserDetailsComponent';
import UserContext from '../../utils/contexts/UserContext';

class AboutComponent extends React.Component {

  constructor(props) {

    console.log("Parent - constructor");
    super(props);
  }

  componentDidMount() {

    console.log("Parent - componentDidMount");
    
    this.timer = setInterval(() => {
      console.log("Timer started");
    }, 1000);
  
  }

  componentDidUpdate() {
    console.log("Parent - componentDidUpdate");
  }

  componentWillUnmount() {
    
    console.log("Parent - componentWillUnmount");
    
    // User to clear the operations which are in memory even after the component is unmounted like setInterval
    clearInterval(this.timer);
  }

  render() {

    console.log("Parent - render");

    return (
      <div className="m-4">
        <UserContext.Consumer>
          {
            ({ user }) => {
              return (
                <h4 className="text-center font-bold text-2xl my-5">
                  Hi {user}, Thanks for visiting for the about page!
                </h4>
              )
            }
          }
        </UserContext.Consumer>
        <UserDetailsComponent child={1} location ={this.props.location}/>
        <UserDetailsComponent child={2} location ={this.props.location}/>
      </div>
    );
  }

}

export default AboutComponent;