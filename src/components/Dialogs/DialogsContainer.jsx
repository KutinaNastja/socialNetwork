import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
  return {
    posts: state.dialogsPage,
  };
};

const AuthRedirectComponent = withAuthRedirect(Dialogs);

export const DialogsContainer = connect(mapStateToProps)(AuthRedirectComponent);
