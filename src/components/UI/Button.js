import classes from "./Button.module.css";

const Button = props => {
	const allClasses = `${classes.btnDefault} ${props.className}`;
	return (
		<button className={allClasses} onClick={props.onClick}>
			{props.children}
		</button>
	);
};

export default Button;
