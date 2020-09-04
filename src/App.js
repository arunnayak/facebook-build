import React from 'react';
import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Feed from './Feed/Feed';
import Widget from './Widget/Widget';
import Login from './Login/Login';
import { useStateValue } from './$Data/stateProvider';

function App() {
  const [{ user }] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <> {/* jsx fragmentatiot, needed when theres multiple childs, wrap inside one div then you dont need it */}
          <div className="app__header">
          <Header />
          </div>
          <div className="app__body">
            <Sidebar/>
            <Feed/>
            <Widget />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
