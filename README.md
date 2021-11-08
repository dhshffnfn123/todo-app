# 📒 일정 관리 웹 어플리케이션 만들기

### node-sass와 react-icons를 사용하였음

## 컴포넌트 별 용도
> + TodoTemplate : 화면을 가운데에 정렬시켜 주며, 앱 타이틀을 보여준다 children으로 내부 JSX를 props로 받아 와서 렌더링 해준다.
> - TodoInsert : 새로운 항목을 입력하고 추가할 수 있는 컴포넌트. state를 통해 인풋의 상태를 관리한다.
> * TodoListItem : 각 할 일 항목의 정보를 보여 주는 컴포넌트. todo 객체를 props로 받아 와서 상태에 따라 다른 스타일의 UI를 보여준다.
> + TodoList : todos 배열을 props로 받아 온 후, 이를 배열 내장 함수 map을 사용해서 여러 개의 TodoListItem 컴포넌트로 변환하여 보여 준다.

## ETC
> + onSubmit 이벤트는 브라우저를 새로고침 하는데 이 때 e.preventDefault() 함수를 호출하면 새로고침을 방지할 수 있다.
> - onSubmit 이벤트는 인풋에서 'Enter'만 눌렀을 때도 발생한다. (onClick만 사용하면 Enter를 감지하는 로직을 작성해야 한다.)