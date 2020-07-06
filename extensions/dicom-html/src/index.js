import React from 'react';
import OHIFDicomHtmlSopClassHandler from './OHIFDicomHtmlSopClassHandler.js';

const Component = React.lazy(() => {
  return import('./OHIFDicomHtmlViewport');
});

const OHIFDicomHtmlViewport = props => {
  return (
    <React.Suspense fallback={<div>加载中...</div>}>
      <Component {...props} />
    </React.Suspense>
  );
};

export default {
  /**
   * Only required property. Should be a unique value across all extensions.
   */
  id: 'html',

  getViewportModule() {
    return OHIFDicomHtmlViewport;
  },
  getSopClassHandlerModule() {
    return OHIFDicomHtmlSopClassHandler;
  },
};
