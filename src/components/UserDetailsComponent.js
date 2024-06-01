import React from "react";
import ShimmerComponent from './loading-state/ShimmerComponent';
import { GITHUB_URL } from "../utils/constants";
import makeFetchCall from "../utils/common-functions/makeFetchCall";

class UserDetailsComponent extends React.Component {

  constructor(props) {
    super(props);

    console.log(`Child - ${this.props.child} constructor`);

    this.state = {
      userInfo: null
    };
  }

  async componentDidMount() {

    console.log(`Child - ${this.props.child} componentDidMount`);

    const userInfo = await makeFetchCall(GITHUB_URL);

    this.setState({
      userInfo
    });
  }


  componentDidUpdate() {
    console.log(`Child - ${this.props.child} componentDidUpdate`);
  }

  componentWillUnmount() {
    console.log(`Child - ${this.props.child} componentWillUnmount`);
  }
  
  render() {

    console.log(`Child - ${this.props.child} render`);

    let {
      state: {
        userInfo = {}
      } = {},
      props = {}
    } = this;

    if (userInfo === null) {
      return <ShimmerComponent />;
    }

    return (
      <div className='details-container'>
        <h5>Name: {userInfo.name}</h5>
        <h5>Login: {userInfo.login}</h5>
        <h5>Location: {props.location}</h5>
        <a href={userInfo.html_url} target='_blank'>
          Github URL
        </a>
      </div>
    )
  }

}

export default UserDetailsComponent;