import fs from 'fs/promises';
import path from 'path';
import type { PageServerLoad } from './$types';

const samplesPath = 'src/samples';

export const load = (async () => {
	const fileNames = await fs.readdir(samplesPath);
	const fileContents = await Promise.all(
		fileNames.map((file) => fs.readFile(path.join(samplesPath, file), 'utf-8'))
	);

	return { samples: fileContents };
}) satisfies PageServerLoad;
