import { defineStore } from "pinia";

export default defineStore("layout", {
    state: () => ({
        isCollapse: false,
    }),
    getters: {
        getIsCollapse: (state) => state.isCollapse,
    },
    actions: {
        toggleCollapse() {
            this.isCollapse = !this.isCollapse;
        },
    },
});
