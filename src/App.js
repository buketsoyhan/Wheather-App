import './App.css';
import { WhetherProvider } from './context/WheatherContext';
import Main from './components/Main';

function App() {
  return (
    <div className='container'>
      <WhetherProvider>
        <Main />
      </WhetherProvider>
    </div>
  );
}

export default App;
