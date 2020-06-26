import feathers from '@/feathers';

const githubOauthLink = 'http://localhost:3030/oauth/github';
const oauthWindowFeatures = 'width=400,height=500'
  + ',left=10,top=10,resizable=no';
const oauthTitle = (strategy) => `Authorize with ${strategy}`;

export default {
  loginWithGithub({ commit }) {
    commit('setLoading');
    window.addEventListener('message', async (event) => {
      if (event.origin !== 'http://localhost:3030') {
        console.error('Invalid origin!', event.origin);
        commit('setUser');
      } else if (event.data.token) {
        const { user } = await feathers.authenticate({
          strategy: 'jwt',
          accessToken: event.data.token,
        });
        commit('setUser', user);
      } else {
        console.error(event.data.error);
        commit('setUser');
      }

      commit('setLoading', false);
    }, { once: true });
    window.open(githubOauthLink, oauthTitle('GitHub'), oauthWindowFeatures);
  },

  async logout({ commit }) {
    commit('setLoading');
    await feathers.logout();
    commit('setUser');
    commit('setLoading', false);
  },

  async reAuth({ commit }) {
    commit('setLoading');
    try {
      const { user } = await feathers.reAuthenticate();
      commit('setUser', user);
    } catch (error) {
      console.error(error);
    }
    commit('setLoading', false);
  },
};
