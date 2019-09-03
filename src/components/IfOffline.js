// // Component basado en hooks
// import React, { useState, useEffect } from 'react';

// const IfOffline = ({ children }) => {
//   const [online, setOnline] = useState(navigator ? navigator.onLine : true);

//   useEffect(() => {
//     if (!window) return;
//     window.addEventListener('online', goOnline);
//     window.addEventListener('offline', goOffline);

//     return () => {
//       window.removeEventListener('online', goOnline);
//       window.removeEventListener('offline', goOffline);
//     };
//   });

//   function goOnline() {
//     setOnline(true);
//   }

//   function goOffline() {
//     setOnline(false);
//   }

//   if (online) {
//     return null;
//   }

//   return <span>{children}</span>;
// };

// export default IfOffline;

// Component basado en clases
import React from 'react';

export default class IfOffline extends React.Component {
  constructor(props) {
    super(props);
    this.state = { onLine: navigator ? navigator.onLine : true };
  }

  componentDidMount() {
    if (!window) return;
    window.addEventListener('online', this.goOnline);
    window.addEventListener('offline', this.goOffline);
  }

  componentWillUnMount() {
    window.removeEventListener('online', this.goOnline);
    window.removeEventListener('online', this.goOffline);
  }

  goOnline = () => this.setState({ onLine: true });
  goOffline = () => this.setState({ onLine: false });

  render() {
    const { children } = this.props;
    const { onLine } = this.state;

    if (onLine) {
      return null;
    }

    return <span>{children}</span>;
  }
}
