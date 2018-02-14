import { get, getAuth, post, patch, del, apis } from '../api/ajax-global';

function gatherValue(state) {
  return {
    urlname: state.urlname,
    title: state.title,
    sub_title: state.subTitle,
    content: state.content,
    visit: state.pageView,
    has_cover: state.hasCover,
    create_time: state.createTime,
    is_recommended: state.isRecommended,
    usefor: state.contentType,
    is_active: state.isActive,
  };
}

export default {
  namespaced: true,
  state: {
    urlname: '',

    title: '',
    subTitle: '',

    content: '',

    createTime: '',
    pageView: '',
    hasCover: false,
    isRecommended: false,
    contentType: '',
    isActive: false,

  },
  mutations: {
    reset(state) {
      urlname = '';
      title = '';
      subTitle= '';
      content= '';
      createTime= '';
      pageView= '';
      hasCover= false;
      isRecommended= false;
      contentType= '';
      isActive= false;
    },
    setUrlName(state, urlName) {
      state.urlname = urlName;
    },
    setTitle(state, { title, subTitle }) {
      state.title = title;
      state.subTitle = subTitle;
    },
    setContent(state, content) {
      state.content = content;
    },
    setInfo(state, { createTime, pageView, hasCover, isRecommended, contentType, isActive }) {
      state.createTime = createTime;
      state.pageView = pageView;
      state.hasCover = hasCover;
      state.isRecommended = isRecommended;
      state.contentType = contentType;
      state.isActive = isActive;
    },
  },
  actions: {
    async getEntity({ commit, dispatch, state, getters }, urlname) {
      commit('setUrlName', urlname);
      const data = await getAuth(this.$ajax.apis.articleDetialAdmin, {
        urlname: urlname
      });
      commit('setTitle', data);
      commit('setContent', data);
      commit('setInfo', data);

    },
    async updateEntityInfo({ commit, dispatch, state, getters }) {
      const data = await patch(this.$ajax.apis.articleDetial, gatherValue(state));

    },

    async deleteEntity({ commit, dispatch, state, getters }, urlname) {
      const data = await del(this.$ajax.apis.articleDetial, {
        urlname: urlname
      })
      if (data.result === "success") {
        this.$router.push({ name: "home" });
      } else {
        throw data;
      }
    }
  }
}