<template>
         <div>
             <input class="border-blue-800 
                           border-2 w-3/5 h-12 rounded-md my-4" 
                    type="text"
                    placeholder="ここにアイデアを記入"
                    v-model="idea">
                    
             <a href="" class="btn text-red-500
                               ml-4 px-3
                               border-2
                               border-red-300
                               hover:bg-pink-300"><i class="fas fa-heart"></i></a>
         </div>
</template>

<script>
export default {
  name: "Idea",
  props: {

  },

  data() {
    return {
         idea:'',
    };
  },
};
</script>