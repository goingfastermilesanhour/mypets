export default function Core(props) {
  return (
    <li>
      <img src={props.image} alt={props.title}></img>
      <h3>{props.title}</h3>
      <h3>{props.description}</h3>
      <h3>{props.age}</h3>
    </li>
  );
}
