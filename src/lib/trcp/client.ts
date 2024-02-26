import { createTRPCSvelte } from '@bevm0/trpc-svelte-query';
import { httpBatchLink } from '@trpc/client';
import superjson from 'superjson';
import type { AppRouter } from './router';


export type TRPCClient = ReturnType<typeof createTRPCSvelte<AppRouter>>;

export const trpc = createTRPCSvelte<AppRouter>({
	transformer: superjson,
	links: [
		httpBatchLink({
			url: '/api/rpc'
		})
	]
});
