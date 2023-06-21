import './App.css';
import Header from './Compponents/Header/Header';
import SubHeader from './Compponents/SubHeader/SubHeader';
import Features from './Compponents/Features/Features';
import Services from './Compponents/Services/Services'
import CTA from './Compponents/CTA/CTA';
import Portfolio from './Compponents/Portolio/Portfolio';

function App() {
  return (
    <div>
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
      <Header></Header>
      <SubHeader></SubHeader>
      <Features></Features>
      <Services></Services>
      <CTA></CTA>
      <Portfolio></Portfolio>

    </div>
  );
}

export default App;
