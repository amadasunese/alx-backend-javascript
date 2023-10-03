export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // Initialize the count for the endpoint to 0 if it's not already in the WeakMap
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  // Get the current count for the endpoint and increment it
  const currentCount = weakMap.get(endpoint);
  weakMap.set(endpoint, currentCount + 1);

  // Check if the count is greater than or equal to 5
  if (currentCount >= 4) {
    throw new Error('Endpoint load is high');
  }
  console.log(`Querying endpoint: ${endpoint.name}`);
}
