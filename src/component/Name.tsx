import * as React from 'react';

import useNameState from '../hook/useNameState';

const Counter = () => {
  const {
    name, updateName,
    nickName, updateNickName,
    age, updateAge,
    fetchData
  } = useNameState();

  React.useEffect(() => {
    fetchData();
  }, [])

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateName(e.target.value);
  }

  const onChangeNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateNickName(e.target.value);
  }

  return (
    <div>
      <div>
        <label>name</label><input value={name} onChange={onChangeName} />
        <label>nick name</label><input value={nickName} onChange={onChangeNickName} />
      </div>
      <div><b>이름: </b>{name}</div>
      <div><b>닉네임: </b>{nickName}</div>
      <div>
        <p> 나이는 <b>{age}</b> 입니다.</p>
        <button onClick={() => updateAge(age + 1)}>+</button>
        <button onClick={() => updateAge(age - 1)}>-</button>
      </div>
    </div>
  );
}

export default Counter;
