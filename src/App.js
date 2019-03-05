import React, { Fragment } from 'react';
import {Container} from 'semantic-ui-react';
import './App.scss';

import Menu from './Menu'
import Homepage from './Homepage'

const App = () => (
  <Fragment>
  <Menu />
  <Container>
    <Homepage />
  </Container>
  </Fragment>
);

export default App;
