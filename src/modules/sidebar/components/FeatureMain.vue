<template>
	<div
		class="flex items-center gap-3 cursor-pointer select-none"
		@click="toMainPage"
	>
		<div class="-translate-x-0.5">
			<House />
		</div>

		<p
			class="items-center font-medium text-gray-light"
			:class="{ 'text-white': isLinkActive }"
		>
			{{ $t('sidebar.features.main') }}
		</p>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import ActiveLinkMixin from '../mixins/ActiveLinkMixin.vue';
	import House from './House.vue';

	export default defineComponent({
		name: 'SidebarFeatureMain',
		mixins: [ActiveLinkMixin],
		components: { House },
		methods: {
			toMainPage() {
				this.$router.push({ name: 'Home' });
			},
		},
	});
</script>
