<script lang="ts">
	export default {
		computed: {
			isLinkActive() {
				const currentRoute = this.$router.currentRoute;
				const currentPath = currentRoute.value.path;

				return currentPath !== '/';
			},
		},
	};
</script>
