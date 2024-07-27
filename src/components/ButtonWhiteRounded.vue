<template>
	<button
		v-if="variant === 'filled'"
		class="py-3 px-7 bg-white border-white border-[1px] rounded-full transition-colors hover:text-white hover:bg-black"
		@click="onClick"
	>
		{{ name }}
	</button>

	<button
		v-else="variant === 'outlined'"
		class="py-3 px-7 text-white border-white border-[1px] rounded-full transition-colors hover:bg-white hover:text-black"
		@click="onClick"
	>
		{{ name }}
	</button>
</template>

<script lang="ts">
	import { PropType } from 'vue';

	export default {
		name: 'ButtonWhiteRounded',
		props: {
			name: {
				type: String,
				required: true,
				validator(value: string) {
					return value.length > 0;
				},
			},
			variant: {
				type: String,
				default: 'filled',
				validator(value: string) {
					const existingVariants = ['filled', 'outlined'];

					return existingVariants.includes(value);
				},
			},
			onClick: {
				type: Function as PropType<(event: MouseEvent) => void>,
				required: true,
			},
		},
	};
</script>
