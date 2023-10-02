export default function updateUniqueItems(inputMap) {
  if (typeof inputMap !== 'object' || inputMap === null) {
    throw new Error('Cannot process');
  }

  const updatedMap = {};

  for (const [item, quantity] of Object.entries(inputMap)) {
    if (quantity === 1) {
      updatedMap[item] = 100;
    } else {
      updatedMap[item] = quantity;
    }
  }

  return updatedMap;
}
