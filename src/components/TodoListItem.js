import React from "react";
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({ todo, onRemove }) => {
    const { id, text, checked } = todo;
    return (
        <div className="TodoListItem">
            <div className={cn('checkbox', { checked })}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div className="remove"  onClick={() => onRemove(id)}>  {/* 삭제할 목록의 id 값 전달! */}
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
};

export default TodoListItem;