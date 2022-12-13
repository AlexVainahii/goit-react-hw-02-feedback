

export const Percents = (num, total = 0) => {
  return total === 0 ? 0 : Math.round((num / total) * 100, 0);
};
