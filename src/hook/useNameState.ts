import {useState, useEffect} from 'react';

export interface INameState {
  name: string;
  nickName: string;
  age: number;
  updateName: (name: string) => void;
  updateNickName: (nickName: string) => void;
  updateAge: (age: number) => void;
  fetchData: () => void;
};

const useNameState = (): INameState => {
  const [name, setName] = useState<string>('');
  const [nickName, setNickName] = useState<string>('');
  const [age, setAge] = useState<number>(0);

  useEffect(() => {
    setAge(19);
  }, [name]);

  const fetchData = () => {
    // call AXIOS.post with URL, params
    setName('이름');
    setNickName('닉네임');
    setAge(19);
  };

  const updateName = (name: string) => {
    setName(name);
  };

  const updateNickName = (nickName: string) => {
    setNickName(nickName);
  };

  const updateAge = (age: number) => {
    setAge(age);
  };

  return {
    name, updateName,
    nickName, updateNickName,
    age, updateAge,
    fetchData
  };
};

export default useNameState;
