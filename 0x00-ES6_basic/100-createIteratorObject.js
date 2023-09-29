export default function createIteratorObject(report) {
  function* iterateEmployees() {
    for (const department of Object.values(report)) {
      for (const employee of department) {
        yield employee;
      }
    }
  }

  const iterator = iterateEmployees();

  return {
    next: () => iterator.next(),
    [Symbol.iterator]: function () {
      return this;
    },
  };
}
