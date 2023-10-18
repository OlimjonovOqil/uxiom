import React from "react";
import { SectionTitle } from "../../GlobalStyles/Global.styled";
import * as S from "./ProjectDetail.styled";
import MobileApp from "../../assets/projectDetailBg.jpg";
import mob1 from "../../assets//image1.jpg";
import mob2 from "../../assets//image2.jpg";
import mob3 from "../../assets//image3.jpg";
import adv from "../../assets/adv.jpg";
import stats from "../../assets/statistics.jpg";
import Layout from "../../components/Layout/Layout";

const Projectsdetail = () => {
  return (
    <Layout>
      <SectionTitle>Project name</SectionTitle>
      <S.ProgectWrapper>
        <S.MobileApp src={MobileApp} />
        <S.DescriptionWrapper>
          <S.Description>
            On a mission to create a luxury and holistic ‘safe space’ where
            customers can nurture and improve their body and mind.
            {"\n"}
            {"\n"}
            Uxiom were challenged to research the market, position the brand and
            create a new name, identity and ‘city sanctuary’ that provides a
            luxury haven from the bustling Budapest high st.
          </S.Description>
          <S.Description>
            On a mission to create a luxury and holistic ‘safe space’ where
            customers can nurture and improve their body and mind.
            {"\n"}
            {"\n"}
            Uxiom were challenged to research the market, position the brand and
            create a new name, identity and ‘city sanctuary’ that provides a
            luxury haven from the bustling Budapest high st.
          </S.Description>
        </S.DescriptionWrapper>
        <S.MobileImagesWrapper>
          <S.MobileImage src={mob1} />
          <S.MobileImage src={mob2} />
          <S.MobileImage src={mob3} />
        </S.MobileImagesWrapper>
        <S.ParagraphWrapper>
          On a mission to create a luxury and holistic ‘safe space’ where
          customers can nurture and improve their body and mind.
        </S.ParagraphWrapper>
        <S.AdvertisingWrapper>
          <S.AdvertisingImage src={adv} />
        </S.AdvertisingWrapper>
        <S.ParagraphWrapper>
          We added a lot of useful features to the application which has become
          more functional, easier to understand and a pure pleasure to use.
        </S.ParagraphWrapper>
        <S.StatisticsImage src={stats} />
      </S.ProgectWrapper>
    </Layout>
  );
};

export default Projectsdetail;
