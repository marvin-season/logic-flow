export const flattenPrototypeChain = (obj: any): any[] => {
  const prototypes = [];
  let current = obj;
  while (current) {
    prototypes.push(current);
    current = Object.getPrototypeOf(current);
  }
  return prototypes;
};

export const convertToReactFlowNodes = (obj: any) => {
  const prototypes = flattenPrototypeChain(obj);
  return prototypes.map((proto, index) => ({
    id: `node-${index}`,
    type: "javascript",
    data: { label: `${proto.name || proto.constructor.name}`, proto },
    position: { x: 100, y: index * 100 },
  }));
};
