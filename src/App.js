import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components';
import { Destination, Crew, Technology } from './pages'

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" exact></Route>
                <Route path="/Destination" exact>
                  <Destination />
                </Route>
                <Route path="/Crew" exact>
                  <Crew />
                </Route>
                <Route path="/Technology" exact>
                  <Technology />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
