import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <Container>
        <h1>
          Tim Beckett
        </h1>
        <h2>Software Engineer</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2/">Page 2</Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;