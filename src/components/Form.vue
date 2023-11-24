<script setup>
import CardForm from "./CardForm.vue";
</script>

<template>
  <div
    class="w-full max-w-4xl bg-white rounded-none lg:rounded-3xl shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-4"
  >
    <div class="block lg:hidden">
      <img src="/imgs/illustration-sign-up-mobile.svg" alt="" class="w-full" />
    </div>

    <div class="p-4">
      <CardForm />
    </div>

    <div class="hidden lg:block p-4">
      <img
        src="/imgs/illustration-sign-up-desktop.svg"
        alt=""
        class="mx-auto"
      />
    </div>
  </div>
</template>
