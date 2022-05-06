import React from "react";
import { connect } from "react-redux";
import { Profile } from "./Profile";
import { getUserProfile } from "../../redux/profileReducer";
import { withRouter } from "../utils/withRouter";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

const WhithUrlDateContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, { getUserProfile })(
  WhithUrlDateContainerComponent,
  ProfileContainer
);
