import { connect } from "react-redux";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { InputLogin } from "../common/FormsControls/FormsControls";
import { login } from "../../redux/authReducer";
import { Navigate } from "react-router-dom";
import s from ".././common/FormsControls/FormsControls.module.css";

const maxLength50 = maxLengthCreator(50);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"Email"}
          name={"email"}
          component={InputLogin}
          validate={[required, maxLength50]}
        />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          type={"password"}
          name={"password"}
          component={InputLogin}
          validate={[required, maxLength50]}
        />
      </div>
      <div>
        <Field type={"checkbox"} name={"rememberMe"} component={InputLogin} />
        remember me
      </div>
      {props.error && <div className={s.formSummaryError}>{props.error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Navigate to="/profile" />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
