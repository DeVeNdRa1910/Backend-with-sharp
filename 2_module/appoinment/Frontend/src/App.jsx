import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppointmentForm from './components/AppointmentForm';
import Appointments from './pages/Appointments';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppointmentForm />} />
        <Route path="/appointments" element={<Appointments />} />
      </Routes>
    </Router>
  );
};

export default App;
