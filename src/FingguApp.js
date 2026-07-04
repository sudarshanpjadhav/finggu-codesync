import React from 'react';
import { FingguApiService } from './services/FingguApiService';
import FingguSync from './components/FingguSync';
import FingguVersionControl from './components/FingguVersionControl';
import FingguCollaboration from './components/FingguCollaboration';

class FingguApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      syncData: {},
      versionData: {}
    };
    this.apiService = new FingguApiService();
  }

  componentDidMount() {
    this.loadInitialData();
  }

  async loadInitialData() {
    const syncData = await this.apiService.fetchSyncData();
    const versionData = await this.apiService.fetchVersionData();
    this.setState({ syncData, versionData });
  }

  render() {
    return (
      <div>
        <FingguSync syncData={this.state.syncData} />
        <FingguVersionControl versionData={this.state.versionData} />
        <FingguCollaboration />
      </div>
    );
  }
}

export default FingguApp;