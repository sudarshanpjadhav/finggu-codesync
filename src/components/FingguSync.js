import React from 'react';

class FingguSync extends React.Component {
  render() {
    const { syncData } = this.props;
    return (
      <div className='finggu-sync'>
        <h2>Code Synchronization</h2>
        <pre>{JSON.stringify(syncData, null, 2)}</pre>
      </div>
    );
  }
}

export default FingguSync;