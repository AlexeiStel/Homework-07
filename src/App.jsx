import {Route, Routes, NavLink } from 'react-router-dom'
import {Home} from './pages/Home';
import {NotFound} from './pages/NotFound';
import CategoryPage from "./pages/CategoryPage";
import DetailPage from "./pages/DetailPage";
import "./App.css";
function App() {

	return (
    <>
		<ul>
			<li>
				<NavLink 
					style={ ({ isActive }) => isActive ? {color: "red"} : {}} 
					to="/" 
					>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink 
					style={ ({ isActive }) => isActive ? {color: "red"} : {}} 
					to="/heroes">Heroes
				</NavLink>
			</li>
			<li>
				<NavLink 
				style={ ({ isActive }) => isActive ? {color: "red"} : {}} 
				to="/locations">
					Locations
				</NavLink>
			</li>
			<li>
				<NavLink 
				style={ ({ isActive }) => isActive ? {color: "red"} : {}} 
				to="/episodes">
					Episodes
				</NavLink>
			</li>
		</ul>
		<Routes>
			<Route path='/' element={ <Home />}/>
			<Route path='/heroes/' element={ <CategoryPage category="Heroes" />}/>
			<Route path='/locations/' element={ <CategoryPage category="Locations" />}/>
			<Route path='/episodes/' element={ <CategoryPage category="Episodes" />}/>
			<Route path="/heroes/:id" element={<DetailPage category="Heroes" />} />
			<Route path="/locations/:id" element={<DetailPage category="Locations" />} />
			<Route path="/episodes/:id" element={<DetailPage category="Episodes" />} />
			<Route path='*' element={ <NotFound />}/>
		</Routes>
		
	</>
  );
}

export default App;
