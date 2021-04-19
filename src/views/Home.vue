<template>
  <div class="home">
    <HomeComponent />
    <AboutComponent />
  </div>
</template>

<script>
import HomeComponent from "@/components/HomeComponent.vue";
import AboutComponent from "@/components/AboutComponent.vue";

export default {
  name: "Home",
  components: {
    HomeComponent,
    AboutComponent
  },
};
</script>
