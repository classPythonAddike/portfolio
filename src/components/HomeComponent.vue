<template>
  
  <div class="HomePage">
    <img :src="img_src" class="profile">

    <h2 class="HomePageHeading">
      Hi there! I'm class PythonAddict
    </h2>

    <p class="desc">
      A student programmer passionate about Desktop App Development, and API’s
    </p>
  
    <button class="redirectbutton" id="about" @click="goTo('/')">About Me</button>
    <button class="redirectbutton" id="project">My Projects</button>
    <button class="redirectbutton" id="contact">Contact Me</button>

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
    goTo(route) {
      this.$router.push(route)
      console.log("Pushed!")
    },
    modifyImg(number) {
      let image = "https://randomuser.me/api/portraits/men/" + 
         number.toString() +
        ".jpg";
      return image
    }
  }
}

</script>

<style>

.desc {
  position: relative;
  font-size: 20px;
  font-family: Cabin, Consolas, "Times New Roman";
  font-weight: 400;
  margin: 0 auto;
  display: flex;
  justify-content: center;

}

div .HomePage {
  align-contents: center;
  position: relative;
  top: 20px;
  height: 100%;
  line-height: 150%;
}

.HomePageHeading {
  font-family: Cabin, Consolas, "Times New Roman";
  font-weight: 400;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

.profile {
  height: 15%;
  border-radius: 50%;
  border: 5px solid #000000;
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

body {
  background-image: url("../assets/background-img.svg");
  background-size: 100%;
}

.redirectbutton {
  padding: 1% 5%;
  font-family: Cabin, Consolas, "Times New Roman";
  font-weight: 400;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  border: 1px solid #000000;
  color: #ffffff;
  outline: none;
  cursor: pointer;
  position: relative;
  transition: all 200ms;
}

.redirectbutton:hover {
  transform: scale(1.2, 1.2);
  transition: all 200ms;
}

#about {
  left: 10%;
  right: 90%;
}

#project {
  left: 20%;
  right: 80%;
}

#contact {
  left: 30%;
  right: 70%;
}

</style>
