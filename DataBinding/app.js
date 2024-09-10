const app = Vue.createApp({
  data() {
    return {
      optionOne: "<h1>Yooooo</h1>",
      optionTwo: "<h1>Byeeee</h1>",
      vueLink: "https://vuejs.org",
    };
  },
  methods: {
    outputGoal() {
      const randomNum = Math.random();
      console.log(randomNum);
      if (randomNum < 0.5) {
        return this.optionOne;
      } else {
        return this.optionTwo;
      }
    },
  },
});

app.mount("#user-goal");
