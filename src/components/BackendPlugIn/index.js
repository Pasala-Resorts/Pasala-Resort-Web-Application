import React from 'react';
import { useLocation } from 'react-router-dom';

const BackendPlugIn = () => {
  const location = useLocation();
  const isRenderBP = location?.state?.bookingPage;

  return isRenderBP ? (
    <iframe
      title='Third Party Screen'
      src='https://77409.staygrid.com/webreservation/index/index/hidHotelIdWebOut/QV5TX0ZSczM0Xzc3NDA5X0Y1dGVyOTA4N3NfKWRoZl9kcnRlcjdfNzc0MDlfaGdmaF9nXmQ4NTQ=/hidLanguageId/1/'
    />
  ) : null;
};

export default BackendPlugIn;
