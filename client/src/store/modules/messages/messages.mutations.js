export default {
  setLoading: (state, data = true) => (state.loading = data),
  setError: (state, data = '') => (state.error = data),
  setMessages: (state, messages = []) => (state.messages = messages),
  pushMessage: (state, message) => (state.messages.push(message)),
  setUsersById: (state, usersById = {}) => (state.messages = usersById),
};
