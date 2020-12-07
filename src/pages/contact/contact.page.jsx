import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import FloatInput from '../../components/float-input/float-input.component';
import FlatButton from '../../components/flat-button/flat-button.component';
import IconButton from '../../components/icon-button/icon-button.component';
import {
  ContactContainer,
  ContactTitle,
  ContactBody,
  ContactForm,
  ContactInfo,
  InfoTitle,
  InfoBody,
} from './contact.styles';

const Contact = () => (
  <ContactContainer>
    <ContactTitle>Feel Free To Contact!</ContactTitle>
    <ContactBody>
      <ContactForm>
        <div style={{ display: 'flex' }}>
          <FloatInput label="First Name" />
          <FloatInput label="Last Name" />
        </div>
        <div style={{ display: 'flex' }}>
          <FloatInput label="Organisation" />
        </div>
        <div style={{ display: 'flex' }}>
          <FloatInput label="What would you like to talk about?" type="textarea" />
        </div>
        <div style={{ display: 'flex' }}>
          <FlatButton type="button">Send</FlatButton>
        </div>
      </ContactForm>
      <ContactInfo>
        <InfoTitle>Phone:</InfoTitle>
        <InfoBody>(718)-577-2705</InfoBody>
        <InfoTitle>Email:</InfoTitle>
        <InfoBody>Michael.Benares2020@gmail.com</InfoBody>
        <InfoTitle>Follow Me!</InfoTitle>
        <IconButton
          icon={faLinkedin}
          style={{ marginRight: '30px' }}
          href="https://www.linkedin.com/in/michaelben2020"
          target="_blank"
        />
        <IconButton icon={faFileAlt} style={{ marginRight: '30px' }} />
        <IconButton
          icon={faGithub}
          style={{ marginRight: '30px' }}
          href="https://github.com/mben-code"
          target="_blank"
        />
      </ContactInfo>
    </ContactBody>
  </ContactContainer>
);

export default Contact;
