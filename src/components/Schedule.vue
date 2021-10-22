<template>
   <div class="wrapper text-center" >
      <div class="flex justify-evenly">
         <h1  class="border-blue-800 
              border-2 w-4/5 h-12 
              rounded-md my-4 leading-10">
         {{idea_txt}}</h1>

    <a
      href=""
      class="
        btn
        text-green-500
        ml-4
        mt-5
        px-3
        h-10
        border-2 border-green-500
        hover:bg-green-200
      "
      ><i class="fas fa-check"></i
    ></a>

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
  </div>
</template>

<script>
export default {
  name: "Schedule",
  props: {
    idea_txt:String,
  },

  data() {
    return {};
  },
};
</script>