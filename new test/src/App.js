import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "components/Sidebar";
import Chat from "pages/Chat";
import Login from 'Login.js';
import Register from 'Register.js';

const userPrefersDark =
	window.matchMedia &&
	window.matchMedia("(prefers-color-scheme: dark)").matches;

function App() {
	
	useEffect(() => {
		if (userPrefersDark) document.body.classList.add("dark-theme");
	}, []);

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
			<Router>
				<div className="app-content">
					<Sidebar user={userConnected} />
					<Switch>
						<Route path="/chat/:id" component={Chat} />
						<Route component={Home} />
					</Switch>
				</div>
			</Router>
		</div>
                );
            }
}

export default App;
