<template>
	<div class="flex justify-between items-center select-none">
		<div class="flex items-center gap-2 cursor-pointer group">
			<BooksIcon class="group-hover:filter-whited transition-colors" />

			<h2
				class="text-gray-light font-semibold transition-colors group-hover:text-white"
			>
				{{ $t('media_library.header_name') }}
			</h2>
		</div>

		<button class="text-3xl font-light text-gray-light">+</button>
	</div>
</template>

<script>
	import { defineComponent } from 'vue';
	import BooksIcon from './BooksIcon.vue';

	export default defineComponent({
		name: 'MediaLibrary_Header',
		components: { BooksIcon },
	});
</script>
