import { BLOCKS } from "./constant";

export const useBlocks = () => {
  return BLOCKS.map((block) => {
    return {
      ...block,
      title: block.type,
    };
  });
};
