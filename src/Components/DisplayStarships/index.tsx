import React, { useEffect, useState } from "react";
import axios from "axios";
// style Components
import DisplayStarship from "../DisplayStarship";
import NeumorphicLoader from "./../NeumorphicLoader";
import { GridContainer, CardContainer } from "./style";

type Starship = {
	name: string;
	starship_class: string;
	crew: string;
	created: string;
	pilots: string[];
};

const DisplayStarships: React.FC = () => {
	const [starships, setStarships] = useState<Starship[]>([]);
	const [isLoading, setLoading] = useState<boolean>(true);
	useEffect(() => {
		fetchStarships();
	}, []);

	const fetchStarships = async () => {
		try {
			const {
				data: { results },
			} = await axios.get("https://swapi.dev/api/starships/");
			setStarships(results);
			setLoading(false);
		} catch (error) {
			console.error("Error fetching starships:", error);
		}
	};

	return (
		<CardContainer>
			{isLoading ? (
				<NeumorphicLoader />
			) : (
				<GridContainer>
					{starships.map((starship, index) => (
						<DisplayStarship starship={starship} key={index} />
					))}
				</GridContainer>
			)}
		</CardContainer>
	);
};
export default DisplayStarships;
