import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LinkButton } from './icon-button.styles';

const IconButton = ({ icon, ...others }) => (
  <LinkButton {...others}>
    <FontAwesomeIcon icon={icon} />
  </LinkButton>
);

export default IconButton;
