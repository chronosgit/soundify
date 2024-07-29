import { defineStore } from 'pinia';
import RoutesHistoryState from '@/models/IRoutesHistory';

const useRoutesHistoryStore = defineStore('routesHistory', {
	state: (): RoutesHistoryState => ({
		routesHistory: [],
		currentIndex: -1,
	}),
	getters: {
		getRoutesHistory: (state) => state.routesHistory,
		hasPreviousPath: (state) => state.currentIndex > 0,
		hasNextPath: (state) => state.currentIndex < state.routesHistory.length - 1,
		previousPath: (state) =>
			state.currentIndex > 0
				? state.routesHistory[state.currentIndex - 1]
				: null,
		nextPath: (state) =>
			state.currentIndex < state.routesHistory.length - 1
				? state.routesHistory[state.currentIndex + 1]
				: null,
	},
	actions: {
		addPath(newPath: string) {
			if (newPath === '/page-not-found') return;

			// If a new path is added, truncate the history to remove "forward" paths
			this.routesHistory = this.routesHistory.slice(0, this.currentIndex + 1);
			this.routesHistory.push(newPath);

			this.currentIndex++;
		},
	},
});

export default useRoutesHistoryStore;
