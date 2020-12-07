import { AboutBody, AboutContainer, AboutTitle, Link } from './about.styles';

const About = () => (
  <AboutContainer>
    <AboutTitle>About Michael</AboutTitle>
    <AboutBody>
      Michael is a full stack web developer, with experience building and involving
      in tons of projects that empowered the customers&apos; business success through
      continued contribution and high quality and performance work.
    </AboutBody>
    <AboutBody>
      Michael is proud of his passion for understanding how UI/UX drives their
      business needs and implementing it with new technologies. He considers himself
      a &apos;continued learner,&apos; eager to both build on his technical
      foundations in software and solve the tough challenges with new latest proven
      technologies.
    </AboutBody>
    <AboutBody>
      Her hunger for knowledge and determination to turn information into action has
      contributed to his most recent success at{' '}
      <Link href="https://codecharley.com" target="_blank">
        CodeCharley
      </Link>
      . There, he provided digital solutions, which affect growing revenue, expanding
      their markets, and productivity of the office work, to the clients, such as
      Flagship One, Medical Concierge, and Ambridge.
    </AboutBody>
    <AboutBody>
      Michael&apos;s motivation is to be part of an enterprise team working with
      cutting-edge technologies. Please feel free to reach out to{' '}
      <Link href="/contact">here</Link> to connect!
    </AboutBody>
  </AboutContainer>
);

export default About;
