// Custom easings I like to use for my animations.

const easings = {
  easeInOutQuint: [0.83, 0, 0.17, 1],
};

export default easings;
export type easing = (typeof easings)[keyof typeof easings];
