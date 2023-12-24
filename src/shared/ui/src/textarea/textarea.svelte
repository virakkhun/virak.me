<script lang="ts">
	import { cva, type VariantProps } from 'class-variance-authority';
	import type { HTMLTextareaAttributes } from 'svelte/elements';

	const textarea = cva('textarea', {
		variants: {
			_intent: {
				primary:
					'border border-emerald-500 focus:outline focus:outline-emerald-400 focus:outline-offset-2',
				secondary:
					'border border-emerald-300 focus:outline focus:outline-emerald-300 focus:outline-offset-2',
				danger: 'border border-red-500 focus:outline focus:outline-red-400 focus:outline-offset-2'
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
		compoundVariants: [{ class: 'placeholder:text-white/50' }]
	});

	interface $$Props extends HTMLTextareaAttributes, VariantProps<typeof textarea> {}

	export let _intent: $$Props['_intent'] = 'primary';
	export let _size: $$Props['_size'] = 'base';
	export let _width: $$Props['_width'] = 'full';
	export let error = '';
	export let value: string | number | string[] | null | undefined = '';
</script>

<textarea
	{...$$props}
	on:input
	bind:value
	class={textarea({ _intent: error ? 'danger' : _intent, _size, _width, class: $$props.class })}
/>
{#if error}
	<span class="text-base text-red-500 mt-1 text-start">{error}</span>
{/if}
