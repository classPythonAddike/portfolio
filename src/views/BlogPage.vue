<template>

  <h2>My Blog</h2>

  <BlogPost title="Hello, World!" post="/blog" v-if="size>0">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit quis mauris ac imperdiet. Aenean eget turpis id  . . .
    </p>
  </BlogPost>

  <BlogPost title="Goodbye World" post="/" v-if="size>1">
    <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit quis mauris ac imperdiet. Aenean eget turpis id  . . .
    </p>
  </BlogPost>

  <BlogPost title="Hello, Earth!" post="/blog" v-if="size>2">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit quis mauris ac imperdiet. Aenean eget turpis id  . . .
    </p>
  </BlogPost>

  <BlogPost title="Goodbye, Earth!" post="/" v-if="size>3">
    <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit quis mauris ac imperdiet. Aenean eget turpis id  . . .
    </p>
  </BlogPost> 

  <div class="buttoncontainer">
    <button class="incrbutton" @click="increase()">
      Show More
    </button>
  </div>

</template>

<script>

import BlogPost from '@/components/BlogPost.vue'

export default {
  name: 'BlogPage',
  components: {
    BlogPost,
  },
  data() {
    return {
      size: 3,
      length: 4,
    }
  },
  methods: {
    increase() {
      if (this.size <= this.length - 3) {
        this.size += 3;
      }
      else if (this.size <= this.length) {
        this.size = this.length
      }
    }
  }
}

</script>

<style scoped>

h2 {
  font-family: Cabin, Consolas, "Times New Roman";
  font-size: 38px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  margin: 40px;
  text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
}

.incrbutton {
  padding: 1% 5%;
  margin: 20px;
  font-family: Cabin, Consolas, "Times New Roman";
  font-size: 15px;
  font-weight: 400;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  border: 1px solid #000000;
  color: #ffffff;
  outline: none;
  cursor: pointer;

  transition: all 200ms;
}

.incrbutton:hover {
  transform: scale(1.2, 1.2);
  transition: all 200ms;
}

.buttoncontainer {
  display: flex;
  justify-content: center;
}

</style>
