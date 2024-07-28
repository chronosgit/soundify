<template>
	<aside class="max-w-[17.5rem] min-w-[17.5rem]">
		<div class="space-y-2">
			<Main />

			<MediaLibrary />
		</div>
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
