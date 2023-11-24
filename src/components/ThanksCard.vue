<script setup>
import { useFormStore } from "../store/form";

const form = useFormStore();

const resetForm = () => {
  form.handleChangeEmail("");
  form.handleChangeShowForm(true);
};
</script>

<template>
  <div
    class="w-full max-w-md bg-white rounded-none lg:rounded-xl shadow-lg p-10 space-y-4 h-screen lg:h-auto flex lg:flex-none justify-between flex-col"
  >
    <div class="mt-24 lg:mt-0 space-y-5">
      <i><img src="/imgs/icon-success.svg" alt="" /></i>

      <h1 class="text-4xl font-bold text-[#242742]">Thanks for subscribing!</h1>

      <p>
        A confirmation email has been sent to
        <span class="font-bold text-[#242742]">{{ form.email }}</span
        >. Please open it and click the button inside to confirm your
        subscription.
      </p>
    </div>

    <button
      type="button"
      class="mt-5 bg-[#242742] text-white w-full rounded-md py-4 px-6 font-bold text-base hover:from-pink-500 hover:to-orange-500 transition bg-gradient-to-r"
      @click="resetForm"
    >
      Dismiss message
    </button>
  </div>
</template>
