<template>
	<div class="flex gap-4 cursor-pointer select-none" @click="toMainPage">
		<img
			:src="houseIcon"
			alt="house"
			class="size-5 whitedImage transition-colors"
			:class="{ whitedImage: isLinkActive, grayedImage: !isLinkActive }"
		/>

		<p
			class="items-center font-medium text-gray-light"
			:class="{ 'text-white': isLinkActive }"
		>
			{{ $t('sidebar.feature_main.name') }}
		</p>
	</div>
</template>

<script lang="ts">
	import houseIcon from '@assets/icons/house.svg';

	export default {
		name: 'FeatureMain',
		methods: {
			toMainPage() {
				this.$router.push({ name: 'Home' });
			},
		},
		data() {
			return { houseIcon };
		},
		computed: {
			isLinkActive() {
				const currentRoute = this.$router.currentRoute;
				const currentPath = currentRoute.value.path;

				return currentPath === '/';
			},
		},
	};
</script>

<style scoped>
	.whitedImage {
		filter: invert(100%) sepia(100%) brightness(100%) contrast(100%);
	}

	.grayedImage {
		filter: invert(100%) sepia(100%) brightness(60%) contrast(100%);
	}
</style>
