import { useState, useEffect } from 'react';
import { finggu_syncFn } from '../utils/finggu_sync_utils';

export function useFingguSync(initialData) {
  const [syncData, setSyncData] = useState(initialData);

  useEffect(() => {
    const updatedData = finggu_syncFn(syncData);
    setSyncData(updatedData);
  }, [syncData]);

  return syncData;
}