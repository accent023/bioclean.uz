const Dots = ({ count, ...props }) => {
	const pieces = Array(count).fill(null);

	return (
		<div {...props}>
			{pieces.map((piece, index) => (
				<span key={`dot-${index}`} />
			))}
		</div>
	);
};

export default Dots;
