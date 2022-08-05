import React, {useState} from 'react';
import NavigationBar from './components/navigationBar';
import Main from './components/main'
import Footer from './components/footer';
import { getInitialData} from './Data'

function App() {
  let [aktif, setAktif] = useState(getInitialData);
  let [arsip, setArsip] = useState([]);
  let [Aktif, SetAktif] = useState(getInitialData);
  let [Arsip, SetArsip] = useState([]);

  return (
    <section style={{backgroundColor: "#262859", minHeight: "100vh"}}>
      <NavigationBar aktif={aktif} setAktif={setAktif} arsip={arsip} setArsip={setArsip} Aktif={Aktif} Arsip={Arsip}></NavigationBar>
      <Main Aktif={Aktif} Arsip={Arsip} aktif={aktif} setAktif={setAktif} arsip={arsip} setArsip={setArsip} SetAktif={SetAktif} SetArsip={SetArsip}></Main>
      <Footer></Footer>
    </section>
  )
}

export default App;
