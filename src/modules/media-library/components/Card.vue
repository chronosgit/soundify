<template>
	<div class="px-5 py-4 space-y-4 bg-[#1f1f1f] rounded-md shadow-lg">
		<h3 class="text-md font-bold">{{ heading }}</h3>

		<p class="text-sm">{{ descr }}</p>

		<button
			class="px-4 py-1 text-black text-sm font-semibold bg-white rounded-full transition-transform hover:scale-105"
			@click="onClick"
		>
			{{ buttonName }}
		</button>
	</div>
</template>

<script lang="ts">
	import { defineComponent, PropType } from 'vue';

	export default defineComponent({
		name: 'MediaLibrary_Card',
		props: {
			heading: {
				type: String,
				required: true,
				validator(value: string) {
					return value.length > 0;
				},
			},
			descr: {
				type: String,
				required: true,
			},
			buttonName: {
				type: String,
				required: true,
			},
			onClick: {
				type: Function as PropType<() => void>,
				required: true,
			},
		},
	});
</script>
