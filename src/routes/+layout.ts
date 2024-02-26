import { createTRPCSvelte } from '@bevm0/trpc-svelte-query';
import { QueryClient } from '@tanstack/svelte-query';
import { httpBatchLink } from '@trpc/client';
import superjson from 'superjson';

import type { LayoutLoad } from './$types';
import type { AppRouter } from '$lib/trcp/router';

export const load: LayoutLoad = async (event) => {
	const queryClient = new QueryClient();
	const trpc = createTRPCSvelte<AppRouter>(
		{
			transformer: superjson,
			links: [
				httpBatchLink({
					url: '/api/rpc',
					fetch: event.fetch
				})
			]
		},
		{ svelteQueryContext: queryClient }
	);

	return { trpc };
};
