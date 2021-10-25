<template >
  <div>
    <input
      class="border-blue-800 border-2 w-3/5 h-12 rounded-md my-4"
      type="text"
      placeholder="ここにアイデアを記入"
      @change="onChanges"
      v-model="idea"
    />

    <a
      class="
        btn
        text-yellow-500
        ml-4
        px-3
        border-2 border-yellow-500
        hover:bg-yellow-300
      "
      @click="submit_idea"
      ><i class="fas fa-star"></i></a>

   
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
      ><i class="fas fa-trash-alt"></i
    ></a>
  </div>
</template>

<script>
export default {
  name: "Idea",
  props: {
    localidea: String,
  },

  data() {
    return {
      idea: "",
    };
  },

  mounted() {
    if (localStorage.name) {
      this.idea = localStorage.name;
    }
  },

  watch: {
    idea(newName) {
      localStorage.name = newName;
    },
  },

  methods: {
    submit_idea() {
      this.$emit("form-event", this.idea);
   },

    onChanges() {//複数のフォームの値をストレージに保存するには？
      // this.$emit("local-event", this.idea);
    },
  },
};
</script>