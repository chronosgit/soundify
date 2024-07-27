<template>
	<div class="p-2">
		<Sidebar />
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import Sidebar from '@/modules/sidebar/Sidebar.vue';

	export default defineComponent({
		name: 'Home',
		components: { Sidebar },
	});
</script>
