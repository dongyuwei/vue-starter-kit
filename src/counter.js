import Vue from "vue";

export default Vue.component("counter", {
  data() {
    return {
      count: 0,
    };
  },

  methods: {
    increment() {
      this.count++;
    },
  },
  template: `
    <div>
      <p>counter</p>
      <span class="count">{{ count }}</span>
      <button @click="increment">Increment</button>
    </div>
  `,
});
