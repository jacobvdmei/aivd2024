import {useState} from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

function Opgave8() {
	// const words = require('an-array-of-english-words');
	const vowels = ['A', 'E', 'I', 'O', 'U'];
	const consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];

	const patterns = [
		'AIEO AIEO AIEO IAO',
		'A A A I EE A A A I EE A A U',
		'A A A I EE',
		'OEE UI O E AE A OI EE AE',
		'O I I O I I OU EE EE',
		'O OI I OA AY IE I'
	];

	const patternsNoSpaces = [
		'AIEOAIEOAIEOIAO',
		'AAAIEEAAAIEEAAU',
		'OEEUIOEAEAOIEEAE',
		'OIIOIIOUEEEE',
		'OOIIOAAYIEI'
	];

	const [theText, setTheText] = useState('');

	const findPatterns = (inputSongText) => {
		const foundPatterns = [];

		for (let i = 0; i < patterns.length; i++)
		{
			if (inputSongText.indexOf(patterns[i]) > -1)
			{
				foundPatterns.push(patterns[i]);
			}
		}

		return foundPatterns;
	};

	const findPatternsNoSpaces = (inputSongText) => {
		const textNoSpaces = inputSongText.replace(/\s+/g, '');
		const foundPatterns = [];

		for (let i = 0; i < patternsNoSpaces.length; i++)
		{
			if (textNoSpaces.indexOf(patternsNoSpaces[i]) > -1)
			{
				foundPatterns.push(patternsNoSpaces[i]);
			}
		}

		return foundPatterns;
	};

	const inputText = (input) => {
		const noEnters = input.replace(/\n/g, ' ');
		const uppercase = noEnters.toUpperCase();
		const removedCons = uppercase.replace(/[^ aeiouAEIOU]/g, '');
		setTheText(removedCons);
	};

	return (
		<Container>
			<Row>
				<Col>
					<br/>
					<h5>Gevonden patronen:</h5>
					<ul>{
						findPatterns(theText).map((pattern, index) => (
							<li key={index}>{pattern}</li>
						))
					}</ul>
				</Col>
			</Row>
			<Row>
				<Col>
					<h5>Gevonden patronen, witruimte verwijderd:</h5>
					<ul>{
						findPatternsNoSpaces(theText).map((pattern, index) => (
							<li key={index}>{pattern}</li>
						))
					}</ul>
				</Col>
			</Row>
			<Row>
				<Col>
					<hr/>
					<h5>Songtekst plakken:</h5>
					<Form.Control as="textarea" rows={15} onChange={(e) => inputText(e.target.value)} onPaste={(e) => inputText(e.target.value)} />
				</Col>
			</Row>
		</Container>
	);
}

export default Opgave8;