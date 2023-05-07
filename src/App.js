import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Home/Navbar';
import HomeForm from './components/Home/HomeForm';
import Service from './components/Home/Service';
import Footer from './components/Home/Footer';
import Holidays from './components/Home/holiday/Holidays';
import DashBoard from './components/Dashboard/DashBoard';
import Passenger from './components/PassangerDetail/Passenger';
import Review from './components/Review/Review';
import Payment from './components/Payment/Payment';
import Ticket from './components/Ticket/Ticket';
function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<> <HomeForm />   <Service /> <Holidays /></>}></Route>
        <Route exact path="/train-dashboard" element={<><DashBoard/></>}></Route>
        <Route exact path="/passenger-detail" element={<><Passenger/></>}></Route>
        <Route exact path="/review-journey" element={<><Review/></>}></Route>
        <Route exact path="/payment" element={<><Payment/></>}></Route>
        <Route exact path="/ticket" element={<><Ticket/></>}></Route>





      </Routes>
      <Footer />
    </Router>


  );
}

export default App;
