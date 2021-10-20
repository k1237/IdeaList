<template>
  <div class="my-16">
    <ul class="flex justify-evenly">
      <li class="bg-indigo-700 btn hover:bg-blue-400">
          <a href="">アイデア</a></li>
      <li class="bg-yellow-400 btn hover:bg-yellow-300">
          <a href="">実行予定</a></li>
      <li class="bg-pink-400 btn hover:bg-pink-300">
          <a href="">実行済</a></li>
      <li class="bg-green-400 btn hover:bg-green-300">
          <a href="">メモ帳</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Nav",
  props: {},
  data() {
    return {};
  },
};
</script>
