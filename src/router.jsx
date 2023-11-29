import { Route, Routes } from "react-router-dom"
import React from "react";
import Home from "./pages/Home";
import EntradaSaida from "./pages/EntradaSaida";
import CadastraKit from "./pages/CadastraKit";
import CadastraPeca from "./pages/CadastraPeca";
import Cadeira from "./pages/CadastraCadeira";
import AdicionarCadeira from "./pages/AdicionarCadeira";

export default function Router() {
	return (
		<Routes>
			<Route exact path="/" element={<Home/>} />
			<Route exact path="/entradasaida" element={<EntradaSaida/>} />
			<Route exact path="/kit" element={<CadastraKit/>} />
			<Route exact path="/pecas" element={<CadastraPeca/>} />
			<Route exact path="/cadeira" element={<Cadeira/>} />
			<Route exact path="/cadeira/adicionar" element={<AdicionarCadeira/>} />

		</Routes>
	);
}
