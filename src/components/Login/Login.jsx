import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { InputLogin } from "../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"Login"}
          name={"login"}
          component={InputLogin}
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          name={"password"}
          component={InputLogin}
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <Field type={"checkbox"} name={"rememberMe"} component={InputLogin} />
        remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

export const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
