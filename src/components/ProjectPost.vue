<template>
  
  <h2>{{ title }}</h2>
  <slot>Hello World, this is default</slot>
</template>

<script>

export default {
  name: 'ProjectPost',
  props: {
    'title': String,
    }
}

</script>
