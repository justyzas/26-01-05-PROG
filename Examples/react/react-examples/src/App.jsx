import {
	IrasuSarasas,
	VartotojasPagalId,
	VienasVartotojas,
} from "./reusable/ApiComponents";
import { Counter, EffectiveCounter } from "./reusable/Counter";
import { ProductsList } from "./reusable/Products";
import { Spoiler } from "./reusable/Spoiler";
import { StyledButton } from "./reusable/StyledButton";
import { StyledButtonSecond } from "./reusable/StyledButtonSecond";
import { StatefulUserCard, UserCard } from "./reusable/UserCard";

export function App() {
	return (
		<>
			{/* <div>
				<StyledButton tooltip="paspaudus mygtuką nieko neatsitiks">
					Subscribe to newsletter
				</StyledButton>
				<StyledButtonSecond>Subscribe </StyledButtonSecond>
				<StyledButton>to newsletter</StyledButton>
				<StyledButtonSecond>Subscribe newsletter</StyledButtonSecond>
				<StyledButton> newsletter</StyledButton>
			</div>

			<UserCard
				vardas="Antanas Liuciferiauskas"
				pareigos="Head of Sales Department"
				vparaste="xl"
			/>
			<UserCard vardas="Beata Agluonienė" />
			<UserCard pareigos="Vyr Šefas" />

			<ProductsList></ProductsList> */}
			<Counter />
			<hr />
			<Spoiler tekstas="useState priverčia komponentą persipiešti kiekvieną kartą, kai būsena keičiasi!" />
			<Spoiler tekstas="Reactas atvaizduoja turinį per komponentus" />
			<Spoiler tekstas="Kiekvienas komponentas turi savo būseną" />
			<hr />
			<StatefulUserCard
				vardas="Tomas"
				pareigos="Frontend dev"
			/>
			<StatefulUserCard
				vardas="Aistė"
				pareigos="Designer"
			/>

			<EffectiveCounter></EffectiveCounter>

			<VienasVartotojas></VienasVartotojas>

			<IrasuSarasas></IrasuSarasas>

			<VartotojasPagalId></VartotojasPagalId>
		</>
	);
}
