import classes from "./ImgItem.module.css";

const ImgItem = props => {
	const imgClass = `${classes.imgDefault} ${props.className}`;
	return <img src={props.src} alt={props.alt} className={imgClass} />;
};

export default ImgItem;
