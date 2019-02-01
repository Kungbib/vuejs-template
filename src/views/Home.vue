<template>
  <div class="home">
    <transition name="fade">
      <vue-simple-spinner v-show="!pageStarted" />
    </transition>
    <transition name="fade">
      <h1 v-show="pageStarted" transition="fade">Welcome to the template</h1>
    </transition>
  </div>
</template>

<script>
import VueSimpleSpinner from 'vue-simple-spinner';
import { mapActions } from 'vuex'

export default {
  name: 'home',
  components: {VueSimpleSpinner,},
  data() {
    return {pageStarted: false,};
  },
  computed: {},
  mounted() {
    this.$nextTick(() => {
      const self = this;
      setTimeout(() => {
        self.pageStarted = true;
      }, 1000);
    });
  },
  watch: {
    '$route' (to, from) {
      if (to !== from) {
        // Route changed
      }
    }
  },
  methods: {
    ...mapActions([
      'setAValue'
    ]),
  },
}
</script>

<style lang="scss">

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 1s ease;
  margin-top: 2em;
  &.top-margin {
    @media all and (max-width: 1200px) {
      margin-top: 5vh;
    }
    @media all and (max-width: 800px) {
      margin-top: 5vh;
    }
  }
}

</style>
