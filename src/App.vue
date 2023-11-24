<script setup>
import Form from "./components/Form.vue";
import ThanksCard from "./components/ThanksCard.vue";
import { useFormStore } from "./store/form";

const form = useFormStore();
</script>

<template>
  <div class="bg-[#242742] w-full h-full min-h-screen flex items-center justify-center">
    <Form v-if="form.showForm"/>

    <ThanksCard v-else />
  </div>
</template>
