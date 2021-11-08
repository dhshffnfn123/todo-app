import React, { useState, useCallback } from "react";
import { MdAdd } from 'react-icons/md'; // icon 사용 - import { 아이콘 이름 } from ...
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue(''); // value 값 초기화
            
            // submit 이벤트는 브라우저에서 새로고침을 발생시킨다. 이를 방지 하기 위해 아래 함수를 호출한다.
            e.preventDefault();
        },
        [onInsert, value],
    )

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input 
                placeholder="할 일을 입력하세요"
                value={value}
                onChange={onChange}
                 />
            <button type="submit">
                <MdAdd /> {/* 아이콘을 넣을 자리에 태그를 넣어준다. */}
            </button>
        </form>
    )
}

export default TodoInsert;