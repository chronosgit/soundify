<template>
	<div class="">
		<img :src="localizationIcon" alt="" class="" />
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import localizationIcon from '@assets/icons/localization.png';

	export default defineComponent({
		name: 'Localization',
		setup() {
			return {
				localizationIcon,
			};
		},
	});
</script>
