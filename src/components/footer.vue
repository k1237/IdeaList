<template>
     <div class="flex justify-evenly">
      <router-link to="/IdeaList/tos">
        <button class="mt-2 underline text-blue-500">利用規約</button> 
      </router-link>

      <router-link to="/IdeaList/privacy">
        <button class="mt-2 underline text-blue-500"> プライバシーポリシー</button>
     </router-link>
     </div>
     <p class="mt-2">&copy; K. 2021.</p>
</template>


<script>
export default {
  name: 'Footer',
}
</script>