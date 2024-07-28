<template>
	<div class="py-4 px-5 space-y-7 bg-gray-dark rounded-md">
		<MediaLibraryHeader />

		<Card
			:heading="$t('media_library.create_playlist_card.heading')"
			:descr="$t('media_library.create_playlist_card.descr')"
			:buttonName="$t('media_library.create_playlist_card.button_name')"
			@click="onCreatePlaylist"
		/>

		<Card
			:heading="$t('media_library.subscribe_podcasts_card.heading')"
			:descr="$t('media_library.subscribe_podcasts_card.descr')"
			:buttonName="$t('media_library.subscribe_podcasts_card.button_name')"
			@click="onSubscribePodcasts"
		/>
	</div>
</template>

<script>
	import { defineComponent } from 'vue';
	import MediaLibraryHeader from './components/Header.vue';
	import Card from './components/Card.vue';

	export default defineComponent({
		name: 'MediaLibrary',
		components: { MediaLibraryHeader, Card },
		methods: {
			onCreatePlaylist() {
				console.log('onCreatePlaylist');
			},
			onSubscribePodcasts() {
				console.log('onSubscribePodcasts');
			},
		},
	});
</script>
