export const flattenPrototypeChain = (obj: any): any[] => {
  const prototypes = [];
  let current = obj;
  while (current) {
    prototypes.push(current);
    current = Object.getPrototypeOf(current);
  }
  return prototypes;
};
export const getPrototypeDetails = (func: Function) => {
  const prototype = func.prototype;
  const properties = Object.getOwnPropertyNames(prototype);

  const methods = properties.filter(prop => typeof prototype[prop] === 'function' && prop !== 'constructor');
  const nonMethods = properties.filter(prop => typeof prototype[prop] !== 'function');

  return {
    methods,
    properties: nonMethods,
  };
};

// Example usage
console.log(getPrototypeDetails(Array));
// Output: { methods: [ 'concat', 'copyWithin', 'entries', ... ], properties: [ 'length' ] }

export const convertToReactFlowNodes = (obj: any) => {
  const prototypes = flattenPrototypeChain(obj);
  return prototypes.map((prototype, index) => {
    const properties = Object.getOwnPropertyNames(prototype);
    return {
      id: `node-${index}`,
      type: "javascript",
      data: {label: `${prototype.name || prototype.constructor.name}`, properties,},
      position: {x: 100, y: index * 150},
    }
  });
};
