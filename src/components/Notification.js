import Alert from 'react-bootstrap/Alert';

function Notification(props) {
  const capitalize = (world) => {
    const lower = world.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1); 
  }
  return (
    props.alert && <Alert variant={`${props.alert.type}`}>
      <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
    </Alert>
  );
}

export default Notification;