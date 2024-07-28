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

		<div class="relative">
			<button
				class="size-8 text-3xl font-light text-gray-light rounded-full transition-all peer hover:text-white hover:bg-[#1b1b1b]"
			>
				+
			</button>

			<Tooltip message="Hello" hoverClass="peer-hover:opacity-100" />
		</div>
	</div>
</template>

<script>
	import { defineComponent } from 'vue';
	import BooksIcon from './BooksIcon.vue';
	import Tooltip from '@/components/Tooltip.vue';

	export default defineComponent({
		name: 'MediaLibrary_Header',
		components: { BooksIcon, Tooltip },
	});
</script>
