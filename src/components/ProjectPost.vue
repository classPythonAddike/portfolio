<template>
  
  <div class="container">
    <a :href="redirect" class="card">
      <h2>{{ title }}</h2>
      <slot>lorem ipsum</slot>
    </a>
  </div>

</template>

<script>

export default {
  name: 'ProjectPost',
  props: {
    'title': String,
    'redirect': String,
    }
}

</script>

<style scoped>

.container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

.card {
  font-family: Cabin, Consolas, "Times New Roman";
  font-weight: 400;
  font-size: 18px;
  width: 70%;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 10px;
  transition: all 0.5s ease;
}

.card:hover {
  background-color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  transition: all 0.5s ease;
  transform: scale(1.1, 1.1);
}

a {
  text-decoration: none;
  color: black;
}

</style>
