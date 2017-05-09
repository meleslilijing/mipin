const state = {
	score: 0
};

// const getters = {

// };

const actions = {

};

const mutations = {
	add(state) {
		state.score++;
	},
	minus(state) {
		state.score--;
	},
	update(state, { score }) {
		state.score = score;
	}
};

export default {
	state,
	actions,
	mutations
}