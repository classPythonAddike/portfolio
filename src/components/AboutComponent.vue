<template>
  <div class="container" id="aboutdesc">
    <div class="about">
      <h2 class="aboutdesc">About Me</h2>
      <p class="aboutdesc">
      Hi! I’m class PythonAddict, a programmer passionate about Desktop App Dev, and Web Apps! I currently live in India, and being 16, I have fluent control over the English language.
      
      <br><br>
      
      I dabble in a lot of languages, including Python, C#, Go, Javascript, Typescript, QBasic, Visual Basic and C++ but I mainly use these 4 languages -
      
      <br><br>
      
      <strong>Python</strong> - Python was the first language I actively learned, and my favourite by far. I use it for just about everything - developing gui’s with PyQt5 and Tkinter, writing web apps with Flask and Quart, writing interpreters and transpilers, programming challenges, simple games, etc.
      
      <br><br>
      
      <strong>Golang</strong> - Golang is known for simplicity, and this is one of the reasons I love it. I mainly use it for writing API’s, but also to program algorithms when I require speed!
      
      <br><br>
      
      <strong>C#</strong> - C# was the second language I learnt, and ever since then, I’ve grown addicted to it nearly as much as I like Python. I use C# mainly for desktop apps with Windows Forms, but I’ve also used it in a couple of other projects, including interpreters and transpilers!
      
      <br><br>
     
      <strong>Javascript</strong> - I learnt Javascript early on, but only started to use it once I learnt Vue.js. I used it write large web applications, uptill then I’d only used plain ol’ Javascript and Html. Vue.js is the framework I use regardless of my project requirements or size, as I find very intuitive and easy to use!
      
      <br><br>

      Other than Computer Science, I'm also skilled in subjects like Math, Physics, and Chemistry. I enjoy sports like roller-skating and cycling, and revel in intellectual puzzles!
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AboutComponent',
  mounted() {
    //console.log(this.$refs)
  }
}

</script>

<style scoped>

.container {
  display: flex;
  width: 100%;
  justify-content: center;
}

.about {
  font-family: Cabin, Consolas, "Times New Roman";
  font-weight: 400;
  font-size: 18px;
  background-color: white;
  width: 85%;
  border-radius: 5px;
  padding: 30px;
  margin-bottom: 60px;
}

@media screen and (max-width: 590px) {

  h2 {
    font-size: 20px;
  }

  p {
    font-size: 15px;
  }

  .about {
    margin-bottom: 20px;
  }
}

</style>
