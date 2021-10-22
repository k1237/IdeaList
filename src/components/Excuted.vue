<template> 
        <div class="wrapper text-center mb-16">
         <input
            class="border-blue-800 border-2 w-3/5 h-12 rounded-md my-4"
            type="text"
            placeholder="ここに実行済アイデアを表示"
            />

               <a
             href=""
             class="
             btn
             text-red-500
             ml-4
             px-3
             border-2 border-red-500
             hover:bg-red-200
             "
            ><i class="fas fa-trash-alt"></i></a>
         </div>
</template>

<script>
export default {
  name: "Excuted",
  props: {

  },

  data() {
    return {
      
    };
  },
};
</script>