<template>
  <div class="wrapper">
    <Header />
    <Nav />
  </div>

  <div class="wrapper text-center mb-16">
    <router-view
      v-for="n in loop"
      v-on:form-event="formAction"
      v-on:local-event="localAction"
      v-bind:key="n"
      name="idea"
    ></router-view>

    <router-view
      name="schedule"
      v-for="idea in idea_ar"
      v-bind:key="idea"
      v-bind:idea_txt="idea"
      @delete-click="DeleteAction"
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
      loop:1,
      idea_ar: [], //実行予定用配列
      // Allidea : [...Array(10)].map((_, i) => ({ id: i-1 + 1 ,txt:''})),
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

    localAction(idea){
        this.localidea = idea;
    },

    DeleteAction(){
      localStorage.removeItem("idea_ar");
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