<template>
     <div class="text-right mt-16">
     <button class="bg-indigo-700 
                    btn
                    hover:bg-blue-400
                    shadow-lg">ログイン</button>
                    
     </div>
     <h1 class="text-5xl 
              text-blue-700 
              text-center 
              font-bold
              ">IdeaList</h1>


    <!--Vuexの練習-->
     <!-- <p>{{$store.state.message}}</p> -->
    <!-- <p>mutationTEST</p>
    <input type="submit" name="" id="" class="bg-indigo-700 btn"
            value="COUNT" @click="$store.commit('doit')" />
            <input type="submit" name="" id="" class="bg-indigo-700 btn"
            value="Reset" @click="$store.commit('reset')" />
            <p>{{$store.state.counter}}</p> -->

</template>



<script>
export default {
  name: 'Header',
  props: {
  
  },

  data() {
    return {
    
    }
  }
}
</script>
