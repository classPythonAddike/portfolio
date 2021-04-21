<template>
  
  <div class="HomePage">
    
    <div class="img_div">
      <img :src="img_src" class="profile">
    </div>
    
    <div class="Heading">
      <h2 class="HomePageHeading">
        Hi there! I'm class PythonAddict
      </h2>
    </div>

    <div class="desc_div">
      <p class="desc">
        A student programmer passionate about Desktop App Development, and API’s
      </p>
    </div>
    
    <div class="buttons_div">
      <button class="redirectbutton" id="about" @click="scrollToSection('aboutdesc', 30)">
        About Me
      </button>
      <button class="redirectbutton" id="project" @click="scrollToSection('projectdesc', 0)">
        My Projects
      </button>
      <button class="redirectbutton" id="contact">Contact Me</button>
    </div>

  </div>

</template>

<script>

export default {
  name: 'HomeComponent',

  data() {
    return {
      img_src: this.modifyImg(this.$parent.$parent.$parent.$data.image_number)
    }
  },
  methods: {
    modifyImg(number) {
      let image = "https://randomuser.me/api/portraits/men/" + 
         number.toString() +
        ".jpg";
      return image
    },
      scrollToSection(id, num) {
        this.$router.push("/")
        let el = document.getElementById(id)
        window.scrollTo({top: el.getBoundingClientRect().top - num, behavior: 'smooth'})
    }
  }
}

</script>

<style>

.desc {
  font-size: 20px;
  font-family: Cabin, Consolas, "Times New Roman";
  font-weight: 400;
  width: 100%;
  text-align: center;
  margin: 0;
  padding: 0;
}

div .HomePage {
  align-contents: center;
  margin-bottom: 16%;
}

.HomePageHeading {
  font-family: Cabin, Consolas, "Times New Roman";
  font-weight: 400;
}

.img_div {
  display: flex;
  justify-content: center;
  padding-top: 11%;
}

.Heading {
  display: flex;
  justify-content: center;
  padding: 1%;
  padding-bottom: 0;
}

.buttons_div {
  display: flex;
  justify-content: center;
  padding: 3%;
}

.profile {
  height: 15%;
  border-radius: 50%;
  border: 5px solid #000000;
}

body {
  background-image: url("../assets/background-img.svg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  background-attachment: fixed;
}

.redirectbutton {
  padding: 1% 5%;
  margin: 20px;
  font-family: Cabin, Consolas, "Times New Roman";
  font-weight: 400;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  border: 1px solid #000000;
  color: #ffffff;
  outline: none;
  cursor: pointer;

  transition: all 200ms;
}

.redirectbutton:hover {
  transform: scale(1.2, 1.2);
  transition: all 200ms;
}

</style>
