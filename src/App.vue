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
      v-for="(idea,index) in idea_ar" 
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
      loop:3,
      idea_ar:[], //実行予定配列
      idea_excuted:[]//実行済配列
    };
  },

  watch: {
     idea_ar: {
      handler: function (next) {
        localStorage.setItem("idea_ar", JSON.stringify(next));
      },
      deep: true,
    }
  },

  methods: {
    formAction(idea) {
      this.idea_ar.push(idea);
    },

    DeleteAction(number){
    const S_IDEA = JSON.parse(localStorage.getItem('idea_ar'));
      if (S_IDEA) {
      S_IDEA.splice(number,1);
      localStorage.setItem("idea_ar", JSON.stringify(S_IDEA));
    }
      // localStorage.removeItem("idea_ar");
      window.location.reload();
    }

  },

  created: function () {
   const S_IDEA = localStorage.getItem("idea_ar");
    if (S_IDEA) {
      this.idea_ar = JSON.parse(S_IDEA);
    }
  },
};
</script>