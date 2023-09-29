import { expect, it } from "vitest";
import { mountSuspended } from "nuxt-vitest/utils";
import App from "../app.vue";

it("shows title", async () => {
  const wrapper = await mountSuspended(App);
  expect(wrapper.text()).toContain("nuxt-ui-vitest");
});
