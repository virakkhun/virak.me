<script lang="ts">
	import { cva, type VariantProps } from 'class-variance-authority';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	const button = cva('button', {
		variants: {
			_intent: {
				primary:
					'border border-orange-500 focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-gray-900',
				secondary:
					'border border-orange-300 focus:ring-2 focus:ring-orange-200 focus:ring-offset-2',
				solidPrimary: 'bg-orange-500 focus:ring-2 focus:ring-orange-400 focus:ring-offset-2',
				solidSecondary: 'bg-orange-300 focus:ring-2 focus:ring-orange-400 focus:ring-offset-2'
			},
			_size: {
				sm: 'px-3 py-2',
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

<button {...$$props} class={button({ _intent, _size, _width, class: $$props.class })}>
	<slot />
</button>
