<template>
	<div class="max-w-[17.5rem] py-4 px-5 bg-gray-dark rounded-md">
		<Logo />
	</div>
</template>

<script>
	import Logo from './components/Logo.vue';

	export default {
		name: 'Sidebar',
		components: { Logo },
	};
</script>
