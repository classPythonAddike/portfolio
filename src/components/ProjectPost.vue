<template>
  
  <div class="container">
    <a :href="redirect" class="card">
      <div class="place">
        
        <h2 class="item">{{ title }}</h2>
        
        <div class="ig"><img src="..\assets\star.png"></div>
        <p class="it">
          {{ stars }}
        </p>

      </div>
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
    'reponame': String,
  },
  data() {
    return {
      url: "https://api.github.com/repos/" + this.reponame,
      stars: 0
    }
  },
  mounted() {
    fetch(this.url).then(
        data => {
          return data.json()
        }
    ).then(
      result => {
       this.stars = result.stargazers_count
      }
    )
  }
}

</script>

<style scoped>

.place {
  display: flex;
}

.ig {
  width: 100%;
}

img {
  float: right;
  width: 24px;
  height: 24px;
  padding-top: 15px;
  padding-right: 5px;
}

p {
  float: right;
}

.item {
  width: 200%;
}

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

@media screen and (max-width: 590px) {
  .card {
    font-size: 15px;
  }

  h2 {
    font-size: 19px;
  }

  img {
    padding-top: 14px;
  }
}

</style>
