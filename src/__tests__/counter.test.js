// see https://vue-test-utils.vuejs.org/guides/#getting-started
import { mount } from "@vue/test-utils";
import Counter from "../counter";

describe("Counter", () => {
  const wrapper = mount(Counter);

  it("renders the correct markup", () => {
    expect(wrapper.html()).toContain('<span class="count">0</span>');
  });

  it("has a button", () => {
    expect(wrapper.contains("button")).toBe(true);
  });

  it("button should increment the count", () => {
    expect(wrapper.vm.count).toBe(0);
    const button = wrapper.find("button");
    button.trigger("click");
    expect(wrapper.vm.count).toBe(1);
  });
});
