<template>
  <div class="mt-8 mb-16">
    <ul class="flex justify-evenly">
      <router-link to="/IdeaList/memo">
        <li
          id="memo"
          class="bg-green-400 btn hover:bg-green-300 text-xs sm:text-lg"
          @click="
            zoomInit();
            zoomMemo();
          "
        >
          メモ帳
        </li>
      </router-link>

      <router-link to="/IdeaList">
        <li
          id="idea"
          class="bg-indigo-700 btn hover:bg-blue-400 text-xs sm:text-lg"
          @click="
            zoomInit();
            zoomIdea();
          "
        >
          アイデア
        </li>
      </router-link>

      <router-link to="/IdeaList/schedule">
        <li
          id="schedule"
          class="bg-yellow-400 btn hover:bg-yellow-300 text-xs sm:text-lg"
          @click="
            zoomInit();
            zoomSche();
          "
        >
          実行予定
        </li>
      </router-link>

      <router-link to="/IdeaList/excuted">
        <li
          id="excuted"
          class="bg-pink-400 btn hover:bg-pink-300 text-xs sm:text-lg"
          @click="
            zoomInit();
            zoomEx();
          "
        >
          実行済
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavItem',

  methods: {
    zoomInit() {
      document.getElementById('idea').classList.remove('zoom');
      document.getElementById('memo').classList.remove('zoom');
      document.getElementById('schedule').classList.remove('zoom');
      document.getElementById('excuted').classList.remove('zoom');
    },

    zoomMemo() {
      document.getElementById('memo').classList.add('zoom');
    },

    zoomIdea() {
      document.getElementById('idea').classList.add('zoom');
    },

    zoomSche() {
      document.getElementById('schedule').classList.add('zoom');
    },

    zoomEx() {
      document.getElementById('excuted').classList.add('zoom');
    },
  },
};
</script>
