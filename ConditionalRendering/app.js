const app = Vue.createApp({
  data() {
    return { goals: [], enteredGoalValue: "" };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
      console.log(this.goals);
    },
    removeGoal(i) {
      this.goals.splice(i, 1);
      console.log(this.goals);
    }
  },
});

app.mount("#user-goals");
