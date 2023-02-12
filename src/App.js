import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider} from 'react-redux';
import store from './redux/action/store';

function App() {

  return (
    <Provider store={store}>
      <div className='app'>
        <Routes/>
      </div>
    </Provider>
  );
}

export default App;
