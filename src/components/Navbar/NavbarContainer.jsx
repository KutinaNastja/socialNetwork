import { connect } from "react-redux";
import { Navbar } from "./Navbar";

const mapStateToProps = (state) => {
  return {
    posts: state.dialogsPage,
  };
};

export const NavbarContainer = connect(mapStateToProps)(Navbar);
