import React from "react";
import ShimmerComponent from './ShimmerComponent';

class UserDetailsComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userInfo: null
    };
  }

  async componentDidMount() {

    console.log(`${this.props.child} - It'll be called once the component is mounted (initial render)`);

    const GITHUB_URL = " https://api.github.com/users/ItzzzManoj";

    const data = await fetch(GITHUB_URL);

    const json = await data.json();

    this.setState({
      userInfo: json
    });
  }


  componentDidUpdate() {
    console.log(`${this.props.child} This hook will be called when the component is updated (On rerender)`)
  }

  componentWillUnmount() {
    console.log(`${this.props.child} This hook will be called when the component is unmounted from DOM`);
  }
  
  render() {

    if (this.state.userInfo === null) {
      return <ShimmerComponent />;
    }

    return (
      <div className='details-container'>
        <h5>Name: {this.state.userInfo.name}</h5>
        <h5>Login: {this.state.userInfo.login}</h5>
        <h5>Location: {this.props.location}</h5>
        <a href={this.state.userInfo.html_url} target='_blank'>
          My github page
        </a>
      </div>
    )
  }

}

export default UserDetailsComponent;