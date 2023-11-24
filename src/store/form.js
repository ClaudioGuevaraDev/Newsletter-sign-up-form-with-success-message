import { defineStore } from "pinia";

export const useFormStore = defineStore("form", {
  state: () => {
    return {
      email: "",
      showForm: true,
    };
  },
  actions: {
    handleChangeEmail(email) {
      this.email = email;
    },
    handleChangeShowForm(show) {
      this.showForm = show
    },
  },
});
