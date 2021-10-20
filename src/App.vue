<template>
   <div class="wrapper">
      <Header/>
      <Nav/>
   </div>

   <div class="wrapper text-center mb-16">
   <Idea  v-for="n in loop" 
          v-bind:key="n"/>
   </div>

</template>

<style>
.wrapper{
   width:85%;
   margin:0 auto;
   background-color:white;
   border-radius:10px;
}
</style>

<script>
import Header from './components/Header.vue'
import Nav from './components/Nav.vue'
import Idea from './components/Idea.vue'

export default {
  name: 'App',
  components: {
    Header,
    Nav,
    Idea
  },

  data() {
    return {
         loop:7,//アイデアフォーム繰り返し回数
    };
  },
}
</script>
