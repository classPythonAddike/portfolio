<template>
  <div id="nav">
    <ul> 
      <li>
        <a href="https://www.github.com/classPythonAddike" class="right-align">
          Contact
        </a>
      </li>
      
      <li>
        <router-link to="/" class="right-align" @click="scrollToSection('projectdesc', 0)">
          Projects
        </router-link>
      </li>
      
      <li>
        <router-link to="/" class="right-align" @click="scrollToSection('aboutdesc', 30)">
          About
        </router-link>
      </li>

      <li>
        <router-link to="/blog" class="right-align">
          Blog
        </router-link>
      </li>

      <li>
        <router-link to="/" class="left-align" v-if="width>590">
          <img :src="image" class="nav-img">
        </router-link>
      </li>

      <li>
        <router-link to="/" class="left-align" v-if="width>420">
          <br>class PythonAddict
        </router-link>
      </li>

    </ul>
  </div>

  <router-view />
</template>

<script>
export default {

  data() {
    return {
      image: null,
      image_number: null,
      width: 0
    }
  },

  methods: {
    getImg() {
      let num = Math.floor(Math.random() * 100)
      let image =
        "https://randomuser.me/api/portraits/med/men/" +
        num.toString() +
        ".jpg"
      this.image_number = num.toString()
      return image
    },
    scrollToSection(id, num) {
      this.$router.push("/")
      let el = document.getElementById(id)
      window.scrollTo({top: el.getBoundingClientRect().top - num, behavior: 'smooth'})
    },
    changeWidth(e) {
      this.width = window.innerWidth
    }
  },

  mounted() {
    this.image = this.getImg()
    this.width = window.innerWidth
    window.addEventListener("resize", this.changeWidth)
  }
};

</script>

<style>

* {
  outline: none;
}

#nav {
  width: 100%;
  height: 10%;
  background-color: #141414;
}

#nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: max-content;
}

#nav li .right-align {
  display: inline;
  float: right;
  font-family: Cabin, Consolas, "Times New Roman";
  font-size: 18px;
  color: #ffffff;
  text-align: center;
  padding: 22.5px 16px;
  text-decoration: none;
}

#nav li .nav-img {
  float: left;
  display: inline;
  text-align: center;
  padding: 10px, 16px;
  margin: 10px;
  border-radius: 50%;
  border: 3px solid #141414;
  /*border: 3-x solid #898989;*/
  height: 36px
}

#nav li .left-align {
  font-family: Cabin, Consolas, "Times New Roman";
  font-size: 18px;
  float: left;
  color: #ffffff;
  text-align: center;
  padding: 20px, 16px;
  text-decoration: none;
}

#nav li .right-align:hover {
  background-color: #ffffff;
  color: #000000;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #141414;
  border-radius: 1px;
  background: #141414
}
 
::-webkit-scrollbar-thumb {
  background: #353535; 
  border-radius: 1px;
}

::-webkit-scrollbar-thumb:hover {
  background: #000000; 
}



@media screen and (max-width: 590px) {
  #nav li .right-align {
    padding: 5px, 4px;
    font-size: 14px;
  }

  #nav li .left-align {
    padding: 5px, 4px;
    font-size: 14px;
    margin-left: 4px;
    margin-top: 4px;
  }
}

@media screen and (max-width: 420px) {
  #nav ul {
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
  }
}

</style>
