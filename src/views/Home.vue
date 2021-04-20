<template>
  <div class="home">
    <HomeComponent />
    <AboutComponent />
    <ProjectComponent />
  </div>
</template>

<script>
import HomeComponent from "@/components/HomeComponent.vue";
import AboutComponent from "@/components/AboutComponent.vue";
import ProjectComponent from "@/components/ProjectComponent.vue";

export default {
  name: "Home",
  components: {
    HomeComponent,
    AboutComponent,
    ProjectComponent
  },
};
</script>
