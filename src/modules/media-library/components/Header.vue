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

		<button
			class="size-8 text-3xl font-light text-gray-light rounded-full transition-all hover:text-white hover:bg-[#1b1b1b]"
		>
			+
		</button>
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
