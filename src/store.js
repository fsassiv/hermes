import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentPage: "home",
    pageBackground: "",
    activePanel: {
      _id: "",
      name: {
        type: String,
        default: ""
      },
      alias: {
        type: String,
        default: ""
      },
      logo: {
        type: String,
        default: ""
      },
      background: {
        type: String,
        default: ""
      },
      dep: {
        type: Array,
        default: []
      }
    },
    guest: {
      _id: "",
      name: "",
      photo: {
        _id: "",
        path: ""
      }
    },
    company: {
      _id: 0
    }
  },
  getters: {
    getCurrentPage: ({ currentPage }) => {
      return currentPage;
    },
    getPageBackground: ({ pageBackground }) => {
      return pageBackground;
    },
    getActivePanel: ({ activePanel }) => {
      return activePanel;
    },
    getCompany: ({ company }) => {
      return company;
    }
  },
  mutations: {
    setCurrentPage: (state, newPage) => {
      state.currentPage = newPage;
    },
    setPageBackground: (state, newImage) => {
      state.pageBackground = newImage;
    },
    setActivePanel: (state, panelData) => {
      state.activePanel = panelData;
    },
    setCompany: (state, company) => {
      state.company = company;
    }
  },
  actions: {}
});
