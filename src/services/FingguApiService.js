class FingguApiService {
  async fetchSyncData() {
    // Simulate API call
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([{ id: 1, name: 'Sync A' }, { id: 2, name: 'Sync B' }]);
      }, 1000);
    });
  }

  async fetchVersionData() {
    // Simulate API call
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([{ id: 1, version: '1.0.0' }, { id: 2, version: '1.1.0' }]);
      }, 1000);
    });
  }
}

export { FingguApiService };