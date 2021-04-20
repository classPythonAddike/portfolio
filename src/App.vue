<template>
  <div id="nav">
    <ul>
      
      <li><router-link to="/" class="right-align">Contact</router-link></li>
      <li><router-link to="/" class="right-align">Projects</router-link></li>
      <li><router-link to="/" class="right-align">About</router-link></li>
      <li><router-link to="/" class="right-align">Home</router-link></li>

      <li>
        <router-link to="/" class="left-align">
          <img :src="image" class="nav-img">
        </router-link>
      </li>

      <li><router-link to="/" class="left-align"><br>class PythonAddict</router-link></li>

    </ul>
  </div>

  <router-view />
</template>

<script>
export default {

  data() {
    return {
      image: null,
      image_number: null
    };
  },

  methods: {
    getImg() {
      let num = Math.floor(Math.random() * 100);
      let image =
        "https://randomuser.me/api/portraits/med/men/" +
        num.toString() +
        ".jpg";
      this.image_number = num.toString();
      return image;
    },
  },

  mounted() {
    this.image = this.getImg()
  }
};

</script>

<style>

#nav {
  width: 100%;
  height: 10%;
  background-color: #141414;
  position: fixed;
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
  border: 3px solid #898989;
  height: 36px
}

#nav li .left-align {
  font-family: Cabin, Consolas, "Times New Roman";
  font-size: 18px;
  float: left;
  display: inline;
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

</style>
