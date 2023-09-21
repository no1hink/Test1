import React from 'react';
import SelectWithAutocomplete from './Select';

function App() {
	const handleSelect = option => {
		console.log(`Выбрана опция: ${option.name}`);
	};

	return (
		<div className="App">
			<h1>SelectWithAutocomplete</h1>
			<SelectWithAutocomplete onSelect={handleSelect} />
		</div>
	);
}

export default App;
