<script lang="ts">
	import { cva, type VariantProps } from 'class-variance-authority';
	import type { HTMLInputAttributes } from 'svelte/elements';

	const input = cva('input', {
		variants: {
			_intent: {
				primary:
					'border border-primary focus:outline focus:outline-secondary focus:outline-offset-2',
				secondary: 'border secondary focus:outline focus:outline-primary focus:outline-offset-2'
			},
			_size: {
				sm: 'px-1 py-2',
				base: 'px-2 py-3',
				md: 'px-3 py-4'
			},
			_width: {
				fit: 'w-fit',
				full: 'w-full'
			}
		},
		defaultVariants: { _intent: 'primary', _size: 'base', _width: 'full' },
		compoundVariants: [{ class: 'placeholder:text-white/50 bg-white text-white' }]
	});

	interface $$Props extends HTMLInputAttributes, VariantProps<typeof input> {}

	export let _intent: $$Props['_intent'] = 'primary';
	export let _size: $$Props['_size'] = 'base';
	export let _width: $$Props['_width'] = 'full';
	export let error = '';
	export let value: string | number | string[] | null | undefined = '';
</script>

<input
	{...$$props}
	on:input
	bind:value
	class={input({ _intent, _size, _width, class: $$props.class })}
/>
{#if error}
	<span class="text-base mt-1 text-start">{error}</span>
{/if}
