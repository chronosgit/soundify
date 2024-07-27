<template>
	<div class="max-w-[17.5rem] py-4 px-5 bg-gray-dark rounded-md">
		<div class="mb-4">
			<Logo />
		</div>

		<Features />
	</div>
</template>

<script>
	import { defineComponent } from 'vue';
	import Logo from '@/components/Logo.vue';
	import Features from './components/Features.vue';

	export default defineComponent({
		name: 'Sidebar',
		components: { Logo, Features },
	});
</script>
