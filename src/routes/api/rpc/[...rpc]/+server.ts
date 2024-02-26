import { appRouter } from '$lib/trcp/router';
import type { RequestHandler } from '@sveltejs/kit';

import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

const requestHandler: RequestHandler = async (event) => {
	return fetchRequestHandler({
		req: event.request,
		router: appRouter,
		endpoint: '/api/rpc',
		createContext: () => ({
			config: {
				foo: true
			},
			secrets: {
				bar: false
			}
		})
	});
};

export const GET = requestHandler;
export const POST = requestHandler;
