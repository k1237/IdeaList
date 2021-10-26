<template>
  <div class="wrapper">
    <Header />
    <Nav />
  </div>

  <div class="wrapper text-center mb-16">
    <router-view
      v-for="(idea,index) in idea_ar"
      v-on:form-event="formAction"
      v-on:change-event="changeAction"
      v-bind:key="index"
      v-bind:Idea="idea"
      v-bind:number="index"
      name="idea"
    ></router-view>

    <router-view
      name="schedule"
      v-for="(idea,index) in idea_sche" 
      v-bind:key="index"
      v-bind:idea_txt="idea"
      v-bind:number="index"
      v-on:delete-event="DeleteAction"
    ></router-view>

    <router-view name="excuted"></router-view>

    <router-view name="memo"></router-view>
  </div>
</template>

<style>
.wrapper {
  width: 85%;
  margin: 0 auto;
  background-color: white;
  border-radius: 10px;
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
      idea_ar:Array(10).fill(''),//アイデア用配列
      idea_sche:[], //実行予定配列
      idea_excuted:[]//実行済配列
    };
  },

  watch: {
    idea_ar: {//アイデア帳配列を監視LSに保存
      handler: function (next) {
        localStorage.setItem("idea_ar", JSON.stringify(next));
      },
      deep: true,
    },
     
    idea_sche: {//実行予定配列を監視LSに保存
      handler: function (next) {
        localStorage.setItem("idea_sche", JSON.stringify(next));
      },
      deep: true,
    }
  },

  methods: {

    changeAction(number,idea){//アイデア帳値を配列に保存
      this.idea_ar[number] = idea;
    },

    formAction(idea) {//実行予定値を配列に格納
      this.idea_sche.push(idea);
    },

    DeleteAction(number){//該当実行予定値削除
    const S_IDEA = JSON.parse(localStorage.getItem('idea_sche'));
    if (S_IDEA) {
      S_IDEA.splice(number,1);
      localStorage.setItem("idea_sche", JSON.stringify(S_IDEA));
    }
    // localStorage.removeItem("idea_sche");
      window.location.reload();
    }

  },

  created: function () {//各LSの値を復元
    const IDEA = localStorage.getItem("idea_ar");
    if (IDEA) {
      this.idea_ar= JSON.parse(IDEA);
     }

    const S_IDEA = localStorage.getItem("idea_sche");
     if (S_IDEA) {
      this.idea_sche= JSON.parse(S_IDEA);
     }
  },
};
</script>