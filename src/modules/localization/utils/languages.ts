import { markRaw } from 'vue';

import UKFlagIcon from '@/components/icons/UKFlagIcon.vue';
import RussiaFlagIcon from '@/components/icons/RussiaFlagIcon.vue';

const languages = [
	{ name: 'English', locale: 'en', flagIcon: markRaw(UKFlagIcon) },
	{ name: 'Русский', locale: 'ru', flagIcon: markRaw(RussiaFlagIcon) },
];

export default languages;
