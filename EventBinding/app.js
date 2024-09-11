const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      fullName: "",
    };
  },
  /*
  computed: {
    fullName() {
      if(!this.name) return '';
      return this.name + ` Jang`;
    }
  },*/
  watch: {
    name(value) {
      this.fullName = value + ' Jang';
    }
  },
  methods: {
    add() {
      this.counter++;
    },
    reduce() {
      this.counter--;
    },
    setName(event) {
      this.name = event.target.value;
    },
    submitForm() {
      alert("Submitted!");
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
