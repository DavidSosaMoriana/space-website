import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components';
import { Destination, Crew, Technology } from './pages';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" exact></Route>
                <Route path="/Destination" element={<Destination />}></Route>
                <Route path="/Crew" element={<Crew />}></Route>
                <Route path="/Technology" element={<Technology />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
