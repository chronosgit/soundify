<template>
	<div
		class="flex items-center gap-3 cursor-pointer select-none group"
		@click="toMainPage"
	>
		<div class="-translate-x-0.5">
			<House class="group-hover:filter-whited transition-all" />
		</div>

		<p
			class="items-center font-medium text-gray-light group-hover:text-white transition-colors"
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
		name: 'Main_FeatureHome',
		mixins: [ActiveLinkMixin],
		components: { House },
		methods: {
			toMainPage() {
				this.$router.push({ name: 'Home' });
			},
		},
	});
</script>
