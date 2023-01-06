interface Props {
  onChange: (value: string) => void;
  value: string;
  placeholder: string;
  className?: string;
  type?: string;
}

export default function Form(props: Props) {
  return <input type={props.type ? props.type : 'text'} className={`input input-bordered w-full max-w-md ${props.className}`} placeholder={props.placeholder} onChange={(e) => props.onChange(e.target.value)} value={props.value} />;
}
