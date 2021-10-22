<template>
  <div class="wrapper">
    <Header />
    <Nav />
  </div>

  <div class="wrapper text-center mb-16">
    <router-view
      v-for="n in loop"
      v-on:form-event="formAction"
      v-bind:key="n"
      name="idea"
    ></router-view>

    <router-view
      name="schedule"
      v-for="idea in idea_ar"
      v-bind:key="idea"
      v-bind:idea_txt="idea"
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
      loop: 10,
      idea_txt:[],//アイデア用配列
      idea_ar: [], //実行予定用配列
    };
  },

  watch: {
    //ローカルストレージに保存
  },

  methods: {
    formAction(idea) {
      this.idea_ar.push(idea);
    },
  },

  created: function () {
    //次回アクセス時に復元できるようにする
  },
};
</script>
