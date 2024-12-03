import '../App.css'

export interface FieldProps{
  label: string;
  type?: string;
  placeholder?: string
}


export default function Field(props: FieldProps) {
  return (
    <div id="Field-css">
      <label>{props.label}:</label>
      <input type={props.type || "text"} placeholder={props.placeholder} />
    </div>
  );
}
