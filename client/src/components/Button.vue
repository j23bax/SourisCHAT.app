<template>
  <button role="button" :class="buttonClass">
    <slot />
  </button>
</template>

<script>

export default {
  props: ['size', 'type'],
  computed: {
    buttonClass() {
      let className = 'button';
      if (this.size) {
        switch (this.size) {
          case 'big': className += ' button-big'; break;
          case 'small': className += ' button-small'; break;
          default: break;
        }
      }
      if (this.type) {
        switch (this.type) {
          case 'secondary': className += ' button-secondary'; break;
          case 'primary': default: break;
        }
      }

      return className;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/abstracts/variables';

.button {
  background-color: $bg_second;
  color: $font_primary;
  padding: 0.5rem;
  margin: 0.2rem;
  outline: none;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  font-family: $font_family;

  &:hover {
    background-color: lighten($bg_second, 12);
    transition: 0.3s ease-in-out;
  }

  &:active {
    box-shadow: 0 3px 0 $btn_shadow;
    transition: 0.1s ease-in-out;
  }
}

.button-secondary {
  background: $primary;
}

.button-big {
  font-size: 1.5rem;
  margin: 1rem;
  padding: 0.7rem;
}

.button-small {
  font-size: 0.6rem;
  margin: 0.1rem;
  padding: 0.4rem;

  &:active {
    box-shadow: 0 1.5px 0 $btn_shadow;
  }
}
</style>
