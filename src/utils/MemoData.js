export const initialItems = new Array(29_999_999).fill(0).map((_, i) => {//data that we are using to see the effect of useMemo hook
    return {//here in an array of 29 million elements only value of one is true that is the last element so if we dont use useMemo hook on each render this whole array will be traversed causing the site to lag
      id: i,
      isSelected: i === 29_999_998,
    };
  });