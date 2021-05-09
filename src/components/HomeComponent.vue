<template>
  <div class="HomePage">
    <p v-if="show" class="tooltip">Image obtained from randomuser.me</p>
    <div class="img_div">
      <img
        :src="img_src"
        class="profile"
        @mouseover="show = true"
        @mouseleave="show = false"
      />
    </div>

    <div class="Heading">
      <h2 class="HomePageHeading">{{ heading }}</h2>
    </div>

    <div class="desc_div">
      <p class="desc">
        {{ text }}
      </p>
    </div>

    <div class="buttons_div">
      <button
        class="redirectbutton"
        id="about"
        @click="scrollToSection('aboutdesc', 30)"
      >
        About Me
      </button>
      <button
        class="redirectbutton"
        id="project"
        @click="scrollToSection('projectdesc', 0)"
      >
        My Projects
      </button>
      <a
        href="https://www.github.com/classPythonAddike"
        class="redirectbutton"
        id="contact"
      >
        Contact Me
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeComponent",

  data() {
    return {
      img_src: this.modifyImg(this.$parent.$parent.$parent.$data.image_number),
      show: false,
      fullheading: "Hi there! I'm class PythonAddict!",
      heading: "",
      i: 0,
      fulltext:
        "A student programmer passionate about Desktop App Development, and API’s!",
      text: "",
      k: 0,
    };
  },
  methods: {
    modifyImg(number) {
      let image =
        "https://randomuser.me/api/portraits/men/" + number.toString() + ".jpg";
      return image;
    },
    scrollToSection(id, num) {
      this.$router.push("/");
      let el = document.getElementById(id);
      window.scrollTo({
        top: el.getBoundingClientRect().top - num,
        behavior: "smooth",
      });
    },
    typetext() {
      if (this.i < this.fullheading.length) {
        this.heading += this.fullheading.charAt(this.i);
        this.i++;
        let wait = Math.random() * 100 + 50;
				let chr = this.fullheading.charAt(this.i - 1);
        if (chr == '!' || chr == ',') {
          wait += 500;
        }
        setTimeout(this.typetext, wait);
      } else if (this.k < this.fulltext.length) {
        this.text += this.fulltext.charAt(this.k);
        this.k++;
        let wait = Math.random() * 100 + 50;
				let chr = this.fulltext.charAt(this.k - 1);
        if (chr == '!' || chr == ',') {
          wait += 500;
        }
        setTimeout(this.typetext, wait);
      }
    },
  },

  mounted() {
    console.log("mounted!");
    this.typetext();
  },
};
</script>

<style>
.tooltip {
  width: auto;
  margin-left: 50%;
  margin-top: 7%;
  transform: translate(-50%, -50%);
  height: min-content;
  background-color: #000000;
  text-align: center;
  color: #ffffff;
  border: 1px solid #000000;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 6px;
  position: absolute;
  font-family: Cabin, Consolas, "Times New Roman";
  font-size: 15px;
}

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
  align-content: center;
  margin-bottom: 8%;
}

.HomePageHeading {
  font-family: Cabin, Consolas, "Times New Roman";
  font-weight: 400;
  width: 100%;
  text-align: center;
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

@media screen and (max-width: 590px) {
  .redirectbutton {
    font-size: 12px;
  }

  .HomePageHeading {
    font-size: 20px;
  }

  .desc {
    font-size: 16px;
  }
}
</style>
