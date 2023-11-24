<script setup>
import { ref } from "vue";
import { useFormStore } from '../store/form'

const form = useFormStore()

const error = ref(false);

const items = [
  "Product discovery and building what matters",
  "Measuring to ensure updates are a success",
  "And much more!",
];

const validEmail = () => {
  return /^[^@]+@\w+(\.\w+)+\w$/.test(email.value);
};

const handleSubscription = () => {
  if (email === "" || !validEmail()) {
    error.value = true;
  } else {
    error.value = false;
    form.handleChangeShowForm(false)
  }
};
</script>

<template>
  <div class="px-6 py-0 lg:py-20 h-screen lg:h-auto">
    <h1 class="text-5xl font-bold text-[#242742]">Stay updated!</h1>

    <p class="py-5 text-gray-900">
      Join 60,000+ product managers receiving monthly updates on:
    </p>

    <ul class="space-y-2">
      <li v-for="item in items" class="flex items-center gap-4">
        <i>
          <img src="/imgs/icon-list.svg" alt="" />
        </i>
        {{ item }}
      </li>
    </ul>

    <div class="mt-10 flex flex-col gap-2">
      <div class="flex justify-between items-center gap-4">
        <label for="email" class="text-[#242742] font-bold"
          >Email address</label
        >

        <span v-if="error" class="font-bold text-red-500 text-sm"
          >Valid email required</span
        >
      </div>

      <input
        type="text"
        id="email"
        class="py-4 px-6 border-[0.085rem] border-[#9294a0] rounded-lg"
        :class="{
          'bg-red-100 border-red-500 text-red-500 focus:outline-red-500': error,
        }"
        placeholder="email@company.com"
        :value="form.email"
        @input="
          (event) => {
            error = false;
            form.handleChangeEmail(event.target.value)
          }
        "
      />
    </div>

    <button
      type="submit"
      class="mt-5 bg-[#242742] text-white w-full rounded-md py-4 px-6 font-bold text-base hover:from-pink-500 hover:to-orange-500 transition bg-gradient-to-r"
      @click="handleSubscription"
    >
      Subscribe to monthly newsletter
    </button>
  </div>
</template>
