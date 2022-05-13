import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
  return {
    posts: state.dialogsPage,
  };
};





export default compose(connect(mapStateToProps), withAuthRedirect)(Dialogs);
