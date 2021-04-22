<template>
  
  <div class="blogcontainer">
    <router-link :to="post" class="blogredirect">
      <h2> {{ title }} </h2>
      <slot>lorem ipsum</slot>
      <p> View Full Post </p>
    </router-link>
  </div>

</template>

<script>

export default {
  name: 'BlogPost',
  props: {
    title: String,
    post: String,
  }
}

</script>

<style scoped>

.blogcontainer {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

.blogredirect {
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
  text-decoration: none;
  color: black;
}

.blogredirect:hover {
  background-color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  transition: all 0.5s ease;
  transform: scale(1.1, 1.1);
}

p {
  color: #319ce4;
  text-align: center;
  width: 100%;
}

@media screen and (max-width: 590px) {
  
  h2 {
    font-size: 19px;
  }

  .blogredirect {
    font-size: 15px;
  }

}

</style>
