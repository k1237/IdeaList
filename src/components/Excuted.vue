<template> 
       <div class="wrapper text-center" >
        <div class="flex justify-evenly">
        <!--変更可能にしてLSに保存するならここを修正-->
         <!-- <input
         class="border-blue-800 border-2 w-3/5 h-12 rounded-md my-4"
         type="text"
         @change="onChanges"
         v-model="idea_txt"
        /> -->
        <h1  class="border-blue-800 
              border-2 w-4/5 h-12 
              rounded-md my-4 leading-10">
        {{Excuted}}</h1>

         <a class="
            btn
            text-red-500
            ml-4
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