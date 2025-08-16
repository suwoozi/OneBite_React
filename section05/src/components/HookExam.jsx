import useInput from "../Hooks/useInput";

// Hook
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출 불가 (조건문, 반복문)
// 서로 다른 훅들의 호출 순서가 엉망이 되어 오류 발생
// 3. Custom Hook 직접 만들 수 있음

const HookExam = () => {
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();

  return (
    <>
      <input input value={input} onChange={onChange} />
      <input input value={input2} onChange={onChange2} />
    </>
  );
};

export default HookExam;
