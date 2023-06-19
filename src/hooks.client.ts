import { directus } from './routes/directus';
import { auth } from './routes/store';

await directus.auth
	.refresh()
	.then(() => {
		auth.update((value) => (value = true));
	})
	.catch(() => {});
