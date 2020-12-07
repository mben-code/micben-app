import { OutlinedButton } from './flat-button.styles';

const FlatButton = ({ children, ...others }) => (
  <OutlinedButton {...others}>{children}</OutlinedButton>
);

export default FlatButton;
