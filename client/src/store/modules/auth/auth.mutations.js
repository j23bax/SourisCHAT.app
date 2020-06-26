export default {
  setLoading: (state, data = true) => (state.loading = data),
  setError: (state, data = '') => (state.error = data),
  setUser: (state, data = null) => (state.user = data),
};
