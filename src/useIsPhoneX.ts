import { useEffect, useState } from 'react';

const useIsPhoneX = () => {
  const [isPhoneX, setIsPhoneX] = useState(false);
  useEffect(() => {
    const getIsPhoneX = () => {
      if (typeof window !== 'undefined' && window) {
        return /iphone/gi.test(window.navigator.userAgent) && window.screen.height >= 812;
      }
      return false;
    };
    setIsPhoneX(getIsPhoneX());
  }, [typeof window]);
  return isPhoneX;
}

export default useIsPhoneX;