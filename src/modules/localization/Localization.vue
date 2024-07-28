<template>
	<div class="relative">
		<div class="peer">
			<LocalizationIcon />
		</div>

		<Languages onLocalizationIconHoverClass="peer-hover:opacity-100" />
	</div>
</template>

<script>
	import { defineComponent } from 'vue';
	import LocalizationIcon from '@/components/icons/LocalizationIcon.vue';
	import Languages from './components/Languages.vue';

	export default defineComponent({
		name: 'Localization',
		components: { LocalizationIcon, Languages },
	});
</script>
