import feathers from '@/feathers';

let listener;

export default {
  async listen({ commit }) {
    const users = await feathers.service('users').find({
      query: {
        $limit: 100,
      },
    });

    // state.usersById = users.data.reduce((byId, user) => {
    const usersById = users.data.reduce((byId, user) => {
      byId[user._id] = user;
      return byId;
    }, {});
    // commit('setUsersById', );

    const messages = await feathers.service('messages').find({
      query: {
        $sort: { createdAt: 1 },
        $limit: 100,
      },
    });

    commit('setMessages', messages.data.map((message) => {
      message.user = usersById[message.user_id];
      return message;
    }));

    feathers.service('messages').off('created', listener);
    listener = (message) => {
      // todo: make sure user exists
      message.user = usersById[message.user_id];
      commit('pushMessage', message);
    };
    feathers.service('messages').on('created', listener);
  },

  async createMessage(ctx, message) {
    await feathers.service('messages').create(message);
  },
};
