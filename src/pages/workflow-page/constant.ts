import {ComponentType} from 'react';

export const NodeComponentMap: Record<string, ComponentType<any>> = {
  'start': () => 'start node',
  'end': () => 'end node',
}
