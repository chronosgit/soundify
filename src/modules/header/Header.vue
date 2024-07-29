<template>
	<header
		class="px-7 py-2 flex justify-between items-center bg-gray-dark rounded-md"
	>
		<div class="flex items-center gap-3">
			<div
				class="p-2 bg-[#0a0a0a] rounded-full cursor-not-allowed"
				:class="{
					'cursor-pointer': isGoBackPossible,
				}"
				@click="onGoBackClick"
			>
				<div class="relative">
					<ChevronToLeft
						class="peer"
						:class="{
							'filter-whited': isGoBackPossible,
							'filter-grayed': !isGoBackPossible,
						}"
					/>

					<Tooltip
						message="Back"
						:isHigher="false"
						:class="{ 'peer-hover:opacity-100': isHoverClassNeeded(false) }"
					/>
				</div>
			</div>

			<div
				class="p-2 bg-[#0a0a0a] rounded-full cursor-not-allowed"
				:class="{
					'cursor-pointer': isGoForwardPossible,
				}"
				@click="onGoForwardClick"
			>
				<div class="relative">
					<ChevronToRight
						class="peer"
						:class="{
							'filter-whited': isGoForwardPossible,
							'filter-grayed': !isGoForwardPossible,
						}"
					/>

					<Tooltip
						message="Forward"
						:isHigher="false"
						:class="{ 'peer-hover:opacity-100': isHoverClassNeeded(true) }"
					/>
				</div>
			</div>
		</div>

		<div class="flex items-center gap-8">
			<button
				class="text-gray-300 font-medium transition-transform hover:scale-105 hover:text-white"
				@click="onRegisterClick"
			>
				Register
			</button>

			<button
				class="px-7 py-3 text-black font-semibold bg-white rounded-full transition-transform hover:scale-105"
				@click="onLoginClick"
			>
				Login
			</button>
		</div>
	</header>
</template>

<script>
	import { defineComponent } from 'vue';
	import { mapStores } from 'pinia';
	import ChevronToLeft from '@components/icons/ChevronToLeft.vue';
	import ChevronToRight from '@components/icons/ChevronToRight.vue';
	import Tooltip from '@/components/Tooltip.vue';
	import useRoutesHistoryStore from '@/store/useRoutesHistoryStore';

	export default defineComponent({
		name: 'Header',
		components: { ChevronToLeft, ChevronToRight, Tooltip },
		computed: {
			...mapStores(useRoutesHistoryStore),
			isGoBackPossible() {
				return this.routesHistoryStore.hasPreviousPath;
			},
			isGoForwardPossible() {
				return this.routesHistoryStore.hasNextPath;
			},
		},
		methods: {
			isHoverClassNeeded(iArrowRight) {
				if (iArrowRight) {
					return this.isGoForwardPossible;
				}
				return this.isGoBackPossible;
			},
			onGoBackClick() {
				if (!this.isGoBackPossible) return;

				this.$router.back();
			},
			onGoForwardClick() {
				console.log(this.routesHistoryStore.getRoutesHistory);
			},
			onRegisterClick() {
				console.log('onRegisterClick');
			},
			onLoginClick() {
				console.log('onLoginClick');
			},
		},
	});
</script>
