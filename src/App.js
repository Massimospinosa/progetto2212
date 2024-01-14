import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import TVShowsSection from './components/MySecondBar';
import TrendingCarousel from './components/MyCarousel';
import TrendingCarousel2 from './components/MyCarousel2';
import TrendingCarousel3 from './components/MyCarousel3';
import CommentArea from './components/CommentArea';
import Footer from './components/Footer';

function App() {
  return (
   <div class="bg-black">
        <header class="bg-black">
          <MyNav />
          
        </header>
        <main>
          <TVShowsSection />
          <TrendingCarousel />
          <TrendingCarousel2 />
          <TrendingCarousel3 />
          <CommentArea />
        </main>
        <footer>
        <Footer />
        </footer>
   </div>
  );
}

export default App;
