<template>
  <form class="chatbox" @submit="sendMessage">
    <input v-model="message" class="chatbox__input" type="text"
      placeholder="Type in your wisdom!..." />
  </form>
</template>

<script>
import { ref } from '@vue/composition-api';
import { useState, useActions } from '@u3u/vue-hooks';

export default {
  setup() {
    const message = ref('');

    const { createMessage } = useActions('messages', ['createMessage']);
    const { user } = useState('auth', ['user']);

    const sendMessage = () => {
      createMessage({
        // TODO: set on backend
        user_id: user.value._id,
        text: message.value,
      });
      message.value = '';
    };

    return {
      sendMessage,
      message,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/abstracts/variables';

.chatbox {
  width: 100%;
  height: 2.7rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &__input {
    background: $primary;
    width: 90%;
    height: 90%;
    color: $font_primary;
    border: none;
    outline: none;
    font-size: 1.3rem;
    border-radius: 0.5rem;
    padding: 0 0.5rem;
    font-family: $font_family;

    &:placeholder {
      color: transparency($font_primary, 12);
    }
  }
}
</style>
