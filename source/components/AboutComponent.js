import React from 'react';
import UserDetailsComponent from './UserDetailsComponent';

class AboutComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Timer started");
    }, 1000);
    console.log("This hook will be called when the component is mounted (On initial render)")
  }

  componentDidUpdate() {
    console.log("This hook will be called when the component is updated (On rerender)")
  }

  componentWillUnmount() {
    console.log("This hook will be called when the component is unmounted from DOM");
    // User to clear the operations which are in memory even after the component is unmounted like setInterval
    clearInterval(this.timer);
  }

  render() {

    return (
      <div className='about-container'>
        <h4 className='about-title'>Thanks for visiting for the about page!</h4>
        <UserDetailsComponent child={1} location ={this.props.location}/>
        {/* <UserDetailsComponent child={2} location ={this.props.location}/> */}
      </div>
    );
  }
}

export default AboutComponent;