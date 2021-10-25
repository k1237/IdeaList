<template>
   <div class="wrapper text-center" >
      <div class="flex justify-evenly">
         <h1  class="border-blue-800 
              border-2 w-4/5 h-12 
              rounded-md my-4 leading-10">
         {{idea_txt}}</h1>

    <a
      class="
        btn
        text-green-500
        ml-4
        mt-5
        px-3
        h-10
        border-2 border-green-500
        hover:bg-green-200
        cursor-pointer
      "
      @click="submit_sche"
      >
       <transition>
         <i v-if="show" class="fas fa-check"></i>
       </transition></a>

    <a
      href=""
      class="
        btn
        text-red-500
        ml-4
        mt-5
        px-3
        h-10
        border-2 border-red-500
        hover:bg-red-200
      "
      @click="$emit('delete-click')"
      ><i class="fas fa-trash-alt"></i
    ></a>
    </div>
  </div>
</template>

<style scoped>
.v-enter-active {
  animation: bounce-in .5s;
}
.v-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(3);
  }
  100% {
    transform: scale(1);
  }
}
</style>

<script>
export default {
  name: "Schedule",
  props: {
    idea_txt:String,
  },

  data() {
    return {
      show:true,
    };
    
  },

  methods:{
    submit_sche(){
          this.show=false,//ここをfalse⇨trueにすると値が残る
          setTimeout(() => {
          this.show = true
          }
          ,50);
    },
  }
  
};


</script>
