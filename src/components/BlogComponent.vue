<template>
  <div class="container" id="aboutdesc">
    <div class="about">
      <h2 class="aboutdesc">{{ title }}</h2>
      <slot class="aboutdesc"> </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogComponent",
  props: {
    title: String,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 20px;
}

.about {
  font-family: Cabin, Consolas, "Times New Roman";
  font-weight: 400;
  font-size: 18px;
  background-color: rgba(255, 255, 255, 0.7);
  width: 85%;
  border-radius: 5px;
  padding: 30px;
  margin-bottom: 30px;
}

h2 {
  width: 100%;
  text-align: center;
}

@media screen and (max-width: 590px) {
  .aboutdesc {
    font-size: 20px;
  }

  .about {
    font-size: 15px;
  }
}
</style>
