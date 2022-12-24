import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Doc1 from './Doc1';
import Doc2 from './Doc2';
import Doc3 from './Doc3';
function App() {
	return (
		<div className="App">
			<Routes>
        <Route path='/' element={<Home />} />
        <Route path='/document1' element={<Doc1 />} />
		<Route path='/document2' element={<Doc2 />} />
		<Route path='/document3' element={<Doc3 />} />
      </Routes>
			</div>
	);
}

export default App;