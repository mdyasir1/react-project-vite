import Field, { FieldProps } from "./Field";
import '../App.css';

interface FormProps {
  title: string;
  fields: FieldProps[];
}

export default function Form(props: FormProps) {
  return (
    <div id="Form">
      <h3>{props.title}</h3>
      <div id="register-css">
        {props.fields.map((value) => {
          return (
            <Field
              label={value.label}
              type={value.type}
              placeholder={value.placeholder}
            />
          );
        })}
      </div>
      <div>
        <button> Submit </button>
      </div>
    </div>
  );
}
