export const sumArrayValues = array => {
  return Object.values(array).reduce((total, val) => {
    return total + val;
  }, 0);
};

export const Percents = (num, total = 0) => {
  return total === 0 ? 0 : Math.round((num / total) * 100, 0);
};
