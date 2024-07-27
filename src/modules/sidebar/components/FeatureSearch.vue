<template>
	<div
		class="flex items-center gap-3 cursor-pointer select-none"
		@click="toSearchbar"
	>
		<img
			:src="searchIcon"
			alt="house"
			class="size-6 grayedImage transition-colors"
		/>

		<p class="items-center font-medium text-gray-light">
			{{ $t('sidebar.features.search') }}
		</p>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import searchIcon from '@assets/icons/search.svg';

	export default defineComponent({
		name: 'FeatureSearch',
		data() {
			return { searchIcon };
		},
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

<style scoped>
	.grayedImage {
		filter: invert(100%) sepia(100%) brightness(50%) contrast(100%);
	}
</style>
