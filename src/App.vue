<template>
  <div id="app">
    <div class="TopBlock">
      <a class="Brand" href="https://www.kb.se" target="_blank"><img src="/kb_logo_black.svg" /></a>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  margin: 2em 10%;
  padding: 0px;
  @media all and (max-width: 1200px) {
    margin: 2em 5%;
  }
  @media all and (max-width: 800px) {
    margin: 1em 2.5%;
  }
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0px;
  margin: 0px;
}

.TopBlock {
  width: 25%;
  position: absolute;
  right: 2%;
  top: 2%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .Brand {
    margin: 0 0 0 1em;
    width: 48px;
    height: 48px;
    order: 1;
  }
  #nav {
    order: 0;
  }

  @media all and (max-width: 800px) {
    position: static;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    .Brand {
      width: 100px;
      height: 100px;
      order: 0;
      margin: 0 0 1em 0;
    }
    #nav {
      order: 1;
    }
  }

}

#nav {
  @media all and (max-width: 800px) {
    position: static;
  }

  a {
    font-weight: normal;
    color: #000;
    text-decoration: none;
    &.router-link-exact-active {
      font-weight: bold;
    }
    &:focus {
      font-weight: underline;
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

</style>
