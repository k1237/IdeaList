<template>
  <div class="my-16">
    <ul class="flex justify-evenly">
      
      <router-link to="/memo">
      <li class="bg-green-400 btn hover:bg-green-300">メモ帳</li>
      </router-link>
      
      <router-link to="/">
        <li class="bg-indigo-700 btn hover:bg-blue-400">アイデア</li>
      </router-link>
      
      <router-link to="/schedule"><li class="bg-yellow-400 btn hover:bg-yellow-300"> 実行予定</li></router-link>

      <router-link to="/excuted"><li class="bg-pink-400 btn hover:bg-pink-300">実行済</li></router-link>

     
    </ul>
  </div>
</template>

<script>
export default {
  name: "Nav",
  props: {

  },
  data() {
    return {

    };
  },
};
</script>
