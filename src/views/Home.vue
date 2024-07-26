<template>
	<div class="p-2">
		<Sidebar />
	</div>
</template>

<script lang="ts">
	import Sidebar from '@/modules/sidebar/Sidebar.vue';

	export default {
		name: 'Home',
		components: { Sidebar },
	};
</script>
