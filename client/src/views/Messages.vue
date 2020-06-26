<template>
  <div class="flex-window">
    <Navbar />
    <main class="main">
      <pre v-if="user">{{ user.name }}</pre>
      <Button @click.native="logout">Log out</Button>
      <div>
        <Message v-for="message in messages"
          :key="message._id" :message="message" />
      </div>
      <ChatBox class="main--bottom" />
    </main>
  </div>
</template>

<script>
import { useActions, useState } from '@u3u/vue-hooks';
import Button from '@/components/Button.vue';
import Navbar from '@/components/Navbar.vue';
import ChatBox from '@/components/ChatBox.vue';
import Message from '@/components/Message.vue';

export default {
  name: 'Messages',
  components: {
    Button,
    Navbar,
    ChatBox,
    Message,
  },
  setup() {
    const { logout } = useActions('auth', ['logout']);
    const { user } = useState('auth', ['user']);
    const { messages, loading } = useState('messages', ['messages', 'loading']);
    const { listen } = useActions('messages', ['listen']);

    listen();

    return {
      logout,
      user,
      messages,
      loading,
      listen,
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  height: 100%;

  &--bottom {
    position: absolute;
    bottom: 0;
  }
}
</style>
