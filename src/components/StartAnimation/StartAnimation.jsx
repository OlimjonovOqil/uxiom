import React from "react";
import * as S from "./StartAnimation.styled";

const StartAnimation = ({
  display,
  start,
  logo,
  showLogoText,
  showSmallCircle,
}) => {
  return (
    <S.AnimationWrapper $display={display} $start={start}>
      <S.StartLogo $logo={logo} $show={showLogoText} $display={display} />
      <S.BigCircle>
        <S.LittleCirle $show={showSmallCircle} />
      </S.BigCircle>
    </S.AnimationWrapper>
  );
};

export default StartAnimation;
