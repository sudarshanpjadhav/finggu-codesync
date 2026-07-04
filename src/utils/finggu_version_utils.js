export function finggu_versionFn(versionData) {
  // Logic for managing version control
  return versionData.map(item => ({ ...item, managed: true }));
}