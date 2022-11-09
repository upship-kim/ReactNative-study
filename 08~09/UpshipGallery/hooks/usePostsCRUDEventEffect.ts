import {useEffect} from 'react';
import events from '../lib/event';

interface UsePostsCRUDEventEffectProps {
  enabled: boolean;
  onRefresh: () => Promise<void>;
  onRemove: (postId: string) => void;
}

const usePostsCRUDEventEffect = ({
  enabled,
  onRefresh,
  onRemove,
}: UsePostsCRUDEventEffectProps) => {
  useEffect(() => {
    if (!enabled) {
      return;
    }
    events.event.addListener('refresh', onRefresh);
    events.event.addListener('removePost', onRemove);
    return () => {
      events.event.removeListener('refresh', onRefresh);
      events.event.removeListener('removePost', onRemove);
    };
  }, [enabled, onRefresh, onRemove]);
};

export default usePostsCRUDEventEffect;
