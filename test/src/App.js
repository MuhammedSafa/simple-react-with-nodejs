import React from "react";
import axios from 'axios';
import logo from "./logo.svg";
import "./App.css";

function App() {
	const [data, setData] = React.useState(null);
	const [name, setName] = React.useState("");
	const [receivedServerName, setreceivedServerName] = React.useState("");

	function OnHandle(event) {
		axios.get("/api")
			.then(res => {
				const persons = res.data;
				setData(persons.message);
			});
	}

	function handleChange(event) {
		setName(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();

		const user = { name: name };
		axios.post("/post", user)
			.then(res => {
				console.log(res);
				console.log(res.data.message);
				setreceivedServerName(res.data.message);
			})

	}


	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p onClick={OnHandle} >{!data ? "Loading... (Click Here)" : data}</p>

				<p>{!receivedServerName ? "" : receivedServerName}</p>

				<form className="form" onSubmit={handleSubmit}>
					<input name="name" placeholder="Name?" onChange={handleChange}></input>
					<button type="submit" >Get My Name</button>
				</form>
			</header>
		</div>
	);
}

export default App;
