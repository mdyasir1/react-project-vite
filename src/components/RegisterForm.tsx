import { FieldProps } from './Field';
import '../App.css';
import Form from './Form';


export const fields:FieldProps[] = [
  {label:"First Name", type:"text", placeholder:"Enter First Name"},
  {label:"Last Name", type:"text", placeholder:"Enter Last Name"},
  {label:"Email", type:"email", placeholder:"Enter email address"},
  {label:"Password", type:"password", placeholder:"Enter Password"},
  {label:"Confirm Password", type:"password", placeholder:"Re-Enter Password"}
]

export default function RegisterForm() {
  return (
    <>
    <Form title="Register" fields={fields}/>
    </>
  );
}
