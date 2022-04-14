import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import "./assets/css/index.css";
import { UsersProvider } from "context/usersContext";
import { SocketProvider } from "context/socketContext";

ReactDOM.render(
	<React.StrictMode>
		<SocketProvider>
			<UsersProvider>
				<App />
			</UsersProvider>
		</SocketProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

