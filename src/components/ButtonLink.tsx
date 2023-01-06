import { Link } from 'react-router-dom';

interface Props {
  text: string;
  link: string;
  class?: string;
}

const ButtonLink = (props: Props) => {
  return (
    <Link to={props.link} className={props.class}>
      {props.text}
    </Link>
  );
};

export default ButtonLink;
