<template>
	<div class="py-4 px-5 bg-gray-dark rounded-md">
		<div class="mb-4 flex justify-between items-center">
			<Logo />

			<Localization />
		</div>

		<div class="flex flex-col gap-y-3">
			<FeatureHome />

			<FeatureSearch />
		</div>
	</div>
</template>

<script>
	import { defineComponent } from 'vue';
	import Logo from '@/components/Logo.vue';
	import Localization from '@/components/Localization.vue';
	import FeatureHome from './components/FeatureHome.vue';
	import FeatureSearch from './components/FeatureSearch.vue';

	export default defineComponent({
		name: 'Main',
		components: { Logo, Localization, FeatureHome, FeatureSearch },
	});
</script>
