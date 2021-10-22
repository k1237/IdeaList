import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate"

export const store = createStore({
    state: () => {//共通データ保存
        return {
            message: 'count number.',
            counter: 0,
            keyword: ''//vuex版v-model
        }
    },

    getters: { // ?
        keyword: state => state.keyword
    },

    mutations: {//stateを使う処理
        setKeyword: function(state, keyword) {
            state.keyword = keyword
        },

        doit: (state) => {
            var n = Math.floor(Math.random() * 10)
            state.counter += n
            state.message = 'add ' + n + '.';
        },
        reset: (state) => {
            state.counter = 0;
            state.message = "reset now."
        },
    },

    actions: {//mutationを実行するための仕組み
        getKeyword: function({ commit }, keyword) {
            commit('setKeyword', keyword)
        },
    },

    plugins: [//プラグイン
        createPersistedState(),//ローカルストレージ
    ],
})