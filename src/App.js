import { useEffect } from 'react';
import Telegram from './components/Telegram';
import Login from './components/Login';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from './userSlice';
import { auth } from './misc/firebase'
import { loginUser, logout } from './userSlice'

function App() {

  /* const { user } = useSelector(state => ({
    ...state.user
  })); */

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {

    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(loginUser({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName
        }))
      }
      else {
        dispatch(logout)
      }
    })
  }, [dispatch])


  return (
    <div className="App">
      {!user ? <Login /> : <Telegram />}
    </div>
  );
}

export default App;
