import './App.css';
import Header from './Compponents/Header/Header';
import SubHeader from './Compponents/SubHeader/SubHeader';
import Features from './Compponents/Features/Features';
import Services from './Compponents/Services/Services'
import CTA from './Compponents/CTA/CTA';
import Portfolio from './Compponents/Portolio/Portfolio';
import Counts from './Compponents/Counts/Counts';
import Test from './Compponents/TestImonials/TestImonials';
import Team from './Compponents/Team/Team';
import Contact from './Compponents/Contact/Contact';
import Footer from './Compponents/Footer/Footer'

function App() {
  return (
    <div>
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
      <body>
        <Header />
        <SubHeader />
        <Features />
        <Services />
        <CTA></CTA>
        <Portfolio></Portfolio>
        <Counts />
        <Test />
        <Team />
        <Contact />
        <Footer />
      </body>


    </div>
  );
}

export default App;
