<template> 
         <h1 class="font-bold ">好きなことを書いて頭の整理をする</h1>
         <textarea name="" 
                   id="" 
                   class="border-2 
                          w-11/12 
                          h-96
                          border-black
                          rounded"
                   placeholder="【例文】
今日出すアイデアのテーマ：ポートフォリオ
最近の悩みは？⇨よく使うコードが整理できない⇨コードを整理するメモアプリを作る！など好きなことを書いて頭を整理しよう。"
                   v-model="memoText"></textarea>
          <br>
          <button class="bg-red-500 btn 
                  hover:bg-red-300  
                  text-xs 
                  sm:text-lg"
                  @click="deleteAction">削除</button>
         
</template>

<script>
export default {
  name: "Memo",

  watch:{
    memoText:{
      handler: function (next) {
        localStorage.setItem("memoText", JSON.stringify(next));
      },
      deep: true,
    }
  },

  data() {
    return {
      memoText:"",
    };
  },

  methods:{
    deleteAction(){
      this.memoText = "";
    }
  },

  created(){
   const MEMOTEXT = localStorage.getItem("memoText");
    if (MEMOTEXT) {
      this.memoText = JSON.parse(MEMOTEXT);
    }
  }
};
</script>