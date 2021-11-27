<template>
  <div class="wrapper w-11/12 sm:w-9/12 list-complete-item">
    <div class="flex justify-evenly">
      <!--変更可能にしてLSに保存するならここを修正-->
      <!-- <input
         class="border-blue-800 border-2 w-3/5 h-12 rounded-md my-4"
         type="text"
         @change="onChanges"
         v-model="idea_txt"
        /> -->
      <h1
        class="border-blue-800 border-2 w-11/12 h-12 rounded-md my-4 leading-10"
      >
        {{ idea_txt }}
      </h1>

      <button
        class="
          btn
          text-green-500
          ml-4
          mt-5
          px-3
          h-10
          border-2 border-green-500
          hover:bg-green-200
          cursor-pointer
        "
        @click="submit_sche"
      >
        <transition>
          <i v-if="data.show" class="fas fa-check"></i>
        </transition>
      </button>

      <button
        class="
          btn
          text-red-500
          ml-4
          mt-5
          px-3
          h-10
          border-2 border-red-500
          hover:bg-red-200
          cursor-pointer
        "
        @click="sche_delete"
      >
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>
  </div>
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

/*Move*/
.list-complete-item {
  transition: all 1s;
  display: inline-block;
}
.list-complete-enter,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

type DataType = {
  show: boolean;
};

type Props = {
  idea_txt: string;
  number: number;
};

export default defineComponent({
  name: 'Schedule',

  props: {
    idea_txt: String,
    number: Number,
  },

  setup: (props: Props, context) => {
    //data
    const data = reactive<DataType>({
      show: true,
    });

    //methods
    const submit_sche = (): void => {
      data.show = false;

      setTimeout(() => {
        data.show = true;
      }, 50);

      setTimeout(() => {
        context.emit('check-event', props.idea_txt);
        context.emit('delete-event', props.number);
      }, 500);
    };

    const sche_delete = (): void => {
      context.emit('delete-event', props.number);
    };

    return { data, submit_sche, sche_delete };
  },
});
</script>
