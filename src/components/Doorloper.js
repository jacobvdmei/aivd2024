import {useState} from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Doorloper() {
	const initialHorizontals = [
		{id: 1, desc: 'Dikke vloeistof', str: 'stroop', is_certain: true},
		{id: 2, desc: 'Diwaterstofoxide', str: 'water', is_certain: true},
		{id: 3, desc: 'Meester in de muziek', str: 'maestro', is_certain: true},
		{id: 4, desc: 'Speeksel', str: 'spuug', is_certain: true},
		{id: 5, desc: 'Middenrif', str: 'diafragma', is_certain: true},
		{id: 6, desc: 'Afrikaanse hoofdstad', str: '*******', is_certain: true},
		{id: 7, desc: 'Griekse letter', str: 'kappa', is_certain: true},
		{id: 8, desc: 'Stad in Noord-Brabant', str: '...............', is_certain: false},
		{id: 9, desc: 'Haarkrul', str: '....', is_certain: false},
		{id: 10, desc: 'Beknopt herhalen', str: '....', is_certain: false},
		{id: 11, desc: 'Jongensnaam', str: '....', is_certain: false},
		{id: 12, desc: 'Kookgerei', str: '....', is_certain: false},
		{id: 13, desc: 'Halteplaats', str: 'abri', is_certain: false},
		{id: 14, desc: 'Grote variant van lego', str: 'duplo', is_certain: false},
		{id: 15, desc: 'De zachtste veren van een vogel', str: 'dons', is_certain: false},
		{id: 16, desc: 'Gehoorloos', str: 'doof', is_certain: false},
		{id: 17, desc: 'Arcadespel', str: 'pong', is_certain: false},
		{id: 18, desc: 'Waarnemingsinstrument', str: '....', is_certain: false},
		{id: 19, desc: 'Godsdienstige handeling', str: 'gebed', is_certain: false},
		{id: 20, desc: 'Aansteller', str: '....', is_certain: false},
		{id: 21, desc: 'Chinese vermicelli', str: 'mie', is_certain: false},
		{id: 22, desc: 'Greppel', str: '...', is_certain: false},
		{id: 23, desc: 'De allereerste opera ooit gecomponeerd', str: 'dafne', is_certain: false},
		{id: 24, desc: 'Hit van The Kinks', str: 'lola', is_certain: false},
		{id: 25, desc: 'Noodkreet', str: 'sos', is_certain: false},
		{id: 26, desc: 'Klankgeluid', str: '....', is_certain: false},
		{id: 27, desc: 'Wapenstrijd', str: 'oorlog', is_certain: false},
		{id: 28, desc: 'Drug', str: '....', is_certain: false},
		{id: 29, desc: 'Windstil', str: 'luw', is_certain: false},
		{id: 30, desc: 'Kloosterzuster', str: 'non', is_certain: false},
		{id: 31, desc: 'Franstalig deel van Canada', str: 'quebec', is_certain: false},
		{id: 32, desc: 'Bijbelse profeet', str: '....', is_certain: false},
		{id: 33, desc: 'Bloemenoptocht', str: 'corso', is_certain: false},
		{id: 34, desc: 'Britse zangeres', str: '....', is_certain: false},
		{id: 35, desc: 'Moed', str: 'lef', is_certain: false},
		{id: 36, desc: 'Rund', str: '....', is_certain: false},
		{id: 37, desc: 'Not yes', str: 'no', is_certain: false},
		{id: 38, desc: 'Telwoord', str: '....', is_certain: false},
		{id: 39, desc: 'Meester (afk)', str: 'mr', is_certain: false},
		{id: 40, desc: 'Japanse karper', str: 'koi', is_certain: false},
		{id: 41, desc: 'Bundel takken', str: 'roe', is_certain: false},
		{id: 42, desc: 'Geladen deeltje', str: 'ion', is_certain: false},
		{id: 43, desc: 'Gemeente in Lombardije', str: '....', is_certain: false},
		{id: 44, desc: 'Hoogvlakte', str: '....', is_certain: false},
		{id: 45, desc: 'De jongere', str: 'junior', is_certain: false},
		{id: 46, desc: 'In je eentje', str: 'solo', is_certain: false},
		{id: 47, desc: 'Oosterse filosofie', str: 'qi', is_certain: true},
		{id: 48, desc: 'Hafnium', str: 'hf', is_certain: true},
		{id: 49, desc: 'Nonsens', str: 'onzin', is_certain: true},
		{id: 50, desc: 'Zink', str: 'zn', is_certain: true},
		{id: 51, desc: 'Moeder van Wilhelmina', str: 'emma', is_certain: true},
		{id: 52, desc: 'Strategisch bordspel', str: 'risk', is_certain: true},
		{id: 53, desc: 'Op dit moment', str: 'nou', is_certain: true},
		{id: 54, desc: 'Peruviaanse rijst', str: 'quinoa', is_certain: true},
		{id: 55, desc: 'Niet nee', str: 'ja', is_certain: false},
		{id: 56, desc: 'Het antwoord op deze opgave', str: '........', is_certain: false},
		{id: 57, desc: 'Bordspel met letters', str: 'scrabble', is_certain: true},
		{id: 58, desc: 'Judograad', str: 'dan', is_certain: false},
		{id: 59, desc: 'Liberiaanse Dollar (afk)', str: 'lrd', is_certain: false},
		{id: 60, desc: 'Tweevoudig', str: 'duaal', is_certain: false},
		{id: 61, desc: 'Japanse judoleraar', str: 'sensei', is_certain: false},
		{id: 62, desc: 'Inktvis (Japans)', str: '....', is_certain: false},
		{id: 63, desc: 'Smaakversterker', str: '....', is_certain: false},
		{id: 64, desc: 'Deel van het oog', str: '....', is_certain: false},
		{id: 65, desc: 'Meisjesnaam', str: '....', is_certain: false},
		{id: 66, desc: 'Verbindingsprotocol', str: '....', is_certain: false},
		{id: 67, desc: 'Heeft de waarde 0 of 1', str: 'bit', is_certain: false},
		{id: 68, desc: 'Nummer (afk)', str: 'nr', is_certain: false},
		{id: 69, desc: 'Isolatieschuim', str: 'pur', is_certain: false},
		{id: 70, desc: 'Etter', str: 'pus', is_certain: false},
		{id: 71, desc: 'Paling', str: 'aal', is_certain: false},
		{id: 72, desc: 'Nomen nescio', str: 'nn', is_certain: false},
		{id: 73, desc: 'Eenheid van lichtsterkte', str: 'lumen', is_certain: false},
		{id: 74, desc: 'Album van Status Quo', str: 'quo', is_certain: false},
		{id: 75, desc: 'Italiaanse groet', str: '....', is_certain: false},
		{id: 76, desc: 'Stad in Overijssel', str: '....', is_certain: false},
		{id: 77, desc: 'Diskjockey', str: 'dj', is_certain: false},
		{id: 78, desc: 'Waardering onroerende zaken', str: 'woz', is_certain: false},
		{id: 79, desc: 'Filmprijs', str: 'oscar', is_certain: false},
		{id: 80, desc: 'Niet jong', str: 'oud', is_certain: false},
		{id: 81, desc: 'Internationaal Olympisch Comité', str: 'ioc', is_certain: false},
		{id: 82, desc: 'Zoon van Wodan', str: '....', is_certain: false},
		{id: 83, desc: 'Fulltime equivalent', str: 'fte', is_certain: false},
		{id: 84, desc: 'Halm', str: '....', is_certain: false},
		{id: 85, desc: 'SI-voorvoegsel', str: '....', is_certain: false},
		{id: 86, desc: 'Verdorven', str: '....', is_certain: false},
		{id: 87, desc: 'Internettopleveldomeinnaam van een Europees land', str: '..', is_certain: false},
		{id: 88, desc: 'Onder (lat)', str: 'sub', is_certain: false},
		{id: 89, desc: 'Amerikaanse staat', str: '....', is_certain: false},
		{id: 90, desc: 'Automerk', str: '....', is_certain: false},
		{id: 91, desc: 'Oud (en)', str: 'old', is_certain: false},
		{id: 92, desc: 'Piepschuim', str: '....', is_certain: false},
		{id: 93, desc: 'Europese hoofdstad', str: '....', is_certain: false},
		{id: 94, desc: 'Blind zoogdier', str: 'mol', is_certain: false},
		{id: 95, desc: 'Westnoordwest', str: 'wnw', is_certain: false},
		{id: 96, desc: 'Tennisterm', str: '....', is_certain: false},
		{id: 97, desc: 'Lichtkrans', str: '....', is_certain: false},
		{id: 98, desc: 'Augustus (afk)', str: 'aug', is_certain: false},
		{id: 99, desc: 'Land in Afrika', str: '....', is_certain: false},
		{id: 100, desc: 'Aas', str: '....', is_certain: false},
		{id: 101, desc: 'Vlinderlarve', str: 'rups', is_certain: false},
		{id: 102, desc: 'Ezelsgeluid', str: 'ia', is_certain: false},
		{id: 103, desc: 'Mangaan', str: 'mn', is_certain: false},
		{id: 104, desc: 'Muzikaal teken', str: '....', is_certain: false},
		{id: 105, desc: 'Rivier in Luxemburg, België en Duitsland', str: '....', is_certain: false},
		{id: 106, desc: 'Wordt uitgedrukt in Joule', str: 'energie', is_certain: false},
		{id: 107, desc: 'Proef', str: '........', is_certain: false},
		{id: 108, desc: 'Kikker', str: 'pad', is_certain: true}
	];

	const inititalVerticals = [
		{id: 1, desc: 'Ondersteuning', str: 'support', is_certain: true},
		{id: 2, desc: 'End-Of-Life', str: 'eol', is_certain: true},
		{id: 3, desc: 'Groene held', str: 'hulk', is_certain: true},
		{id: 4, desc: 'Bloem', str: '****', is_certain: false},
		{id: 5, desc: 'Volkomen intact', str: 'puntgaaf', is_certain: true},
		{id: 6, desc: 'Amerikaanse maffia', str: 'lcn', is_certain: true},
		{id: 7, desc: 'Meisjesnaam', str: 'sofie', is_certain: true},
		{id: 8, desc: 'Gevechtshelikopter', str: '....', is_certain: false},
		{id: 9, desc: 'Nederlandse zanger', str: '....', is_certain: false},
		{id: 10, desc: 'Roos', str: '....', is_certain: false},
		{id: 11, desc: 'Britse munteenheid', str: 'pond', is_certain: false},
		{id: 12, desc: 'Droog, los en stoffig', str: '....', is_certain: false},
		{id: 13, desc: 'Mascotte van Linux', str: 'tux', is_certain: false},
		{id: 14, desc: 'Prachtig', str: '....', is_certain: false},
		{id: 15, desc: 'Stoomschip (afk)', str: 'ss', is_certain: false},
		{id: 16, desc: 'Lummel', str: '....', is_certain: false},
		{id: 17, desc: 'Bergpas', str: '....', is_certain: false},
		{id: 18, desc: 'Meisjesnaam', str: '....', is_certain: false},
		{id: 19, desc: 'Leger (en)', str: 'army', is_certain: false},
		{id: 20, desc: 'Geslachtsziekte', str: '....', is_certain: false},
		{id: 21, desc: 'Geroosterd brood', str: 'toast', is_certain: false},
		{id: 22, desc: 'Niet-gouvernementele organisatie', str: 'ngo', is_certain: false},
		{id: 23, desc: 'Een en ander', str: 'eea', is_certain: false},
		{id: 24, desc: 'Vocale vertolking', str: '....', is_certain: false},
		{id: 25, desc: 'Land in Zuid-Amerika', str: '....', is_certain: false},
		{id: 26, desc: 'Doodlopende steeg', str: '....', is_certain: false},
		{id: 27, desc: 'Fluit', str: '....', is_certain: false},
		{id: 28, desc: 'Lage luchtdichtheid', str: '....', is_certain: false},
		{id: 29, desc: 'Tankstationketen', str: '....', is_certain: false},
		{id: 30, desc: 'Primaire kleur', str: '....', is_certain: false},
		{id: 31, desc: 'Steen', str: '....', is_certain: false},
		{id: 32, desc: 'Pis', str: '....', is_certain: false},
		{id: 33, desc: 'Niet voor', str: '....', is_certain: false},
		{id: 34, desc: 'Rijstgerecht', str: '....', is_certain: false},
		{id: 35, desc: 'Revanche', str: '....', is_certain: false},
		{id: 36, desc: 'Schraal', str: '....', is_certain: false},
		{id: 37, desc: 'Schaapkameel', str: 'lama', is_certain: false},
		{id: 38, desc: 'Zirkonium', str: 'zr', is_certain: false},
		{id: 39, desc: 'Koninklijk hoofdsieraad', str: '....', is_certain: false},
		{id: 40, desc: 'Beetje', str: '....', is_certain: false},
		{id: 41, desc: 'Aarde', str: '....', is_certain: false},
		{id: 42, desc: 'Automatische tekstherkenning', str: '....', is_certain: false},
		{id: 43, desc: 'Frans lidwoord', str: '....', is_certain: false},
		{id: 44, desc: 'Doctor', str: 'dr', is_certain: false},
		{id: 45, desc: 'Amsterdamse voetbalclub', str: 'ajax', is_certain: false},
		{id: 46, desc: 'Geluid vastleggen', str: '....', is_certain: false},
		{id: 47, desc: 'Internettopleveldomeinnaam in het Midden-Oosten', str: '..', is_certain: false},
		{id: 48, desc: 'Waagstukje', str: '....', is_certain: false},
		{id: 49, desc: 'Bos bloemen', str: '....', is_certain: false},
		{id: 50, desc: 'Plaats in Noord-Brabant', str: '....', is_certain: false},
		{id: 51, desc: 'Soort', str: '....', is_certain: false},
		{id: 52, desc: 'Zonder glans', str: '....', is_certain: false},
		{id: 53, desc: '2D Barcode', str: '....', is_certain: false},
		{id: 54, desc: 'Tweeklank', str: '....', is_certain: false},
		{id: 55, desc: 'Mobiele Eenheid', str: 'me', is_certain: false},
		{id: 56, desc: 'Post Scriptum', str: 'ps', is_certain: false},
		{id: 57, desc: 'Chagrijnig', str: '....', is_certain: false},
		{id: 58, desc: 'Mebendazol', str: '....', is_certain: false},
		{id: 59, desc: 'Rijstgerecht', str: '....', is_certain: false},
		{id: 60, desc: 'Nederlands met Gebaren (afk)', str: 'nmg', is_certain: false},
		{id: 61, desc: 'Stad in Oostenrijk', str: '....', is_certain: false},
		{id: 62, desc: 'Trouw blijven aan één partner', str: '....', is_certain: false},
		{id: 63, desc: 'Eén van de hoofdsteden van Zuid-Afrika', str: '....', is_certain: false},
		{id: 64, desc: 'Tweeklank', str: '....', is_certain: false},
		{id: 65, desc: 'Vaartuig', str: '....', is_certain: false},
		{id: 66, desc: 'Werktuigkundig Ingenieur (afk)', str: '....', is_certain: false},
		{id: 67, desc: 'Dat is (afk)', str: 'ie', is_certain: false},
		{id: 68, desc: 'Spaanse exclave in Marokko', str: '....', is_certain: false},
		{id: 69, desc: 'Zintuig', str: '....', is_certain: false},
		{id: 70, desc: 'SI-voorvoegsel', str: '....', is_certain: false},
		{id: 71, desc: 'United States', str: '....', is_certain: false},
		{id: 72, desc: 'U', str: '....', is_certain: false},
		{id: 73, desc: 'Lengtemaat', str: '....', is_certain: false},
		{id: 74, desc: 'Haringachtige vis', str: '....', is_certain: false},
		{id: 75, desc: 'Vader of moeder', str: '....', is_certain: false},
		{id: 76, desc: 'Friese jongensnaam', str: '....', is_certain: false},
		{id: 77, desc: 'Postale afkorting van de Amerikaanse staat elders in deze opgave', str: '....', is_certain: false},
		{id: 78, desc: 'Oude naam van Kolkata', str: 'calcutta', is_certain: false},
		{id: 79, desc: 'Alpenbloem', str: '....', is_certain: false},
		{id: 80, desc: '1/cos', str: 'secans', is_certain: false},
		{id: 81, desc: 'Internettopleveldomeinnaam in het Midden-Oosten', str: '..', is_certain: false},
		{id: 82, desc: 'Aars', str: '....', is_certain: false},
		{id: 83, desc: 'Natuurlijke logaritme', str: 'ln', is_certain: false},
		{id: 84, desc: 'Afgemat', str: '....', is_certain: false},
		{id: 85, desc: 'Plaats in Drenthe', str: '....', is_certain: false},
		{id: 86, desc: 'Cyaankali', str: '....', is_certain: false},
		{id: 87, desc: 'Zuivere', str: '....', is_certain: false},
		{id: 88, desc: 'Cowboy-attribuut', str: 'lasso', is_certain: false},
		{id: 89, desc: 'Italiaanse Rivier', str: '....', is_certain: false},
		{id: 90, desc: 'Vraagwoord', str: '....', is_certain: false},
		{id: 91, desc: 'Internettopleveldomeinnaam van een Europees land', str: '..', is_certain: false},
		{id: 92, desc: 'Nederlands Rundvee Syndicaat', str: 'nrs', is_certain: false},
		{id: 93, desc: 'Chemisch element', str: '....', is_certain: false},
		{id: 94, desc: 'Europese taal', str: '....', is_certain: false},
		{id: 95, desc: 'Onderdeel van een bed', str: '.............', is_certain: false},
		{id: 96, desc: 'Bosland', str: '..........', is_certain: false},
		{id: 97, desc: 'Onder andere', str: 'oa', is_certain: true},
		{id: 98, desc: 'Kippenlegsel', str: 'ei', is_certain: true},
		{id: 99, desc: 'Crossover utility vehicle', str: 'cuv', is_certain: true},
		{id: 100, desc: 'Klimtoestel', str: 'trap', is_certain: true},
		{id: 101, desc: 'Roeispaan', str: '******', is_certain: true},
		{id: 102, desc: 'Hetgeen bewezen moest worden', str: 'qed', is_certain: true},
		{id: 103, desc: 'Kan in meerdere toestanden tegelijk verkeren', str: 'qubit', is_certain: true},
		{id: 104, desc: 'Ingeving', str: 'idee', is_certain: true},
		{id: 105, desc: 'Japanse duikster', str: 'ama', is_certain: true},
		{id: 106, desc: 'Film van Pixar uit 2009', str: 'up', is_certain: true},
		{id: 107, desc: 'Voornaam van bekende Nederlandse cabaratier', str: '****', is_certain: true},
		{id: 108, desc: 'Vliegende schotel', str: 'ufo', is_certain: true},
		{id: 109, desc: 'Intelligentie quotiënt', str: 'iq', is_certain: true},
		{id: 110, desc: 'Tweetallig rekenstelsel', str: 'binair', is_certain: true},
		{id: 111, desc: 'MAND', str: 'mand', is_certain: true}
	];

	const clearStrings = (dirWords) => {
		let newWords = dirWords.slice();

		for (let i = 0; i < dirWords.length; i++)
		{
			if (newWords[i].is_certain === false)
			{
				newWords[i].str = '....';
			}
		}

		return newWords;
	};

	const generateTableContent = (dirWords) => {
		const tableArray = [];
		let rowArray = [];
		let letterCount = 0;

		for (let dirIndex = 0; dirIndex < dirWords.length; dirIndex++)
		{
			for (let charIndex = 0; charIndex < dirWords[dirIndex].str.length; charIndex++)
			{	
				rowArray.push([dirWords[dirIndex].str.charAt(charIndex).toUpperCase(), dirWords[dirIndex].is_certain]);

				if (rowArray.length === 21)
				{
					tableArray.push(rowArray);
					rowArray = [];
				}

				letterCount++
			}
		}

		return tableArray;
	};

	const invoerChange = (direction, id, value) => {
		if (direction === 'hor')
		{
			const newHorizontals = horizontals.slice();

			newHorizontals[id - 1].str = value;
			setHorizontals(newHorizontals);
		}
		if (direction === 'ver')
		{
			const newVerticals = verticals.slice();

			newVerticals[id - 1].str = value;
			setVerticals(newVerticals);
		}
	};

	const letterCount = (dirWords) => {
		let letterCount = 0;

		for (let dirIndex = 0; dirIndex < dirWords.length; dirIndex++)
		{
			for (let charIndex = 0; charIndex < dirWords[dirIndex].str.length; charIndex++)
			{	
				letterCount++
			}
		}

		return letterCount;
	};

	const toggleCertain = (direction, id) => {
		if (direction === 'hor')
		{
			const newHorizontals = horizontals.slice();

			if (newHorizontals[id - 1].is_certain === true)
			{
				newHorizontals[id - 1].is_certain = false;
			}
			else
			{
				newHorizontals[id - 1].is_certain = true;
			}

			setHorizontals(newHorizontals);
		}
		if (direction === 'ver')
		{
			const newVerticals = verticals.slice();

			if (newVerticals[id - 1].is_certain === true)
			{
				newVerticals[id - 1].is_certain = false;
			}
			else
			{
				newVerticals[id - 1].is_certain = true;
			}

			setVerticals(newVerticals);
		}
	};

	const [horizontals, setHorizontals] = useState(initialHorizontals);
	const [verticals, setVerticals] = useState(inititalVerticals);
	// const [horizontals, setHorizontals] = useState(clearStrings(initialHorizontals));
	// const [verticals, setVerticals] = useState(clearStrings(inititalVerticals));

	return (
		<Container>
			<Row>
				<Col lg={6}>
					<Tabs defaultActiveKey="horTab">
						<Tab eventKey="horTab" title={'Horizontaal (' + letterCount(horizontals) + '/441)'}>
							<table className="doorloperTable">
								<tbody>
									{generateTableContent(horizontals).map((row, index) => (
					          			<tr key={index}>{row.map((value, index) => {
					          				if (value[1] === true)
					          				{
						          				return <td key={index} className="certain_cell">{value[0]}</td>
						          			}
						          			return <td key={index}>{value[0]}</td>
					          			})}</tr>
					        		))}
					        	</tbody>
							</table>
						</Tab>
						<Tab eventKey="verTab" title={'Verticaal (' + letterCount(verticals) + '/441)'}>
							<table className="transposedTable">
								<tbody>
									{generateTableContent(verticals).map((row, index) => (
					          			<tr key={index}>{row.map((value, index) => {
					          				if (value[1] === true)
					          				{
						          				return <td key={index} className="certain_cell">{value[0]}</td>
						          			}
						          			return <td key={index}>{value[0]}</td>
					          			})}</tr>
					        		))}
					        	</tbody>
							</table>
						</Tab>
					</Tabs>
				</Col>
				<Col lg={3} className="scrollCol">
					<h2>Horizontaal</h2>
					<hr />
					{horizontals.map((word, index) => (
						<Invoer key={index} word={word} direction="hor" invoerChange={invoerChange} toggleCertain={toggleCertain}/>
					))}
				</Col>
				<Col lg={3} className="scrollCol">
					<h2>Verticaal</h2>
					<hr />
					{verticals.map((word, index) => (
						<Invoer key={index} word={word} direction="ver" invoerChange={invoerChange} toggleCertain={toggleCertain}/>
					))}
				</Col>
			</Row>
		</Container>
	);
}

function Invoer({word, direction, invoerChange, toggleCertain}) {
	return (
		<>
		<Form.Label size="sm">{word.desc}</Form.Label>
		<InputGroup className="mb-3" size="sm">
			<InputGroup.Checkbox checked={word.is_certain} onChange={((e) => toggleCertain(direction, word.id))} />
			<Form.Control size="sm" type="text" placeholder={word.desc} value={word.str} onChange={(e) => invoerChange(direction, word.id, e.target.value)} />
		</InputGroup>
		</>
	);
}

export default Doorloper;