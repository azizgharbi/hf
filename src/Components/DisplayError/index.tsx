interface DisplayErrorProps {
	text: string;
}

const DisplayError = (props: DisplayErrorProps) => {
	const { text } = props;
	return <div className='error-text'>{text}</div>;
};
export default DisplayError;
