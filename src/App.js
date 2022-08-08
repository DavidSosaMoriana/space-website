import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" exact></Route>
            </Routes>
        </Router>
    );
}

export default App;
