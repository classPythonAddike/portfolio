<template>
 
  <div class="h2container" id="projectdesc">
    <h2>My Projects</h2>
  </div>

  <ProjectPost title="BrainF Transpiler" redirect="https://github.com/classPythonAddike/brainfcompiler">
    <p>
      I wrote a BrainF-to-C transpiler, with golang. It transpiles given brainf code to the corresponding C code, and then compiles it with the gcc/g++ compiler. In the process, it performs a couple of optimizations like shortening the instruction set, and introducing special commands. It is written as a CLI with the flag module.
    </p>
  </ProjectPost>

  <ProjectPost title="QBetterBasic" redirect="https://github.com/classPythonAddike/qbetterbasic">
    <p>
      QBetterBasic is a programming language designed for code-golfing, of which I am the author. It has many of the features of languages like Python and Ruby, and more! Please note, it is still in the dev-phase
    </p>
  </ProjectPost>

  <ProjectPost title="Optimized BrainF Interpreter" redirect="https://github.com/classPythonAddike/OptimizedBFInterpreter">
    <p>
      I am currently writing an optimized brainf interpreter, in C#. It is under development, and I hope to make one of the fastest of its kind!
    </p>
  </ProjectPost>
</template>

<script>

import ProjectPost from "@/components/ProjectPost.vue";

export default {
  name: 'ProjectComponent.vue',
  components: {
    ProjectPost
  }
}

</script>

<style scoped>

.h2container {
  font-family: Cabin, Consolas, "Times New Roman";
  font-size: 25px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  margin: 0;
}

h2 {
  text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
}

</style>
