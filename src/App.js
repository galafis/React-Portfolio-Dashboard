/**
 * Portfolio Dashboard App
 * @author Gabriel Demetrios Lafis
 */

import React from 'react';
import styled from 'styled-components';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import './App.css';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const MainContent = styled.main`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <MainContent>
        <Dashboard />
      </MainContent>
    </AppContainer>
  );
}

export default App;
