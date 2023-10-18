import Two from "two.js";

const two = new Two({
  type: Two.Types.canvas,
  fullscreen: true,
  autostart: true,
}).appendTo(document.body);

two.bind(Two.Events.Types.update, () => {
  update(two.timeDelta / 1000);
});

function update(dt: number) {}
