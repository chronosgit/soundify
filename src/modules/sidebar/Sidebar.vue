<template>
	<aside
		class="fixed left-0 h-screen w-full max-w-[17.5rem] p-2 grid grid-rows-[9rem_1fr] gap-2"
	>
		<Main />

		<MediaLibrary />
	</aside>
</template>

<script>
	import { defineComponent } from 'vue';
	import Main from '../main/Main.vue';
	import MediaLibrary from '../media-library/MediaLibrary.vue';

	export default defineComponent({
		name: 'Sidebar',
		components: { Main, MediaLibrary },
	});
</script>
