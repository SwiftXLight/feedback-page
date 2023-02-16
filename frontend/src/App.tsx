import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Form from './components/Form';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 0px;
`;

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Main />
        <Form />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
