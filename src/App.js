import { useState } from 'react';
import './App.css';
import User_app from './User_app';
import Login from './Login';
import Register from './Register';

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
                return (<Register setUser={setUser} setRegister={setRegister} />)
            }
        } else {
            return (
                <div className="app">
                    < User_app user = { userConnected }/>
                </div>
                );
            }
        }

export default App;