<template>
  <BlogComponent title="Advantages of Using Vim" class="post">
    <p>
      Vim is a terminal based editor, and a lot of people say that using it
      improves your productivity, but I never realised it until I actually
      started using it. It improves your productivity by completely removing
      your control of the mouse - you can only use your keyboard in Vim. You
      might be wondering, how on earth does this improve my productivity? Well,
      the idea is that you don't spend time moving your hands from the keyboard
      to the mouse, and back

      <br /><br />
      Vim has many variants such as plain ol' Vim, gVim, NeoVim and Vi which you
      can use, thus giving you a lot of choice as well!
    </p>
  </BlogComponent>

  <BlogButtonComponent />
</template>

<script>
import BlogComponent from "@/components/BlogComponent.vue";
import BlogButtonComponent from "@/components/BlogButtonComponent.vue";

export default {
  name: "WhyGo.vue",
  components: {
    BlogComponent,
    BlogButtonComponent,
  },
};
</script>
