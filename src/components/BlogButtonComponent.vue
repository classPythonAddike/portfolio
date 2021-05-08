<template>
  <div>
    <router-link to="/blog" class="redirectbutton">
      Back to Blog Page
    </router-link>
  </div>
</template>

<script>
export default {
  name: "BlogButtonComponent",
};
</script>

<style scoped>
.redirectbutton {
  padding: 1% 5%;
  font-family: Cabin, Consolas, "Times New Roman";
  font-size: 15px;
  font-weight: 400;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  border: 1px solid #000000;
  color: #ffffff;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 200ms;
}

.redirectbutton:hover {
  background: #eeeeee;
  border: 1px solid #eeeeee;
  color: #000000;
  transition: background 200ms;
  font-weight: bold;
}

div {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
