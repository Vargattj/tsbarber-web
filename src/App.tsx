import React from 'react';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import GlobalStyle from './styles/global';

import AuthContext from './pages/context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'jonatas' }}>
      <SignIn />
    </AuthContext.Provider>

    <GlobalStyle />
  </>
);

export default App;
