<template>
	<div class="flex flex-col gap-y-3">
		<FeatureMain />

		<FeatureSearch />
	</div>
</template>

<script>
	import { defineComponent } from 'vue';
	import FeatureMain from './FeatureMain.vue';
	import FeatureSearch from './FeatureSearch.vue';

	export default defineComponent({
		name: 'Features',
		components: { FeatureMain, FeatureSearch },
	});
</script>
