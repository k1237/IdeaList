<template>
  <div class="mt-16 pt-4">
    <router-link to="/IdeaList">
      <h1 class="text-5xl text-blue-700 text-center font-bold">IdeaList</h1>
    </router-link>
    <br />
    <p>
      ※このアプリはローカルストレージ版です(１つの端末・ブラウザでしかデータが残らない)
    </p>
    <p>※ログイン版も随時作成予定です(どの端末・ブラウザでもデータが残る)</p>

    <div class="text-right w-11/12">
      <router-link to="/IdeaList/howto">
        <button class="mt-6 underline text-blue-500">操作方法</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>
