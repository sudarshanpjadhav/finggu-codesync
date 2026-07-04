import { useState, useEffect } from 'react';
import { finggu_versionFn } from '../utils/finggu_version_utils';

export function useFingguVersion(initialData) {
  const [versionData, setVersionData] = useState(initialData);

  useEffect(() => {
    const updatedData = finggu_versionFn(versionData);
    setVersionData(updatedData);
  }, [versionData]);

  return versionData;
}