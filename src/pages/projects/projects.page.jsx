import {
  ProjectContainer,
  ProjectTitle,
  ProjectItem,
  ItemTitle,
  ItemLink,
  ItemBody,
} from './projects.styles';

const Projects = () => (
  <ProjectContainer>
    <ProjectTitle>Here is some stuff I worked on or been a part of.</ProjectTitle>
    <ProjectItem>
      <ItemTitle>Hydra Custom CRM</ItemTitle>
      <ItemBody>
        Built for <ItemLink>Flagship One Inc.</ItemLink>
      </ItemBody>
      <ItemBody>
        Built with: <b>Laravel(PHP7), MySQL, Redis, Vue.js, CoreUI, SCSS</b>
      </ItemBody>
      <ItemBody>
        Integrated with: <b>eBay Store, Magento SOAP APIs(</b>
        <ItemLink>fs1inc.com</ItemLink>), <b>EasyPost, Google Maps</b>
      </ItemBody>
      <ItemBody>
        Tested with: <b>Selenium WebDriver, Cypress</b>
      </ItemBody>
      <ItemBody>
        Deployed on or with: <b>Forge, OVH, Linux, Nginx, Load-balancer</b>
      </ItemBody>
    </ProjectItem>
    <ProjectItem>
      <ItemTitle>The Brokers&apos; Bridge</ItemTitle>
      <ItemBody>
        Links: <ItemLink>AmbridgeWholeSale.com</ItemLink>,{' '}
        <ItemLink>AmbridgeLending.com</ItemLink>
      </ItemBody>
      <ItemBody>
        Built for: <ItemLink>Ambridge</ItemLink>
      </ItemBody>
      <ItemBody>
        Built with:{' '}
        <b>
          Node.js, Express, AWS DynamoDB, Lambda, EventBridge, React/Redux-Thunk,
          Material UI
        </b>
      </ItemBody>
      <ItemBody>
        Tested with: <b>Jest/Enjyme</b>
      </ItemBody>
      <ItemBody>
        Deployed on or with: <b>AWS EC2, GitHub CI/CD</b>
      </ItemBody>
    </ProjectItem>
    <ProjectItem>
      <ItemTitle>EverestKiosk iPad APP</ItemTitle>
      <ItemBody>
        Built for:{' '}
        <ItemLink href="https://mmsdistro.com/" target="_blank">
          MMS Distribution
        </ItemLink>
      </ItemBody>
      <ItemBody>
        Built with: <b>Node.js, Express, Mongose, React/React-Hooks, Material UI</b>
      </ItemBody>
      <ItemBody>
        Integrated with: <b>SquarePayment, SquareStore</b>
      </ItemBody>
    </ProjectItem>
  </ProjectContainer>
);

export default Projects;
