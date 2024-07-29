<template>
	<div class="h-screen flex justify-center items-center overflow-y-hidden">
		<div class="space-y-8">
			<p class="text-7xl font-extrabold">
				{{ $t('page_not_found.error_status') }}
			</p>

			<div class="space-y-1">
				<p class="text-xl font-bold">{{ $t('page_not_found.message_oops') }}</p>

				<p class="text-xl">{{ $t('page_not_found.message_joke') }}</p>
			</div>

			<div class="-space-y-1 font-extralight">
				<p>{{ $t('page_not_found.message_advice') }}</p>

				<p>{{ $t('page_not_found.message_reassure') }}</p>
			</div>

			<div class="flex items-center gap-4 text-black">
				<ButtonWhiteRounded
					:name="$t('buttons.back')"
					:onClick="navigateBack"
				/>

				<ButtonWhiteRounded
					:name="$t('buttons.home')"
					:onClick="navigateHome"
				/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import { mapStores } from 'pinia';
	import ButtonWhiteRounded from '@/components/buttons/ButtonWhiteRounded.vue';
	import useRoutesHistoryStore from '@/store/useRoutesHistoryStore';

	export default defineComponent({
		name: 'PageNotFound',
		components: { ButtonWhiteRounded },
		computed: {
			...mapStores(useRoutesHistoryStore),
		},
		methods: {
			navigateBack() {
				try {
					this.$router.back();
				} catch (err) {
					console.error(err);

					this.$router.push({ name: 'PageNotFound' });
				}
			},
			navigateHome() {
				try {
					this.$router.push({ name: 'Home' });
				} catch (err) {
					console.error(err);

					this.$router.push({ name: 'PageNotFound' });
				}
			},
		},
	});
</script>
