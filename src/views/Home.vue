<template>
	<div>
		<Sidebar />

		<div class="p-2 pl-[17.6rem]">
			<Header />

			<div class="">The rest</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import Sidebar from '@/modules/sidebar/Sidebar.vue';
	import Header from '@/modules/header/Header.vue';

	export default defineComponent({
		name: 'Home',
		components: { Sidebar, Header },
	});
</script>
