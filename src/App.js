import React from 'react';
import NavigationBar from './components/navigationBar';
import Main from './components/main'
import Footer from './components/footer';

function App() {
  return (
    <body style={{backgroundColor: "#262859", minHeight: "100vh"}}>
      <NavigationBar></NavigationBar>
      <Main></Main>
      <Footer></Footer>
    </body>
  )
}

export default App;
