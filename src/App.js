import './App.css';
import Navbar from './components/navbar/Navbar';
import NumberToWords from './components/number-to-words/NumberToWords';
import Photos from './components/pagination/Photos';
import { Routes, Route } from "react-router-dom";
import ColorPicker from './components/color-picker/ColorPicker';

function App() {
    return (
        <div className="App">
                <Navbar/>
            <Routes>
                <Route path="/" element={<ColorPicker/>} />
                <Route path="/photos" element={<Photos/>} />
                <Route path="/number" element={<NumberToWords/>} />
            </Routes>
            
        </div>
    );
}

export default App;
