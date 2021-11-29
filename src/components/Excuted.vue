<template>
  <div class="wrapper w-11/12 sm:w-9/12">
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
        {{ Excuted }}
      </h1>

      <a
        class="
          btn
          text-red-500
          ml-2
          mt-5
          px-3
          h-10
          border-2 border-red-500
          hover:bg-red-200
          cursor-pointer
        "
        @click="excutedDelete"
        ><i class="fas fa-trash-alt"></i
      ></a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

type Props = {
  Excuted: string;
  number: number;
};

export default defineComponent({
  name: 'ExcutedItem',
  props: {
    Excuted: String,
    number: Number,
  },

  setup: (props: Props, context) => {
    // methods
    const excutedDelete = (): void => {
      context.emit('excuted-delete', props.number);
    };

    return { excutedDelete };
  },
});
</script>
