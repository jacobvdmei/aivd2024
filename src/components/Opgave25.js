import {useState} from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

function Opgave25 (){
	const initialCities = [
		{stad: 'AMSTERDAM', bijnaam: 'MOKUM', searched: 'AADEKORSTU'},
		{stad: 'ROTTERDAM', bijnaam: 'POORT VAN EUROPA', searched: 'ADMNOOPPTUV'},
		{stad: 'LEIDEN', bijnaam: 'SLEUTELSTAD', searched: 'AILNSSTTU'},
		{stad: 'ZOETERMEER', bijnaam: 'SWEET LAKE CITY', searched: 'ACEIKLMORRSTWYZ'},
		{stad: 'ANTWERPEN', bijnaam: 'DIAMANTSTAD', searched: 'AADDEEIMNPRSTW'},
		{stad: '', bijnaam: '', searched: 'DDEEEELMNOPST'},
		{stad: '', bijnaam: '', searched: 'AAABCDEGHJLLMMNNORRRTTTTV'}
	];

	const [cities, setCities] = useState(initialCities);

	String.prototype.removeCharAt = function (i) {
	    var tmp = this.split('');
	    tmp.splice(i, 1);
	    return tmp.join('');
	}

	const omzetten = (stad, bijnaam) => {
		const toRemove = findOne(stad, bijnaam);

		if (toRemove === false)
		{
			return (stad.replace(/\s+/g, '') + bijnaam.replace(/\s+/g, '')).split('').sort().join('');
		}

		let nieuweStad = stad.removeCharAt(toRemove[0]);
		let nieuweBijnaam = bijnaam.removeCharAt(toRemove[1]);

		return omzetten(nieuweStad, nieuweBijnaam);
	};

	const findOne = (stad, bijnaam) => {
		for (let a = 0; a < stad.length; a++)
		{
			if (bijnaam.indexOf(stad.charAt(a)) > -1)
			{
				return [a, bijnaam.indexOf(stad.charAt(a))];
			}
		}
		return false;
	};

	const cityChange = (index, value) => {
		const newCities = cities.slice();

		newCities[index].stad = value;

		setCities(newCities);
	};

	const nickChange = (index, value) => {
		const newCities = cities.slice();

		newCities[index].bijnaam = value;

		setCities(newCities);
	};

	return (
		<Container fluid>
			<Row>
				<Col>
					<Table>
						<thead>
							<tr>
								<th>Stad</th>
								<th>Bijnaam</th>
								<th>Sleuteltekst</th>
								<th>Gezochte sleutel</th>
							</tr>
						</thead>
						<tbody>
							{
								cities.map((city, index) => (
									<tr key={index}>
										<td><Form.Control type="text" placeholder={initialCities[index].stad} value={cities[index].stad} onChange={(e) => cityChange(index, e.target.value)} /></td>
										<td><Form.Control type="text" placeholder={initialCities[index].bijnaam} value={cities[index].bijnaam} onChange={(e) => nickChange(index, e.target.value)} /></td>
										<td>{omzetten(cities[index].stad, cities[index].bijnaam)}</td>
										<td>{cities[index].searched}</td>
									</tr>
								))
							}
						</tbody>
					</Table>
				</Col>
			</Row>
		</Container>
	);
}

export default Opgave25;