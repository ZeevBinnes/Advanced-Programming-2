import {useState } from 'react';
import './App.css';
import User_app from './components/User_app';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    
    // the users only buildin data
    const [user_list, setlist] = useState([]);

    const [userConnected, setUser] = useState(null);
    const [register, setRegister] = useState(false);


    if (userConnected == null) {
        if (!register) {
            return ( 
                <div className="app">
                     < Login setUser = { setUser } setRegister={setRegister} />
                </div>
            )
            }
            else {
                return (<div className="app"><Register setUser={setUser} setRegister={setRegister} /></div>)
            }
    } else {
        return (
            <div className="app">
                <User_app user={userConnected}/>
                {/*<Router>
                    <div className="app-content">
                        <Sidebar user={userConnected} />
                        <Routes>
                            <Route path="/fff" component={User_app} />
                        </Routes>
                    </div>
                </Router>*/}
            </div>
        );
    }
}

export default App;