<template>
  <h1 class="font-bold">好きなことを書いて頭の整理をする</h1>
  <textarea
    name=""
    id=""
    class="border-2 w-11/12 h-96 border-black rounded"
    placeholder="【例文】
今日出すアイデアのテーマ：ポートフォリオ
最近の悩みは？⇨よく使うコードが整理できない⇨コードを整理するメモアプリを作る！など好きなことを書いて頭を整理しよう。"
    v-model="data.memoText"
  ></textarea>
  <br />
  <button
    class="bg-red-500 btn hover:bg-red-300 text-xs sm:text-lg"
    @click="deleteMemo"
  >
    削除
  </button>
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from 'vue';

type DataType = {
  memoText: string;
};

export default defineComponent({
  name: 'MemoItem',

  setup() {
    // data
    const data = reactive<DataType>({
      memoText: '',
    });
  
    // watch
    watch(data, () => localStorage.setItem('memoText', data.memoText));
    // methods(void＝値を返さないメソッド)
    const deleteMemo = (): void => {
      data.memoText = '';
    };
    // created(setup自体をbeforeCreated, createdとして扱うのがいいよう)
    data.memoText = localStorage.getItem('memoText');

    return { data, deleteMemo };
  },
});

</script>
