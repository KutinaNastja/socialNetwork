import { connect } from "react-redux";
import {
  addMyMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../../../redux/dialogsReducer";
import { MyMessage } from "./MyMessage";

const mapStateToProps = (state) => {
  return { newMessageText: state.newMessageText };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMyMessage: () => {
      addMyMessageActionCreator();
    },
    newMessageText: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
  };
};

export const MyMessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyMessage);
