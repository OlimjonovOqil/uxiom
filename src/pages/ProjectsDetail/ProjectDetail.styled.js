import { styled } from "styled-components";
import { colors } from "../../GlobalStyles/Global.styled";

export const ProgectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 108px;
`;

export const MobileApp = styled.img`
  width: 100%;
  height: 788px;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 165px;
`;

export const Description = styled.p`
  max-width: 454px;
  color: #151515;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  white-space: pre-wrap;
`;

export const ParagraphWrapper = styled.p`
  max-width: 572px;
  margin: 0 auto;
  color: #151515;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;

export const MobileImagesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MobileImage = styled.img`
  width: 440px;
  height: 662px;
`;

export const AdvertisingWrapper = styled.div`
  height: 669px;
  width: 100%;
  background-color: ${colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AdvertisingImage = styled.img`
  width: 621px;
  height: 466px;
`;

export const StatisticsImage = styled.img`
  width: 1054px;
  height: 791px;
  margin: 0 auto;
  object-position: top;
  object-fit: cover;
`;
