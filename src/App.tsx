import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyles from './styles/global';
import AppProvider from './hooks';
import AppRoutes from './routes';

export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props)=>{

  return (
    <>
      <Router>
          <GlobalStyles/>
          <AppProvider>
              <AppRoutes/>
          </AppProvider>
      </Router>)
    </>
  );

}

export default App;