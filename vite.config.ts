import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@components': path.resolve(__dirname, './src/components'),
			'@helpers': path.resolve(__dirname, './src/helpers'),
			'@locales': path.resolve(__dirname, './src/locales'),
			'@mixins': path.resolve(__dirname, './src/mixins'),
			'@models': path.resolve(__dirname, './src/models'),
			'@modules': path.resolve(__dirname, './src/modules'),
			'@router': path.resolve(__dirname, './src/router'),
			'@services': path.resolve(__dirname, './src/services'),
			'@views': path.resolve(__dirname, './src/views'),
		},
	},
});
