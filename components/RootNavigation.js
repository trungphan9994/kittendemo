import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(name) {
    navigationRef.current?.navigate(name);
  }
// add other navigation functions that you need and export them