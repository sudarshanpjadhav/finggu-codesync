export function finggu_syncFn(syncData) {
  // Logic for handling synchronization
  return syncData.map(item => ({ ...item, synced: true }));
}