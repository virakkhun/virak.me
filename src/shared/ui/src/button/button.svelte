<script lang="ts">
	import { cva, type VariantProps } from 'class-variance-authority';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	const button = cva('button', {
		variants: {
			_intent: {
				primary:
					'border border-primary focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-transparent',
				secondary: 'border border-secondary focus:ring-2 focus:ring-secondary focus:ring-offset-2',
				solidPrimary: 'bg-primary focus:ring-2 focus:ring-secondary focus:ring-offset-2',
				solidSecondary: 'bg-secondary focus:ring-2 focus:ring-primary focus:ring-offset-2'
			},
			_size: {
				xs: 'p-1 text-xs',
				sm: 'px-3 py-2 text-sm',
				base: 'px-6 py-3',
				md: 'px-9 py-4'
			},
			_width: {
				fit: 'w-fit',
				full: 'w-full'
			}
		},
		defaultVariants: { _intent: 'primary', _size: 'base', _width: 'fit' },
		compoundVariants: [{ class: 'cursor-pointer' }]
	});

	interface $$Props extends HTMLButtonAttributes, VariantProps<typeof button> {}

	export let _intent: $$Props['_intent'] = 'primary';
	export let _size: $$Props['_size'] = 'base';
	export let _width: $$Props['_width'] = 'fit';
</script>

<button {...$$restProps} on:click class={button({ _intent, _size, _width, class: $$props.class })}>
	<slot />
</button>
