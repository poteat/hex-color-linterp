import { hexColorLinterp } from "./index";

it("can interpolate colors", () => {
  let red = "FF0000";
  let blue = "0000FF";
  let half = hexColorLinterp(0.5, red, blue);

  expect(half).toBe("7f007f");
});
