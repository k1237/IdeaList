<template >
  <div>
    <input
      class="border-blue-800 border-2 w-3/5 h-12 rounded-md my-4"
      type="text"
      @change="onChanges"
      v-model="idea"
    />

    <a class="
        btn
        text-yellow-500
        ml-4
        px-3
        border-2 border-yellow-500
        hover:bg-yellow-300
        cursor-pointer
      "
      @click="submit_idea"
      > 
      <transition>
       <i  v-if="show" class="fas fa-star" ></i>
      </transition>
      </a>

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
      @click="Delete_Idea"
      ><i class="fas fa-trash-alt" ></i
    ></a>
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
    transform: scale(2.5);
  }
  100% {
    transform: scale(1);
  }
}

/* .v-enter-active {
   animation: bounce 3s reverse infinite;
}
.v-leave-active {
   animation: bounce 3s reverse infinite;
}

@keyframes bounce{
0% { transform: scale(1); }
60% { transform: scale(1); }
70% { transform: scale(2.5); }
80% { transform: scale(1); }
90% { transform: scale(1); }
100% { transform: scale(1); }
} */



</style>


<script>
export default {
  
  name: "Idea",

  props:{
    Idea:String,//LSに保存した入力値
    number:Number,
  },

  data() {
    return {
      idea: "",
      show:true,//アニメーションフラグ
    };
  },

  
  mounted(){
      this.idea = this.Idea //LSの値をv-modelに代入
  },

  watch: {
       
  },

  methods: {
    submit_idea() {
          this.show=false,//ここをfalse⇨trueにすると値が残る
          this.$emit("form-event", this.idea)

          setTimeout(() => {
          this.show = true
          },50
        )
    },

    Delete_Idea(){
        this.$emit("del-event",this.number,this.idea)
    },

    onChanges() {//複数のフォームの値をストレージに保存するには？
         this.$emit("change-event",this.number,this.idea)
    },
  },
};
</script>