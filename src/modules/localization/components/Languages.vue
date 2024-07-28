<template>
	<div
		class="opacity-0 absolute right-1 translate-y-0 p-4 bg-white rounded-md transition-opacity hover:opacity-100"
		:class="onLocalizationIconHoverClass"
	>
		<div class="space-y-2">
			<div
				class="group w-full max-w-24 flex justify-between items-center gap-4 cursor-pointer"
				v-for="l in languages"
				@click="() => onLanguage(l)"
			>
				<p class="text-black transition-colors group-hover:text-green-600">
					{{ l.name }}
				</p>

				<component :is="l.flagIcon" class="size-6" />
			</div>
		</div>
	</div>
</template>

<script>
	import { defineComponent } from 'vue';
	import { i18n } from '@/main';
	import { handleSettingLanguage } from '@/locales/i18n';
	import languages from '../utils/languages';

	export default defineComponent({
		name: 'Localization_Languages',
		props: ['onLocalizationIconHoverClass'],
		data() {
			return {
				languages,
			};
		},
		methods: {
			onLanguage(pickedLanguage) {
				const locale = pickedLanguage.locale; // proxy

				handleSettingLanguage(i18n, locale);
			},
		},
	});
</script>
