<template>
	<div class="p-2">
		<Main />
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import Main from '@/modules/main/Main.vue';

	export default defineComponent({
		name: 'Home',
		components: { Main },
	});
</script>
