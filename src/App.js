import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Ahmedabad from './Component/Ahmedabad';
import Corona from './Component/Corona';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Business from './Component/Business';
import World from './Component/World';
import Technology from './Component/Technology';
import Gujarat from './Component/Gujarat';
import Ahmedabad2 from './Component/Ahmedabad2';
import Ahmedabad3 from './Component/Ahmedabad3';
import Corona2 from './Component/Corona2';
import Corona3 from './Component/Corona3';
import Gujarat2 from './Component/Gujarat2';
import Gujarat3 from './Component/Gujarat3';
import Business2 from './Component/Business2';
import Business3 from './Component/Business3';
import World2 from './Component/World2';
import World3 from './Component/World3';
import Technology2 from './Component/Technology2';
import Technology3 from './Component/Technology3';
import Food from './Component/Food';
import Entertainment from './Component/Entertainment';
import Beauty from './Component/Beauty';
import Food2 from './Component/Food2';
import Food3 from './Component/Food3';
import Entertainment2 from './Component/Entertainment2';
import Entertainment3 from './Component/Entertainment3';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/ahmedabad" element={<Ahmedabad />} />
                    <Route path="/ahmedabad2" element={<Ahmedabad2 />} />
                    <Route path="/ahmedabad3" element={<Ahmedabad3 />} />                
                    <Route path="/corona" element={<Corona />} />
                    <Route path="/corona2" element={<Corona2 />} />
                    <Route path="/corona3" element={<Corona3 />} />
                    <Route path="/business" element={<Business />} />
                    <Route path="/business2" element={<Business2 />} />
                    <Route path="/business3" element={<Business3 />} />
                    <Route path="/world" element={<World />} />
                    <Route path="/world2" element={<World2 />} />
                    <Route path="/world3" element={<World3 />} />
                    <Route path="/technology" element={<Technology />} />
                    <Route path="/technology2" element={<Technology2 />} />
                    <Route path="/technology3" element={<Technology3 />} />
                    <Route path="/gujarat" element={<Gujarat />} />
                    <Route path="/gujarat2" element={<Gujarat2 />} />
                    <Route path="/gujarat3" element={<Gujarat3 />} />
                    <Route path="/food" element={<Food />} />                    
                    <Route path="/food2" element={<Food2 />} />                    
                    <Route path="/food3" element={<Food3 />} />                    
                    <Route path="/entertainment" element={<Entertainment />} />
                    <Route path="/entertainment2" element={<Entertainment2 />} />
                    <Route path="/entertainment3" element={<Entertainment3 />} />
                    <Route path="/beauty" element={<Beauty />} />
                    
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
