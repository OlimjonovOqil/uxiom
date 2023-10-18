import { styled } from "styled-components";

export const ProjectInner = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  width: 510px;
  padding: 20px;
  margin-bottom: 29px;
`;

export const CardImgWrapper = styled.div`
  width: 470px;
  height: 360px;
  border-radius: 28px 0 0 0;
  margin-bottom: 30px;
  position: relative;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 28px 0 0 0;
  cursor: pointer;
`;

export const CardImgHover = styled.img`
  position: absolute;
  top: -4px;
  left: -4px;
  opacity: 0;
  transition: opacity 0.3s ease;
  ${CardImgWrapper}:hover & {
    opacity: 1;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

export const CardInfoLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
