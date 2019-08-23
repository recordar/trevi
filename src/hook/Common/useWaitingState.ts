import { useState } from 'react';
import { getFireDB } from '../../utils/firebaseUtils';

export interface IWating {
  title: string;
  guidance: string;
  contents: string;
  status: string;
}

export interface IWatingState extends IWating {
  updateTitle: (title: string) => void;
  updateGuidance: (guidance: string) => void;
  updateContents: (contents: string) => void;
  fetchWaitingState: () => void;
}

const useWaitingState = (): IWatingState => {
  const [title, setTitle] = useState('타이틀');
  const [guidance, setGuidance] = useState('가이드 메세지');
  const [contents, setContents] = useState('컨텐츠');
  const [status, setStatus] = useState('PENDING');

  const updateTitle = (title: string) => {
    setTitle(title);
  };

  const updateGuidance = (guidance: string) => {
    setGuidance(guidance);
  };

  const updateContents = (contents: string) => {
    setContents(contents);
  };

  const fetchWaitingState = (): Promise<IWating> => {
    return getFireDB().then(res => {
      const { title, guidance, status, contents = '' } = res.val().waiting;
      setStatus(status);
      return {
        title,
        guidance,
        contents,
        status,
      };
    });
  };

  return {
    title,
    guidance,
    contents,
    status,
    updateTitle,
    updateGuidance,
    updateContents,
    fetchWaitingState,
  };
};

export default useWaitingState;
