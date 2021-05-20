import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import FormContent from "./components/FormContent/FormContent";
import Footer from "./components/Footer/Footer";


function App() {
    return (
        <div className='app-container'>
        <div className='app-container-head'>
            <Header/>
        </div>
            <div className='app-container-content'>
                <FormContent/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
