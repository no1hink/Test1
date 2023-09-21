import React, { useState, useEffect } from 'react';
import data from './data.json';

function SelectWithAutocomplete({ onSelect }) {
	const [inputValue, setInputValue] = useState('');
	const [filteredOptions, setFilteredOptions] = useState([]);

	useEffect(() => {
		const filtered = data.filter(option =>
			option.name.toLowerCase().includes(inputValue.toLowerCase())
		);
		setFilteredOptions(filtered);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inputValue, data]);

	const handleInputChange = event => {
		setInputValue(event.target.value);
	};

	const handleOptionSelect = option => {
		setInputValue(option.name);
		onSelect(option);
	};

	return (
		<div>
			<input
				type="text"
				value={inputValue}
				onChange={handleInputChange}
				placeholder="Введите текст"
			/>
			<ul>
				{filteredOptions.map(option => (
					<li key={option.name} onClick={() => handleOptionSelect(option)}>
						{option.name}
					</li>
				))}
			</ul>
		</div>
	);
}

export default SelectWithAutocomplete;