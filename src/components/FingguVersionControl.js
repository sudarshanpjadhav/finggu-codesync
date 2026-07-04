import React from 'react';

class FingguVersionControl extends React.Component {
  render() {
    const { versionData } = this.props;
    return (
      <div className='finggu-version-control'>
        <h2>Version Control</h2>
        <pre>{JSON.stringify(versionData, null, 2)}</pre>
      </div>
    );
  }
}

export default FingguVersionControl;