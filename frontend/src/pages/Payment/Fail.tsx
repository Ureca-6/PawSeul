// 결제 실패해서 다시 결제 페이지로 돌아가도록 하는 용도

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const PaymentFail = () => {
  const navigate = useNavigate();
  const errorMessage = '결제가 실패했습니다. 다시 시도해 주세요.';

  useEffect(() => {
    // 페이지 진입 시 alert를 띄우고 일정 시간 후 결제 페이지로 이동
    alert(errorMessage);

    //patch: 결제 상태를 "결제 실패"로 변경 요청


    navigate('/payment'); // "/payment" 페이지로 이동
  }, []);

  return (<></>)
};
