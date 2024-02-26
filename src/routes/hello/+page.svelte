<script lang="ts">
	import { browser } from '$app/environment';
	import { trpc } from '$lib/trcp/client';

	const helloQuery = trpc.hello.createQuery(undefined, { enabled: browser });
</script>

{JSON.stringify($helloQuery)}
