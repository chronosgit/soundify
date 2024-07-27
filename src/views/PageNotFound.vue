<template>
	<div class="h-screen flex justify-center items-center overflow-y-hidden">
		<div class="space-y-8">
			<p class="text-7xl font-extrabold">404</p>

			<div class="space-y-1">
				<p class="text-xl font-bold">Oops!</p>

				<p class="text-xl">We're all tangled up.</p>
			</div>

			<div class="-space-y-1 font-extralight">
				<p>Refresh this page or try again later.</p>

				<p>We'll do our best to keep the music going.</p>
			</div>

			<div class="flex items-center gap-4 text-black">
				<ButtonWhiteRounded name="Back" :onClick="navigateBack" />

				<ButtonWhiteRounded name="Home" :onClick="navigateHome" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import ButtonWhiteRounded from '@/components/ButtonWhiteRounded.vue';

	export default {
		name: 'PageNotFound',
		components: { ButtonWhiteRounded },
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
	};
</script>
