import {FieldProps} from './Field';
import '../App.css';
import Form from './Form';

const fields:FieldProps[] = [
  {label:"Email", type:"email", placeholder:"Enter email address"},
  {label:"Password", type:"password", placeholder:"Enter Password"}
]

export default function LoginForm() {
  return (
    <>
      <Form title="Login" fields={fields}/>
    </>
  );
}
