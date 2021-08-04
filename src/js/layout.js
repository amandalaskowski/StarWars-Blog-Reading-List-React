import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { PeopleList } from "./views/peopleList";
import { PeoplePage } from "./views/peoplePage";
import { PlanetsList } from "./views/planetsList";
import { PlanetsPage } from "./views/planetsPage";
import { VehiclesList } from "./views/vehiclesList";
import { VehiclesPage } from "./views/vehiclesPage";

// import { Navbar } from "./component/navbar";
// import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/people">
							<PeopleList />
						</Route>
						<Route exact path="/people/:id">
							<PeoplePage />
						</Route>
						<Route exact path="/vehicles">
							<VehiclesList />
						</Route>
						<Route exact path="/vehicles/:id">
							<VehiclesPage />
						</Route>
						<Route exact path="/planets">
							<PlanetsList />
						</Route>
						<Route exact path="/planets/:id">
							<PlanetsPage />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);