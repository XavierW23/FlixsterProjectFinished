import './App.css';
import MovieList from "./components/MovieList";


function App() {
  return (
      <> <div  className="containter">
        <div className="row">
          <div className="col-12">
            <h3 className="display-4 page-title text-center m-3">NOW PLAYING MOVIES</h3>
            <hr/>
          </div>
        </div>

        <MovieList />
      </div>
      </>
  );
}

export default App;
