import React, { useState, useRef } from "react";
import classes from "./App.module.css";

import ImgList from "./components/imgCom/ImgList";

function App() {
	const inputRef = useRef();
	const [arrayImg, setArrayImg] = useState([]);
	const [newImg, setNewImg] = useState(null);

	const changeImageHandler = listImg => {
		if (Array.isArray(listImg)) {
			setArrayImg(listImg);
		}
		const searchedValue = inputRef.current.value;

		const searchedImg = arrayImg.find(item => {
			return item.alt.includes(searchedValue);
		});
		setNewImg(searchedImg);
		console.log(newImg);
	};

	return (
		<div className={classes.container}>
			<label htmlFor='search'>Search: </label>
			<input
				id='search'
				ref={inputRef}
				type='text'
				onChange={changeImageHandler}
			/>
			<ImgList forwardData={changeImageHandler} onImg={newImg} />
		</div>
	);
}

export default App;
