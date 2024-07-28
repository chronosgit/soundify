<template>
	<div
		class="flex items-center gap-4 cursor-pointer select-none group"
		@click="toSearchbar"
	>
		<div class="max-w-16 max-h-16">
			<Search class="group-hover:brightness-100 transition-all" />
		</div>

		<p
			class="items-center font-medium text-gray-light group-hover:text-white transition-colors"
		>
			{{ $t('sidebar.features.search') }}
		</p>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import Search from './Search.vue';

	export default defineComponent({
		name: 'Main_FeatureSearch',
		components: { Search },
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
