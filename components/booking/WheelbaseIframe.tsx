'use client';

import { useEffect, useRef } from 'react';

export default function WheelbaseIframe() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    let iframeResizerInstance: any = null;
    const currentIframe = iframeRef.current;

    // Dynamically import iframe-resizer to avoid SSR issues
    const loadIframeResizer = async () => {
      try {
        // @ts-ignore - iframe-resizer doesn't have perfect TypeScript support
        const iframeResizer = (await import('iframe-resizer/js/iframeResizer')).default;
        
        if (currentIframe && iframeResizer) {
          // Initialize iframe resizer
          iframeResizerInstance = iframeResizer({
            log: false,
            checkOrigin: false,
            heightCalculationMethod: 'lowestElement',
          }, currentIframe);
        }
      } catch (error) {
        console.error('Failed to load iframe-resizer:', error);
      }
    };

    loadIframeResizer();

    // Cleanup
    return () => {
      if (currentIframe && iframeResizerInstance) {
        try {
          // @ts-ignore
          if (iframeResizerInstance.removeListeners) {
            iframeResizerInstance.removeListeners(currentIframe);
          }
        } catch (error) {
          // Ignore cleanup errors
        }
      }
    };
  }, []);

  // Wheelbase checkout URL
  const wheelbaseUrl = 'https://checkout.wheelbasepro.com/reserve/461203?color=000000&locale=en-us&newfilters=true';

  return (
    <div className="w-full overflow-hidden">
      <iframe
        ref={iframeRef}
        src={wheelbaseUrl}
        className="w-full border-0 rounded-lg min-h-[600px] lg:min-h-[800px]"
        title="Wheelbase Booking"
        allow="payment"
        style={{ minHeight: '600px' }}
        loading="lazy"
      />
    </div>
  );
}
