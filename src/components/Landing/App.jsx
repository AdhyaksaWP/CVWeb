import Header from './Header.jsx'
import Body from './Body.jsx';
import Footer from './Footer.jsx'
import Background from './Background.jsx';
import Transition from '../../transition.jsx';

function App() {
  return(
    <>
      <Header/>
      <Body/>
      <Background/>
      <Footer/>
    </>
  );
}

const appTransiiton = Transition(App);

export default appTransiiton;
