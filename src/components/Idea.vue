<template>
  <input
    class="
      border-blue-800 border-2
      w-8/12
      sm:w-8/12
      h-12
      rounded-md
      my-2
      break-all
    "
    type="text"
    @change="onChanges"
    v-model="data.idea"
  />

  <!-- <div class="w-11/12 text-right sm:"> -->
  <button
    class="
      btn
      text-yellow-500
      ml-1
      sm:ml-4
      px-3
      border-2 border-yellow-500
      hover:bg-yellow-300
      cursor-pointer
    "
    v-bind:disabled="!canStar"
    @click="submitIdea"
  >
    <transition>
      <i v-if="data.show" class="fas fa-star"></i>
    </transition>
  </button>

  <button
    class="
      btn
      text-red-500
      ml-1
      sm:ml-4
      mt-5
      px-3
      h-11
      border-2 border-red-500
      hover:bg-red-200
    "
    @click="deleteIdea"
  >
    <i class="fas fa-trash-alt"></i>
  </button>
  <!-- </div> -->
</template>

<style scoped>
.v-enter-active {
  animation: bounce-in 0.5s;
}
.v-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(2.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>

<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  watch,
  computed,
  onMounted,
} from 'vue';

type DataType = {
  idea: string;
  show: boolean;
};

type Props = {
  Idea: string;
  number: number;
};

export default defineComponent({
  name: 'IdeaItem',

  props: {
    Idea: String, // LSに保存した入力値
    number: Number,
  },

  setup: (props: Props, context) => {
    // data
    const data = reactive<DataType>({
      idea: '',
      show: true, // アニメーションフラグ
    });

    // watch
    const { Idea } = toRefs(props);
    watch(Idea, (newIdea: string) => {
      data.idea = newIdea;
    });

    // computed
    const canStar = computed(() => data.idea !== '');

    // mounted
    onMounted(() => {
      data.idea = props.Idea;
    });

    // methods
    const submitIdea = (): void => {
      data.show = false; // ここをfalse⇨trueにすると★が残る

      setTimeout(() => {
        data.show = true;
      }, 50);

      setTimeout(() => {
        context.emit('form-event', data.idea, props.number);
      }, 500);
    };

    const deleteIdea = (): void => {
      context.emit('del-event', props.number);
    };

    const onChanges = (): void => {
      context.emit('change-event', props.number, data.idea);
    };

    return { data, canStar, submitIdea, deleteIdea, onChanges };
  },
});

// メモ
// context = 従来（Options API）の this に入っていたプロパティやメソッドの一部が格納されています。
// watchの引数はリアクティブなオブジェクトである必要があるため、props.Idea（今回はstring）は指定できない
// 特定の値をリアクティブで取り出すために、toRefsメソッドを使う
</script>
