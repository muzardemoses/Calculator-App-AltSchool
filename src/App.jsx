import './App.css'
import React, { useState, useEffect, useRef } from "react";

const useKey = (key, cb) => {
	const callbackRef = useRef(cb);

	useEffect(() => {
		callbackRef.current = cb;
	});

	useEffect(() => {
		const handle = (e) => {
			if (e.code === key) callbackRef.current(e);
		};
		document.addEventListener("keydown", handle);
		return () => document.removeEventListener("keydown", handle);
	}, [key]);
};
export default function App() {
  
  const [number, setNumber] = useState("");

	const [theme, setTheme] = useState(() => {
		//getting stored value

		const saved = localStorage.getItem("theme");
		const initialValue = JSON.parse(saved);
		return initialValue || "first";
	});

	useEffect(() => {
		//storing last used theme
		localStorage.setItem("theme", JSON.stringify(theme));
	}, [theme]);

	const handleDelete = () => {
		let newNumber = "";
		let lengthOfNumber = number.length - 1;

		if (lengthOfNumber < 0) {
			lengthOfNumber = 0;
		} else {
			for (let i = 0; i < lengthOfNumber; i++) {
				newNumber += number[i];
			}
		}

		setNumber(newNumber);
	};

	const parse = (str) => {
		return Function(`'use strict'; return (${str})`)();
	};

	const calcMath = () => {
		let inputStack = number;
		const regExtext = /[a-zA-Z]/g;

		if (
			regExtext.test(inputStack) ||
			inputStack.includes("--") ||
			inputStack.includes("x") ||
			inputStack.includes("÷+") ||
			inputStack.includes("//") ||
			inputStack.includes("..") ||
			inputStack === "--" ||
			inputStack === "+" ||
			inputStack === "*" ||
			inputStack === "/" ||
			inputStack === "-" ||
			inputStack === "."
		) {
			setNumber("Syntax Error");
		} else {
			let result = parse(inputStack);
			setNumber(result);
		}
	};

	const getTheme = () => JSON.parse(localStorage.getItem("theme"));
	// console.log(localStorage.getItem("theme"));

	useKey("Enter", calcMath);
	useKey("NumPadEnter", handleDelete);

	const handleChange = (event) => {
		const result = event.target.value.replace(/[a-zA-Z]/g, "");

		setNumber(result);
	};

	return (
		<div className="App" data-theme={theme}>
			<div className="calc-layout">
				{/* TITLE + SWITCH */}
				<div className="title-theme">
					<div className="calc-title">Calculator</div>
					<div className="theme-switch">
						<div className="themeTitle">theme</div>
						<div className="radioContainer switchContainer">
							<input
								type="radio"
								name="tss"
								id={`firstTheme`}
								value="first"
								defaultChecked={getTheme() === "first"}
								onClick={() => setTheme("first")}
							/>
							<label className="firstTheme" htmlFor={`firstTheme`}>
								1
							</label>
							<input
								type="radio"
								name="tss"
								id={`secondTheme`}
								value="second"
								defaultChecked={getTheme() === "second"}
								onClick={() => setTheme("second")}
							/>
							<label className="secondTheme" htmlFor={`secondTheme`}>
								2
							</label>
							<input
								type="radio"
								name="tss"
								id={`thirdTheme`}
								value="third"
								defaultChecked={getTheme() === "third"}
								onClick={() => setTheme("third")}
							/>
							<label className="thirdTheme" htmlFor={`thirdTheme`}>
								3
							</label>
							<span className="slider"></span>
						</div>
					</div>
				</div>
				{/* CALCULATOR DISPLAY */}
				<div className="calc-display">
					<input
						className="output-layout"
						type="text"
						value={number}
						onChange={(e) => {
							setNumber(e.target.value);
							handleChange(e);
						}}
					/>{" "}
					{/*readOnly */}
				</div>

				{/* CALCULATOR BUTTONS */}
				<div className="buttons-layout">
					<div className="btn-grid">
						<div className="num-btn" onClick={() => setNumber(number + "7")}>
							7
						</div>
						<div className="num-btn" onClick={() => setNumber(number + "8")}>
							8
						</div>
						<div className="num-btn" onClick={() => setNumber(number + "9")}>
							9
						</div>
						<div className="del-btn" onClick={handleDelete}>
							<div onClick={handleDelete}>del</div>
						</div>

						<div className="num-btn" onClick={() => setNumber(number + "4")}>
							4
						</div>
						<div className="num-btn" onClick={() => setNumber(number + "5")}>
							5
						</div>
						<div className="num-btn" onClick={() => setNumber(number + "6")}>
							6
						</div>
						<div className="num-btn" onClick={() => setNumber(number + "+")}>
							+
						</div>

						<div className="num-btn" onClick={() => setNumber(number + "1")}>
							1
						</div>
						<div className="num-btn" onClick={() => setNumber(number + "2")}>
							2
						</div>
						<div className="num-btn" onClick={() => setNumber(number + "3")}>
							3
						</div>
						<div className="num-btn" onClick={() => setNumber(number + "-")}>
							-
						</div>

						<div className="num-btn" onClick={() => setNumber(number + ".")}>
							.
						</div>
						<div className="num-btn" onClick={() => setNumber(number + "0")}>
							0
						</div>
						<div className="num-btn" onClick={() => setNumber(number + "/")}>
							/
						</div>
						<div className="num-btn" onClick={() => setNumber(number + "*")}>
							x
						</div>
					</div>

					<div className="row-btns">
						<button className="reset-btn" onClick={() => setNumber("")}>
							Reset
						</button>
						<button type="submit" className="eq-btn" onClick={calcMath}>
							=
						</button>
					</div>
				</div>
				<div className="author">
					<h5 >
						Assignment by{" "}
						<a href=" https://www.altschoolafrica.com/ " target="_blank" className="author-name">
							AltSchool Africa
						</a>
						. Coded by{" "}
						<a
						className="author-name"
							href=" https://www.linkedin.com/in/muzardemoses/ "
							target="_blank"
						>
							Moses Adebayo
						</a>
						.
					</h5>
				</div>
			</div>
		</div>
	);
}
