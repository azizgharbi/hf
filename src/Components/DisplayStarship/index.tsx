// style Components
import NeumorphicCard from "./../NeumorphicCard";
//Components
import DisplayPilot from "../DisplayPilot";
import DisplayError from "../DisplayError";
import CongratsText from "../DisplayCongrats";
// Helper
import { useState } from "react";

type Starship = {
	name: string;
	pilots: string[];
};

interface DisplayStarshipProps {
	starship: Starship;
}

const DisplayStarship = (props: DisplayStarshipProps) => {
	const { starship } = props;
	const [showPilots, setShowPilots] = useState(false);
	return (
		<NeumorphicCard>
			<div className="flip-card">
				<div className="flip-card-inner">
					<div className="flip-card-front">
						<div>
							<p>{starship.name}</p>
						</div>
					</div>
					<div className="flip-card-back">
						{starship.pilots.length > 0 ? (
							<>
								{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
								<div
									className="card-button"
									onClick={() => {
										setShowPilots(!showPilots);
									}}
								>
									Click to show Pilots
								</div>
								{showPilots ? (
									<>
										{starship.pilots.map((link: string, index: number) => {
											// rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
											return <DisplayPilot link={link} key={index} />;
										})}
										<CongratsText text="Congrats" />
									</>
								) : null}
							</>
						) : (
							<DisplayError text="Oups..! No pilots." />
						)}
					</div>
				</div>
			</div>
		</NeumorphicCard>
	);
};
export default DisplayStarship;
