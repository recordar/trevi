import * as React from 'react';
import { useEffect } from 'react';

import useBarcodeBridge from '../../_hook/Common/useWaitingState';
import BarcodeBridge, { IWaitingProps } from '../../component/Common/Waiting';

const WatingContainer = () => {
  const { title, guidance, status, fetchWaitingState } = useBarcodeBridge();
  const waitingProps: IWaitingProps = {
    title,
    guidance,
    status
  }

  useEffect(() => {
    fetchWaitingState();
  }, []);

  return (
    <BarcodeBridge {...waitingProps} />
  )
}

export default WatingContainer;
