import { Field } from "redux-form";
import s from ".//FormsControls.module.css";

const FormsControl = ({ input, meta: { touched, error }, children }) => {
  const hasError = touched && error;
  return (
    <div className={s.formControl + (hasError ? " " + s.error : " ")}>
      <div>{children}</div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormsControl {...props}>
      {" "}
      <input className={s.messages} {...restProps} {...input} />
    </FormsControl>
  );
};

export const InputLogin = (props) => {
  const { input, meta, element, ...restProps } = props;
  return (
    <FormsControl {...props}>
      {" "}
      <input className={s.form} {...restProps} {...input} />
    </FormsControl>
  );
};

export const createField = (
  placeholder,
  name,
  validators,
  component,
  props = {},
  text = ""
) => (
  <div>
    <Field
      placeholder={placeholder}
      name={name}
      validate={validators}
      component={component}
      {...props}
    />{" "}
    {text}
  </div>
);
