import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [color, setColor] = useState("red");

	const handleChange = (newColor) => {
		document.querySelector(`#${color}`).classList.remove("selected")
		setColor(newColor)
		document.querySelector(`#${newColor}`).classList.add("selected")
	}

	const handleLightRotation = () => {
		const currentColor = document.querySelector(".selected")?.id
		const isPurpleHidden = document.querySelector(".d-none")?.id !== undefined
		
		if (!isPurpleHidden  && (currentColor == undefined || currentColor == "red")) handleChange("purple")
		else if(!isPurpleHidden && currentColor == "purple") handleChange("green")
		else if (currentColor == undefined || currentColor == "yellow" || currentColor == "purple") handleChange("red")
		else if (currentColor == "red") handleChange("green")
		else handleChange("yellow")
	}

	const handleShowSecretLight = () => {
		document.querySelector("#purple").classList.remove("d-none")
	}

	return (
		<div className="d-flex flex-column justify-content-center align-items-center">
			<div className="traffic-top bg-dark"></div>
			<div className="traffic d-flex flex-column gap-2 bg-dark p-3 rounded">
				<div id="purple" onClick={() => handleChange("purple")} className="light d-none"></div>
				<div id="red" onClick={() => handleChange("red")} className="light bg-danger"></div>
				<div id="yellow" onClick={() => handleChange("yellow")} className="light bg-warning"></div>
				<div id="green" onClick={() => handleChange("green")} className="light bg-success"></div>
			</div>

			<div className="d-flex gap-2 mt-2">
				<button onClick={() => handleLightRotation()} className="btn btn-primary">Alternar luz</button>
				<button onClick={() => handleShowSecretLight()} className="btn btn-secondary">Luz secreta</button>
			</div>
		</div>
	);
};

export default Home;
