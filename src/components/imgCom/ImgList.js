import { useState, useEffect } from "react";
import Button from "../UI/Button";
import ImgItem from "./ImgItem";
import classes from "./ImgList.module.css";

const imgList = [
	{
		id: "m1",
		url: "https://cdn.pixabay.com/photo/2023/06/29/10/33/lion-8096155_1280.png",
		alt: "lew",
	},
	{
		id: "m2",
		url: "https://cdn.pixabay.com/photo/2020/03/10/04/48/animal-4917802_1280.jpg",
		alt: "zebra",
	},
	{
		id: "m3",
		url: "https://cdn.pixabay.com/photo/2019/05/18/19/36/cat-4212402_1280.jpg",
		alt: "cat",
	},
	{
		id: "m4",
		url: "https://cdn.pixabay.com/photo/2019/04/09/13/34/staff-4114490_1280.jpg",
		alt: "dog",
	},
	{
		id: "m5",
		url: "https://cdn.pixabay.com/photo/2019/02/06/11/13/mico-3978907_1280.jpg",
		alt: "monkey",
	},
	{
		id: "m6",
		url: "https://cdn.pixabay.com/photo/2023/07/07/12/44/ruddy-shelduck-8112479_1280.jpg",
		alt: "bird",
	},
];

const ImgList = props => {
	const [displayImg, setDisplayImg] = useState(imgList[0]);

	const changeImgHandler = move => {
		const findIndexImg = imgList.findIndex(item => item.id === displayImg.id);
		let changeNumberImg = null;
		if (move === "left") {
			if (findIndexImg === 0) {
				changeNumberImg = imgList.length - 1;
			} else {
				changeNumberImg = findIndexImg - 1;
			}
		} else {
			if (findIndexImg === imgList.length - 1) {
				changeNumberImg = 0;
			} else {
				changeNumberImg = findIndexImg + 1;
			}
		}

		setDisplayImg(imgList[changeNumberImg]);
	};

	useEffect(() => {
		props.forwardData(imgList);

		if (props.onImg != null) {
			console.log("object");
			setDisplayImg(props.onImg);
		}
	}, [props.forwardData, props.onImg]);

	return (
		<div>
			<ImgItem src={displayImg.url} />
			<Button
				className={classes.left}
				onClick={changeImgHandler.bind(null, "left")}>
				<i className='fa-solid fa-arrow-left'></i>
			</Button>
			<Button
				className={classes.right}
				onClick={changeImgHandler.bind(null, "right")}>
				<i className='fa-solid fa-arrow-right'></i>
			</Button>
		</div>
	);
};

export default ImgList;
