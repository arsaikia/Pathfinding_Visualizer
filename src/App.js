import React from 'react';
import { Provider } from 'Provider';
import Container from 'components/Container/MainContainer';
import 'reset-css';
import './App.scss';
import 'fontsource-roboto';
import 'fontsource-roboto';


const App = () => {
  return (
    <Provider>
      <Container />
    </Provider>
  );
};

export default App;
