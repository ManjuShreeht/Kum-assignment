
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import TenderCards from './components/TenderCards';
import SwipeButton from './components/SwipeButton';
import Chart from './components/Chart'
import Charts from './components/Charts';
import ChatScreen from './components/ChatScreen';

function App() {
  return (
    <div className="App">
      <Router>
     
        <Routes>

          <Route path="/" element={[<Header />,<TenderCards />,<SwipeButton />]} />
          <Route path="/charts" element={[<Header  backButton='/' />, <Chart />]} />
          <Route path="/charts/:person" element={[<Header  backButton='/charts' /> ,< ChatScreen />]} />
        </Routes>

      </Router>
   
    </div>
  );
}

export default App;
