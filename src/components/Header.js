import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/Container';

const Header = () => {
  return (
    <header className="header">
      <Container>
        <h1 className="header__title">
          Tim Beckett
        </h1>
        <h2 className="header__subtitle">Software Developer</h2>
      </Container>
    </header>
  );
};

export default Header;