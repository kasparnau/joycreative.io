// Custom easings I like to use for my animations.

const Easings = {
  easeInOutQuint: [0.83, 0, 0.17, 1],
};

export default Easings;
export type Easing = (typeof Easings)[keyof typeof Easings];
