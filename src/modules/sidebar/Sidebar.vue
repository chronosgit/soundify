<template>
	<div class="max-w-[17.5rem] py-4 px-5 bg-gray-dark rounded-md">
		<div class="mb-4 flex justify-between items-center">
			<Logo />

			<Localization />
		</div>

		<div class="flex flex-col gap-y-3">
			<FeatureMain />

			<FeatureSearch />
		</div>
	</div>
</template>

<script>
	import { defineComponent } from 'vue';
	import Logo from '@/components/Logo.vue';
	import Localization from '@/components/Localization.vue';
	import FeatureMain from './components/FeatureMain.vue';
	import FeatureSearch from './components/FeatureSearch.vue';

	export default defineComponent({
		name: 'Sidebar',
		components: { Logo, Localization, FeatureMain, FeatureSearch },
	});
</script>
