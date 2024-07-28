<template>
	<div class="py-4 px-5 bg-gray-dark rounded-md">
		<MediaLibraryHeader />
	</div>
</template>

<script>
	import { defineComponent } from 'vue';
	import MediaLibraryHeader from './components/Header.vue';

	export default defineComponent({
		name: 'MediaLibrary',
		components: { MediaLibraryHeader },
	});
</script>
