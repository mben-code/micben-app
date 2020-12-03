import { HeaderWrapper, HeaderBar, RouteItem, RouteLink } from './header.styles';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderBar>
        <RouteItem>
          <RouteLink exact to="/">
            Home
          </RouteLink>
        </RouteItem>
        <RouteItem>
          <RouteLink to="/about">About</RouteLink>
        </RouteItem>
        <RouteItem>
          <RouteLink to="/work">Work</RouteLink>
        </RouteItem>
        <RouteItem>
          <RouteLink to="/contact">Contact</RouteLink>
        </RouteItem>
      </HeaderBar>
    </HeaderWrapper>
  );
};

export default Header;
