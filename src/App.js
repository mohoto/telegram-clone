import Telegram from './components/Telegram';
import Login from './components/Login';
import { useSelector } from 'react-redux';
import { selectUser } from './userSlice';

function App() {

  /* const { user } = useSelector(state => ({
    ...state.user
  })); */

  const user = useSelector(selectUser);

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
          <Telegram />
        )}
    </div>
  );
}

export default App;
