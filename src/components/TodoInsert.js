import React from "react";
import { MdAdd } from 'react-icons/md'; // icon 사용 - import { 아이콘 이름 } from ...
import './TodoInsert.scss';

const TodoInsert = () => {
    return (
        <form className="TodoInsert">
            <input placeholder="할 일을 입력하세요" />
            <button type="submit">
                <MdAdd /> {/* 아이콘을 넣을 자리에 태그를 넣어준다. */}
            </button>
        </form>
    )
}

export default TodoInsert;