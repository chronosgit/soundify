<template>
	<div
		class="flex items-center gap-4 cursor-pointer select-none"
		@click="toSearchbar"
	>
		<div class="max-w-16 max-h-16">
			<svg
				width="20"
				height="20"
				class="DocSearch-Search-Icon"
				viewBox="0 0 20 20"
			>
				<path
					d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
					stroke="currentColor"
					fill="none"
					fill-rule="evenodd"
					stroke-linecap="round"
					stroke-linejoin="round"
				></path>
			</svg>
		</div>

		<p class="items-center font-medium text-gray-light">
			{{ $t('sidebar.features.search') }}
		</p>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'SidebarFeatureSearch',
		methods: {
			toSearchbar() {
				try {
					this.$router.push({ name: 'Search' });
				} catch (err) {
					console.error(err);

					this.$router.push({ name: 'PageNotFound' });
				}
			},
		},
	});
</script>
