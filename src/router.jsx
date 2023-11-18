import { Route, Routes } from "react-router-dom"
import React from "react";
import Home from "./pages/Home";
import EntradaSaida from "./pages/EntradaSaida";

export default function Router() {
	return (
		<Routes>
			<Route exact path="/" element={<Home/>} />
			<Route exact path="/entradasaida" element={<EntradaSaida/>} />
		</Routes>
	);
}
