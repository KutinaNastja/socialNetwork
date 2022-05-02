import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { Profile } from "./Profile";
import { setUserProfile } from "../../redux/profileReducer";
import { withRouter } from "../utils/withRouter";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 2;
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

const WhithUrlDateContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, { setUserProfile })(
  WhithUrlDateContainerComponent,
  ProfileContainer
);
