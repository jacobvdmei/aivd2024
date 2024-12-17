import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

function Opgave13() {
	const ciphertext = 'RSHFZCNNZAAE';
	const keyLength = 4;

	const getPermutations = (max) => {
		const numbers = Array.from({ length: max }, (_, i) => i + 1);  // Create array [1, 2, ..., max]

		function permute(arr) {
			if (arr.length === 0) return [[]]; // Base case: return empty array as single permutation
			const result = [];
			for (let i = 0; i < arr.length; i++) {
				const currentNum = arr[i];
				const remaining = arr.slice(0, i).concat(arr.slice(i + 1)); // Remove currentNum from the array
				const remainingPermutations = permute(remaining); // Get permutations of the rest of the array
				for (const perm of remainingPermutations) {
					result.push([currentNum, ...perm]); // Prepend currentNum to each permutation
				}
			}
		return result;
		}
	
		return permute(numbers);
	}

	function decryptColumnarTransposition(ciphertext, key) {
	    const numCols = key.length;          // Number of columns is the length of the key
	    const numRows = Math.ceil(ciphertext.length / numCols); // Number of rows

	    const openSpots = numCols * numRows - ciphertext.length;

	    // Step 2: Distribute ciphertext into columns based on the key order
	    let index = 0;
	    const keyOrder = key.map((num, i) => ({ num, index: i })).sort((a, b) => a.num - b.num); // Get column order based on key
	    keyOrder.sort((a, b) => a.index - b.index);

	    let currentIndex = 0;
	    for (let i = 0; i < keyOrder.length; i++)
	    {
	    	if (key.length - keyOrder[i].num < openSpots)
    		{
    			keyOrder[i].letters = [];
    			for (let x = 0; x < (numRows - 1); x++)
    			{
    				keyOrder[i].letters.push(ciphertext.charAt(currentIndex));
    				currentIndex++;
    			}
    		}
    		else
    		{
    			keyOrder[i].letters = [];
    			for (let x = 0; x < numRows; x++)
    			{
    				keyOrder[i].letters.push(ciphertext.charAt(currentIndex));
    				currentIndex++;
    			}
    		}
	    }

	    keyOrder.sort((a, b) => a.num - b.num);

	    currentIndex = 0;
	    let plainText = '';
	    for (let r = 0; r < numRows; r++)
	    {
		    for (let i = 0; i < keyOrder.length; i++)
		    {
		    	if (keyOrder[i].letters.length >= (r + 1))
		    	{
		    		plainText += keyOrder[i].letters[r];
		    	}
		    }
		}

		return plainText;
	}

	const getPlainTexts = (ciphertext, keyLength) => {
		const solutions = [];
		const permutations = getPermutations(keyLength);

		for (let p = 0; p < permutations.length; p++)
		{
			let permutationString = '';

			for (let i = 0; i < keyLength; i++)
			{
				permutationString += permutations[p][i];
			}

			solutions.push({
				plainText: decryptColumnarTransposition(ciphertext, permutations[p]),
				permutationString: permutationString
			});
		}

		console.log(solutions.length);
		return solutions;
	};

	return (
		<Container>
			<Row>
				<Col>
					<Table>
						<thead>
							<tr>
								<th>PlainText</th>
								<th>Permutatie</th>
							</tr>
						</thead>
						<tbody>
							{
								getPlainTexts(ciphertext, keyLength).map((solution, index) => (
									<tr key={index}>
										<td>{solution.plainText}</td>
										<td>{solution.permutationString}</td>
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

export default Opgave13;