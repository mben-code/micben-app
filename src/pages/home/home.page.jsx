import { HomeContainer, HomeTitle, Player, HomeBody, Link } from './home.styles';

const Home = () => {
  return (
    <HomeContainer>
      <HomeTitle>Michael Benaress</HomeTitle>
      <Player url="https://www.youtube.com/embed/Q9eh2iJsjxE" />
      <HomeBody>
        Web Developer | Full Stack Developer | DevOps Engineer | Co-Founder of{' '}
        <Link href="https://codecharley.com" target="_blank">
          CodeCharley&nbsp;
        </Link>
        | Consultant | Security Specialist(Anti-Virus, Firewall) | Listner to
        Feedspost | Dota2 Fan (Archen)
      </HomeBody>
    </HomeContainer>
  );
};

export default Home;
