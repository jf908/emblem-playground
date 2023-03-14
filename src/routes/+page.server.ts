import fs from 'fs/promises';
import path from 'path';
import type { PageServerLoad } from './$types';

const samplesPath = 'src/samples';

export const load = (async () => {
	const fileNames = await fs.readdir(samplesPath);

	const template = fs.readFile(path.join(samplesPath, 'template.em'), 'utf-8');

	const fileContents = await Promise.all(
		fileNames
			.filter((file) => file !== 'template.em')
			.map((file) => fs.readFile(path.join(samplesPath, file), 'utf-8'))
	);

	return { template, samples: fileContents };
}) satisfies PageServerLoad;
