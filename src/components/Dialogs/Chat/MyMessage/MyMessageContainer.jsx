import { connect } from "react-redux";
import {
  addMyMessage,
  updateNewMessageText,
} from "../../../../redux/dialogsReducer";
import { MyMessage } from "./MyMessage";

const mapStateToProps = (state) => {
  return { newMessageText: state.dialogsPage.newMessageText };
};

export const MyMessageContainer = connect(mapStateToProps, {
  addMyMessage,
  updateNewMessageText,
})(MyMessage);
