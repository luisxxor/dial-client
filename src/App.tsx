import Login from './components/login';
import Home from './components/home';

export default function App() {
  const isLogged = false;
  return (isLogged ? <Home /> : <Login />);
}
