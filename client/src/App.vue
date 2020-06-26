<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import 'styles/main.scss';
</style>

<script>
import { useActions, useRouter, useState } from '@u3u/vue-hooks';
import { watch } from '@vue/composition-api';

export default {
  setup() {
    const actions = useActions('auth', ['reAuth']);

    actions.reAuth();

    const { user } = useState('auth', ['user']);
    const { route, router } = useRouter();

    watch(user, () => {
      if (!user.value && !(route.value.meta && route.value.meta.noAuthRequired)) {
        router.push('/');
      }
    });
  },
};
</script>
