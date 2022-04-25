import { connect } from "react-redux";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
  return {
    posts: state.dialogsPage,
  };
};

export const DialogsContainer = connect(mapStateToProps)(Dialogs);


