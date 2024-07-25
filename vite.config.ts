import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@components': path.resolve(__dirname, './src/components'),
			'@helpers': path.resolve(__dirname, './src/helpers'),
			'@locales': path.resolve(__dirname, './src/locales'),
			'@mixins': path.resolve(__dirname, './src/mixins'),
			'@models': path.resolve(__dirname, './src/models'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@router': path.resolve(__dirname, './src/router'),
			'@services': path.resolve(__dirname, './src/services'),
		},
	},
});
