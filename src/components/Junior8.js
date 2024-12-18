import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

function Junior8 () {
	const tabel = [
		['3', 'Z', '9', 'T', 'W', 'I'],
		['R', '7', 'E', '0', 'X', 'J'],
		['U', 'N', 'L', 'B', 'S', 'D'],
		['6', 'V', 'K', '8', 'G', 'O'],
		['1', 'A', '5', 'P', '4', 'H'],
		['F', 'Y', 'C', 'Q', 'M', '2']
	];

	const rotor1InOut = [
		[0, 4, 1, 2, 3, 5],
		[0, 1, 5, 2, 3, 4],
		[5, 1, 2, 0, 3, 4],
		[5, 0, 2, 3, 1, 4],
		[5, 0, 1, 3, 4, 2],
		[3, 0, 1, 2, 4, 5]
	];

	const rotor1OutIn = [
		[0, 2, 3, 4, 1, 5],
		[0, 1, 3, 4, 5, 2],
		[3, 1, 2, 4, 5, 0],
		[1, 4, 2, 3, 5, 0],
		[1, 2, 5, 3, 4, 0],
		[1, 2, 3, 0, 4, 5]
	];

	const rotor2InOut = [
		[0, 4, 1, 5, 3, 2],
		[3, 1, 5, 2, 0, 4],
		[5, 4, 2, 0, 3, 1],
		[2, 0, 5, 3, 1, 4],
		[5, 3, 1, 0, 4, 2],
		[3, 0, 4, 2, 1, 5]
	];

	const rotor2OutIn = [
		[0, 2, 5, 4, 1, 3],
		[4, 1, 3, 0, 5, 2],
		[3, 5, 2, 4, 1, 0],
		[1, 4, 0, 3, 5, 2],
		[3, 2, 5, 1, 4, 0],
		[1, 4, 3, 0, 2, 5]
	];

	const reflector = [5, 3, 4, 1, 2, 0];

	let rotor1Index = 4;
	let rotor2Index = 1;

	const cipherText = 'DITISEENKERSTWENS';

	const findCoordinates = (character) => {
		for (let row = 0; row < tabel.length; row++)
		{
			for (let col = 0; col < tabel[row].length; col++)
			{
				if (tabel[row][col].indexOf(character) > -1)
				{
					return [row, col];
				}
			}
		}
	};

	const decryptCharacter = (character) => {

	};

	const encryptCharacter = (character) => {
		const coordinates = findCoordinates(character);
		let encryptedY = coordinates[0];
		let encryptedX = coordinates[1];

		encryptedY = rotateNumber(encryptedY, 'encrypt');
		encryptedX = rotateNumber(encryptedX, 'encrypt');

		return tabel[encryptedY][encryptedX];
	};

	const encryptString = (string, r1, r2) => {
		let newString = '';
		rotor1Index = r1;
		rotor2Index = r2;

		for (let i = 0; i < string.length; i++)
		{
			newString += encryptCharacter(string.charAt(i));
		}

		return newString;
	};

	const rotateNumber = (number, direction) =>
	{
		if (direction === 'encrypt')
		{
			number = rotor1InOut[rotor1Index][number];
			number = rotor2InOut[rotor2Index][number];
			number = reflector[number];
			number = rotor2OutIn[rotor2Index][number];
			number = rotor1OutIn[rotor1Index][number];
		}
		if (direction === 'decrypt')
		{

		}

		turnRotors(direction);

		return number;
	}

	const tryAllRotations = (cipherText) => {
		const output = [];

		for (let r1 = 0; r1 <= 5; r1++)
		{
			for (let r2 = 0; r2 <= 5; r2++)
			{
				rotor1Index = r1;
				rotor2Index = r2;

				output.push([cipherText, r1, r2, encryptString(cipherText, r1, r2)]);
			}
		}

		return output;
	};

	const turnRotors = (direction) => {
		if (direction === 'encrypt')
		{
			rotor1Index++;

			if (rotor1Index === 6)
			{
				rotor1Index = 0;
				rotor2Index++;
			}

			if (rotor2Index === 6)
			{
				rotor2Index = 0;
			}
		}
		if (direction === 'decrypt')
		{
			rotor1Index--;

			if (rotor1Index === -1)
			{
				rotor1Index = 5;
				rotor2Index--;
			}

			if (rotor2Index === -1)
			{
				rotor2Index = 5;
			}
		}
	};
	

	return (
		<Container>
			<Row>
				<Col>
					<Table>
						<thead>
							<tr>
								<th>Invoer</th>
								<th>Rotor 1 start</th>
								<th>Rotor 2 start</th>
								<th>Uitvoer</th>
							</tr>
						</thead>
						<tbody>
							{
								tryAllRotations(cipherText).map((outputRow, index) => (
									<tr key={index}>
										<td>{outputRow[0]}</td>
										<td>{outputRow[1]}</td>
										<td>{outputRow[2]}</td>
										<td>{outputRow[3]}</td>
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

export default Junior8;