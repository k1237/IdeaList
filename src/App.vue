<template>
<transition>
  <div class="wrapper" v-if="feedIn">
    <Header />
    <Nav />
  </div>
</transition>  


<transition>
  <div class="wrapper text-center mb-16" v-if="feedIn">
    <router-view name="memo"></router-view>
    
    <router-view
      v-for="(idea, index) in idea_ar"
      v-on:form-event="formAction"
      v-on:change-event="changeAction"
      v-bind:key="index"
      v-bind:Idea="idea"
      v-bind:number="index"
      v-on:del-event="delAction"
      name="idea"
    ></router-view>

    <router-view
      name="schedule"
      v-for="(idea, index) in idea_sche"
      v-bind:key="index"
      v-bind:idea_txt="idea"
      v-bind:number="index"
      v-on:check-event="checkAction"
      v-on:delete-event="deleteAction"
    ></router-view>

    <router-view
      name="excuted"
      v-for="(excuted, index) in idea_excuted"
      v-bind:key="index"
      v-bind:Excuted="excuted"
      v-bind:number="index"
      v-on:excuted-delete="exdeleteAction"
    ></router-view>
  </div>
</transition>  
</template>

<style>
.wrapper {
  width: 70%;
  margin: 0 auto;
  background-color: white;
  border-radius: 10px;
}

/*フェードイン*/
.v-enter-active {
  animation: opacity 0.75s;
}

.v-leave-active {
  animation: opacity 0.75s reverse;
}

@keyframes opacity {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>

<script>
import Header from "./components/Header.vue";
import Nav from "./components/Nav.vue";

export default {
  name: "App",
  components: {
    Header,
    Nav,
  },

  data() {
    return {
      feedIn:false,
      idea_ar: Array(6).fill(""), //アイデア用配列
      idea_sche: [], //実行予定配列
      idea_excuted: [], //実行済配列
    };
  },

  watch: {
    idea_ar: {
      //アイデア帳配列を監視しLSに保存
      handler: function (next) {
        localStorage.setItem("idea_ar", JSON.stringify(next));
      },
      deep: true,
    },

    idea_sche: {
      //実行予定配列を監視しLSに保存
      handler: function (next) {
        localStorage.setItem("idea_sche", JSON.stringify(next));
      },
      deep: true,
    },

    idea_excuted: {
      //実行済配列を監視LSしに保存
      handler: function (next) {
        localStorage.setItem("idea_excuted", JSON.stringify(next));
      },
      deep: true,
    },
  },

  methods: {
    changeAction(number, idea) {
      //アイデア帳値を配列に保存
      this.idea_ar[number] = idea;
    },

    delAction(number) {
      //該当アイデア値を削除 
      this.idea_ar[number] = "";
    },

    formAction(idea) {
      //アイデア値を実行予定配列に追加
      this.idea_sche.push(idea);
    },

    checkAction(idea_txt) {
      //実行予定値を実行済配列に追加
      this.idea_excuted.push(idea_txt);
    },

    deleteAction(number) {
      //実行予定値削除
      this.idea_sche.splice(number, 1);
    },

    exdeleteAction(number) {
      //完了済値削除
      this.idea_excuted.splice(number, 1);
    },
  },

  created: function () {
    //各LSの値を復元
    const IDEA = localStorage.getItem("idea_ar");
    if (IDEA) {
      this.idea_ar = JSON.parse(IDEA);
    }

    const S_IDEA = localStorage.getItem("idea_sche");
    if (S_IDEA) {
      this.idea_sche = JSON.parse(S_IDEA);
    }

    const EXCUTED = localStorage.getItem("idea_excuted");
    if (EXCUTED) {
      this.idea_excuted = JSON.parse(EXCUTED);
    }
  },

  mounted() {
    //更新フェードイン
    this.feedIn = true;
  },
};
</script>