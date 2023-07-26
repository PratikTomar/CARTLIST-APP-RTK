import logo from './logo.svg';
import './App.css';
import Form from './components/form/form.component';

import { useDispatch} from 'react-redux';
import { reset } from './redux/actions/action';
import MoviePlaylist from './components/playlist/movieCartList.component';
import SongPlayList from './components/playlist/songsCartList.component';
import CoursePlayList from './components/playlist/courseCartList.component';

function App() {

  const dispatch = useDispatch();

  const handleResetAll = () => {
    dispatch(reset())
  }

  return (
    <div className="container is-fluid">
      <button 
      onClick=
      {() => handleResetAll()} 
      className="reset-all button is-danger">
        Reset All Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlayList />
      <hr />
      <CoursePlayList />
    </div>
  );

}

export default App;
