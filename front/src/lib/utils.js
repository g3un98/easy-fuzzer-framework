export async function readData(asyncIterator) {
	const data = [];

	while (true) {
		const { value, done } = await asyncIterator.read();

		if (done) break;

		data.push(...value);
	}

	return data;
}
