import eye from '../assets/terminator-eye.png';
import terminator from '../assets/pixel-terminator-1.png';
import React from 'react';

type MovingEyesProps = {
	angleDegree: number
	reference: any
}

const MovingEyes: React.FC<MovingEyesProps> = (props): JSX.Element => {
	return (
		<div className="grid relative place-items-center w-min">
			<img
				ref={props.reference}
				id="anchor"
				style={{
					filter: `hue-rotate(${props.angleDegree}deg)`,
					maxWidth: 'revert'
				}}
				src={terminator}
				className="w-[23rem] h-[23rem] md:w-[35rem] md:h-[35rem] block"
				alt="terminator"
			/>
			<img
				className="absolute w-9 h-9 top-[125px] right-[207px] md:w-12 md:h-12 md:top-[193px] md:right-[320px] block rounded-full"
				style={{
					transform: `rotate(${90 + props.angleDegree}deg)`
				}}
				src={eye}
				alt="eye1"
			/>
			<img
				className="absolute w-9 h-9 top-[125px] right-[123px] md:w-12 md:h-12 md:top-[193px] md:right-[194px] block rounded-full"
				style={{
					transform: `rotate(${90 + props.angleDegree}deg)`
				}}
				src={eye}
				alt="eye2"
			/>
		</div>
	);
};

export default MovingEyes;
