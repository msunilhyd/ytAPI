import React from 'react';
import ReactDOM from 'react-dom';

class Timeline extends React.Component {
  render() {
    return (
      <div className="notificationsFrame">
        <div className="panel">
          <Header />
          <Content />
        </div>
      </div>
    );
  }
}

export default Timeline;
