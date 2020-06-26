<template>
  <div class="home">
    <img src="../assets/logo_transparent.png" />
    <Button v-if="!loading && !user" @click.native="loginWithGithub">
      Login with GitHub
      <svg style="padding-top: 2px" viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
    </Button>
    <Loading v-if="loading && !user" />
    <span v-if="loading && !user">Logging in...</span>
    <pre v-if="!loading && user">{{ user.name }}</pre>
    <Button v-if="!loading && user" size="big" @click.native="goToApp">ENTER</Button>
    <Button v-if="!loading && user" size="big" @click.native="logout">Logout</Button>
  </div>
</template>

<script>
import { useActions, useState, useRouter } from '@u3u/vue-hooks';
import Button from '@/components/Button.vue';
import Loading from '@/components/Loading.vue';

export default {
  name: 'Home',
  components: { Button, Loading },
  setup() {
    const { user, loading } = useState('auth', ['user', 'loading']);
    const { loginWithGithub, logout } = useActions('auth', ['loginWithGithub', 'logout']);
    const { router } = useRouter();

    return {
      user,
      loading,
      loginWithGithub,
      logout,
      router,
    };
  },
  methods: {
    async goToApp() {
      try {
        await this.router.push('/messages');
      } catch (error) {
        if (error === undefined) {
          console.log('Redirect blocked! Not enough privileges!');
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/abstracts/variables';

.home {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    height: 50vh;
  }
}
</style>
