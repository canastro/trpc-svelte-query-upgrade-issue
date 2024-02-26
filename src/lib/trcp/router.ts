import { TRPCError, initTRPC } from '@trpc/server';
import superjson from 'superjson';

export type ServerContext = {
	config: {
		foo: boolean;
	};
	secrets: {
		bar: boolean;
	};
};

export const trpc = initTRPC.context<ServerContext>().create({
	transformer: superjson
});

export const appRouter = trpc.router({
	hello: trpc.procedure.query(() => {
		return 'Hello world';
	}),
	fail: trpc.procedure.query(() => {
		throw new TRPCError({ message: 'test', code: 'BAD_REQUEST' });
	})
});

export type AppRouter = typeof appRouter;
