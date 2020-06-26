<template>
  <header class="navbar">
    <span>SourisCHAT.app [NAVBAR HERE]</span>
    <Button type="secondary" @click.native="logout">Log Out</Button>
  </header>
</template>

<script>
import { useActions } from '@u3u/vue-hooks';
import Button from '@/components/Button.vue';

export default {
  components: {
    Button,
  },
  setup() {
    const { logout } = useActions('auth', ['logout']);

    return {
      logout,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/abstracts/variables';

.navbar {
  background: $bg_second;
  width: 100%;
  height: 2.7rem;
}
</style>
