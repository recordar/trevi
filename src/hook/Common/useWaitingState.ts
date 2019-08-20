import {useState} from 'react';

export interface IWatingState {
  title: string;
  guidance: string;
  contents: string;
  status: string;
  updateTitle: (title: string) => void;
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

  const updateContents = (contents: string) => {
    setContents(contents);
  };

  const fetchWaitingState = () => {
    setTimeout(() => {
      setTitle('준비중입니다');
      setGuidance('곧 뿅하고 나타날게요<br />잠시만 기다려주세요.');
    }, 1000);

    setTimeout(() => {
      setStatus('SUCCESS');
    }, 40000);
  }

  return {
    title,
    guidance,
    contents,
    status,
    updateTitle,
    updateContents,
    fetchWaitingState
  }
};

export default useWaitingState;
