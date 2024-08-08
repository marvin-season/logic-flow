/**
 * 键鼠操作的hooks
 */
import {useEventListener} from 'ahooks';

export const useContextMenu = (action: (e: MouseEvent) => void) => {
  useEventListener('contextmenu', (e) => {
    e.preventDefault();
    action(e);
  });
}
