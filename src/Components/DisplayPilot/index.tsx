import { useState, useEffect } from "react";
import axios from "axios";
// Styled Components
import Spinner from "./../Spinner/";

type Pilot = {
	name: string;
	hight: number;
};

interface DisplayPilotsProps {
	link: string;
}

const DisplayPilot = (props: DisplayPilotsProps) => {
	const { link } = props;
	const [pilot, setPilot] = useState<Pilot | null>(null);
	const [isLoading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		fetchPilot();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const fetchPilot = async () => {
		try {
			const { data } = await axios.get(link);
			setPilot(data);
			setLoading(false);
		} catch (error) {
			console.error("Error fetching starships:", error);
		}
	};

	return (
		<div className='pilot-name'>
			{isLoading ? (
				<Spinner />
			) : (
				<div>
					<p>{pilot ? pilot?.name : null}</p>
				</div>
			)}
		</div>
	);
};
export default DisplayPilot;
