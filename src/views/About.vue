<template>
  <div class="about">
    <h1>
      About the service
    </h1>
    <p>
      Maecenas nec neque libero. Nulla facilisi. Morbi ut sem dui. Donec fringilla purus vitae consequat tincidunt. Aenean ultricies congue venenatis. Quisque semper tincidunt fringilla. Aenean ligula nunc, cursus et ipsum id, mollis suscipit augue. Cras consectetur neque ac tortor hendrerit tempus. Sed ac velit magna. Mauris rhoncus interdum ultricies. Donec ex quam, vehicula nec auctor eget, suscipit quis tellus. Morbi tincidunt placerat sem ut pretium. Curabitur ut quam eros. Aliquam ut turpis posuere, mollis dolor vel, suscipit massa. Phasellus dignissim nisi vitae accumsan varius.
    </p>

    <h2>
      Some info
    </h2>
    <ul>
      <li>In et ipsum urna. Vestibulum eget maximus nisi, ut laoreet ligula.</li>
      <li>Pellentesque facilisis, nunc eget egestas eleifend, erat lectus condimentum tellus, quis convallis lacus ante ut dui.</li>
      <li>Cras suscipit, purus at iaculis ornare, diam elit semper nibh, vitae scelerisque libero est quis metus.</li>
    </ul>

  </div>
</template>


<script>

export default {
  name: 'home',
  components: {},
  methods: {},
}
</script>

<style lang="scss">

.about {
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 10vh 15%;
  @media all and (max-width: 1200px) {
    margin: 10vh 10%;
  }
  @media all and (max-width: 800px) {
    margin-top: 10vh 0;
  }
  h1, h2, h3 {
    text-align: left;
  }
  p {
    text-align: left;
  }
}

</style>
