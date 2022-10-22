import './App.css';
import Body from './components/body/Body';
import Cards from './components/cards/Cards';
import Carousel from './components/carousel/Carousel';
import Coins from './components/coins/Coins';
import Footer from './components/footer/Footer';
import Header from './components/Header';
import Review from './components/reviews/Review';
import Stats from './stats/Stats';

function App() {
  return (
    <>
        <Header />
        <Body />
        <Cards />
        <Coins />
        <Carousel />
        <Stats />
        <Review />
      <Footer />
    </>
  );
}

export default App;
