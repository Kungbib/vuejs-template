<template>
  <div class="Item" tabindex="0">
    <font-awesome-icon :icon="['far', 'eye']" /> {{ value }}
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { mapGetters, mapActions } from 'vuex'
import { mixin as clickaway } from 'vue-clickaway';

export default {
  name: 'Item',
  mixins: [
    clickaway,
  ],
  components: {
    FontAwesomeIcon,
  },
  props: {
    value: {
      type: [Number, String],
      default: '',
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
    });
  },
  methods: {
    ...mapActions([
      'setAValue'
    ]),
  },
  computed: {
    ...mapGetters([
      'aValue'
    ]),
    apiPath() {
      /*
        The frontend origin may differ from the backend origin
        (e.g. you are running this app on localhost:8080 and the search API on localhost:8081)
        If so, configure the VUE_APP_API_PATH variable in .env.development and/or .env.production file
      */
      if (process.env.VUE_APP_API_PATH) {
        return process.env.VUE_APP_API_PATH;
      }
      return '';
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$OverlayColor: rgba(255, 255, 255, 0.75);
$HighlightColor: #000;


.Book {
  display: flex;
  flex-direction: column-reverse;
  flex-basis: 17%;
  padding: 1.2%;
  min-width: 0;
  cursor: pointer;

  @media all and (max-width: 1200px) {
    flex-basis: 15%;
    padding: 2.5%;
  }
  @media all and (max-width: 800px) {
    flex-basis: 45%;
    padding: 2%;
  }
  &-coverContainer {
    position: relative;
    &.cover-failed {
      display: flex;
      flex: 1;
      min-height: 300px;
      @media all and (max-width: 1200px) {
        min-height: 200px;
      }
      @media all and (max-width: 800px) {
        min-height: 300px;
      }
    }
  }
  &-cover {
    border: 2px solid $HighlightColor;
    border-bottom-style: double;
    border-bottom-width: 6px;
    border-left-width: 4px;
    border-radius: 5px 0px 0px 5px;
    width: 100%;
  }
  &-generatedCover {
    background: -moz-linear-gradient(top, rgba(0,0,0,0.29) 0%, rgba(0,0,0,0.29) 23%, rgba(0,0,0,0) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, rgba(0,0,0,0.29) 0%,rgba(0,0,0,0.29) 23%,rgba(0,0,0,0) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, rgba(0,0,0,0.29) 0%,rgba(0,0,0,0.29) 23%,rgba(0,0,0,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4a000000', endColorstr='#00000000',GradientType=0 ); /* IE6-9 */

    overflow: hidden;
    border: 2px solid $HighlightColor;
    border-bottom-style: double;
    border-bottom-width: 6px;
    border-left-width: 4px;
    border-radius: 5px 0px 0px 5px;
    width: 100%;
    font-family: 'Times New Roman', Times, serif;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-shadow: 0px 1px 1px rgba(255,255,255,0.5);
    padding: 0.25em;

    font-size: 18pt;
    @media all and (max-width: 1200px) {
      font-size: 12pt;
    }
    @media all and (max-width: 800px) {
      font-size: 22pt;
    }
    .title {
      color: rgba(0, 0, 0, 0.7);
    }
    .author {
      color: black;
      text-transform: uppercase;
    }
  }
  &-metaData {
    display: flex;
    height: 100px;
    flex-direction: column;
    min-width: 0;
    .title {
      text-align: left;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      min-width: 0;
      font-weight: bold;
      font-size: 12pt;
    }
    .author {
      text-align: left;
    }
  }
  &-overlay {
    cursor: auto;
    position: absolute;
    display: none;
    top: 0;
    left: 0%;
    background-color: $OverlayColor;
    height: 100%;
    width: 107%;
    font-size: 4em;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #000;
    hr {
      width: 75%;
      margin: 0.1em;
      border: 1px solid $HighlightColor;
    }
    &.is-active {
      display: flex;
    }
  }
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: $HighlightColor;
  &:focus {
    outline: 0.1em solid black;
  }
}
</style>
