import s from ".//FormsControls.module.css";

const FormsControl = ({ input, meta, child, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={s.formControl + (hasError ? " " + s.error : " ")}>
      <div>{props.children}</div>
      {hasError && <span>{meta.error}</span>}
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
