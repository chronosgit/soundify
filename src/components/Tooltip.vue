<!-- Must be inside relative parent to work as expected, must consume hoverClass to chagne opacity -->

<template>
	<div
		class="opacity-0 absolute left-1/2 -translate-x-1/2 -translate-y-4 px-2 py-1 bg-[#282828] rounded-md shadow-lg transition-all delay-150"
		:class="dynamicStyles"
	>
		<p class="text-white text-xs whitespace-nowrap">
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
			isHigher: {
				type: Boolean,
				required: true,
			},
			class: {
				type: String,
				required: true,
			},
		},
		computed: {
			dynamicStyles() {
				return `${this.class} ${this.isHigher ? '-top-4' : '-bottom-14'}`;
			},
		},
	});
</script>
