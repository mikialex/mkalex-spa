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
    setTitle(state, title) {
      state.title = title;
    },
    setSubTitle(state, subTitle) {
      state.subTitle = subTitle;
    },
    setContent(state, content) {
      state.content = content;
    },
    setCreateTime(state, createTime) {
      state.createTime = createTime;
    },
    setPageView(state, pageView) {
      state.pageView = pageView;
    },
    setHasCover(state, hasCover) {
      state.hasCover = hasCover;
    },
    setIsRecommended(state, isRecommended) {
      state.isRecommended = isRecommended;
    },
    setContentType(state, contentType) {
      state.contentType = contentType;
    },
    setIsActive(state, isActive) {
      state.isActive = isActive;
    },
  },
  actions: {
    async getEntity({ commit, dispatch, state, getters }, urlname) {
      commit('setUrlName', urlname);
      const data = await getAuth(apis.articleDetialAdmin, {
        urlname: urlname
      });
      commit('setTitle', data.title);
      commit('setSubTitle', data.sub_title);
      commit('setContent', data.content);
      commit('setCreateTime', data.publish_time);
      commit('setPageView', data.page_view);
      commit('setHasCover', data.has_cover);
      commit('setIsRecommended', data.is_recommended);
      commit('setContentType', data.usefor);
      commit('setIsActive', data.is_active);

    },
    async updateEntityInfo({ commit, dispatch, state, getters }) {
      const data = await patch(apis.articleDetial, gatherValue(state));

    },

    async deleteEntity({ commit, dispatch, state, getters }, urlname) {
      const data = await del(apis.articleDetial, {
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