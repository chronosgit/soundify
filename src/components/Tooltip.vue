<!-- Must be inside relative parent to work as expected -->

<template>
	<div
		class="opacity-0 absolute left-1/2 -translate-x-1/2 -top-4 -translate-y-4 px-2 py-1 bg-[#282828] rounded-md shadow-lg transition-all delay-150"
		:class="hoverClass"
	>
		<p class="text-white text-sm">
			{{ message }}
		</p>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'Tooltip',
		props: {
			message: {
				type: String,
				required: true,
				validator(value: string) {
					return typeof value === 'string' && value.length > 0;
				},
			},
			hoverClass: {
				type: String,
				required: true,
			},
		},
	});
</script>
