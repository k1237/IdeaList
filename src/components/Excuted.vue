<template> 
<div class="wrapper w-11/12 sm:w-9/12">
        <div class="flex justify-evenly">
        <!--変更可能にしてLSに保存するならここを修正-->
         <!-- <input
         class="border-blue-800 border-2 w-3/5 h-12 rounded-md my-4"
         type="text"
         @change="onChanges"
         v-model="idea_txt"
        /> -->
        <h1  class="border-blue-800 
              border-2 w-11/12 h-12 
              rounded-md my-4 leading-10">
        {{Excuted}}</h1>

         <a class="
            btn
            text-red-500
            ml-2
            mt-5
            px-3
            h-10
            border-2 border-red-500
            hover:bg-red-200
            cursor-pointer
          "
          @click="excuted_delete"
         ><i class="fas fa-trash-alt"></i></a>
         </div>
  </div>
</template>

<script>
export default {
  name: "Excuted",
  props: {
     Excuted:String,
     number:Number,
  },

  data() {
    return {
      
    };
  },

  methods:{
    excuted_delete(){
      this.$emit("excuted-delete", this.number);
    }
  }
};
</script>