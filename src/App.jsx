import { artists } from './best-selling-music-artists';
import Footer from './components/Footer';
import Card from './components/Card';

function App() {


  return (
    <div className="app">
      <main className="main">
        <h1 className="title">Best-selling music artists</h1>

        {artists.map((a, index) => (
          <Card
            key={index}
            photo={a.photo_url}
            name={a.name}
            place={a.country}
            year={a.years_active}
          />
        ))}
      </main>

      <Footer/>
    </div>
  );
}

export default App;
