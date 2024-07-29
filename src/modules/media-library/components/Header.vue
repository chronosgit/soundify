<template>
	<div class="flex justify-between items-center select-none">
		<div class="relative">
			<div class="peer flex items-center gap-2 cursor-pointer group">
				<BooksIcon class="group-hover:filter-whited" />

				<h2 class="text-gray-light font-semibold group-hover:text-white">
					{{ $t('media_library.header.name') }}
				</h2>
			</div>

			<Tooltip
				:message="$t('media_library.header.name_tooltip')"
				:isHigher="false"
				class="peer-hover:opacity-100"
			/>
		</div>

		<div class="relative">
			<button
				class="size-8 text-3xl font-light text-gray-light rounded-full transition-all peer hover:text-white hover:bg-[#1b1b1b]"
			>
				+
			</button>

			<Tooltip
				:message="$t('media_library.header.plus_tooltip')"
				:isHigher="false"
				class="peer-hover:opacity-100"
			/>
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
