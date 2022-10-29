import {
  Header,
  Intro,
  TechStackList,
  Contact,
  Gallery,
  Item,
} from "dev-portfolio";
import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <>
      <Header
        headerHeight='80px'
        headerWidth='100%'
        headerBackgroundColor='#ffe6e6'
        logoOption={{
          redirectUrl: "/",
          title: "백엔드 개발자, 김지수",
          logoHidden: true,
          titleColor: "#000000",
          titleSize: "25px",
        }}
        channels={[
          {
            name: "github",
            redirectUrl: "https://github.com/jisu3817",
            color: "#000000",
            size: "20px",
          },
          {
            name: "naver",
            redirectUrl: "https://blog.naver.com/wltn5012",
            color: "#000000",
            size: "20px",
          },
        ]}
        sideBarOption={{
          mainTitle: "jisu",
          mainTitleSize: "24px",
          mainTitleColor: "white",
          mainTitleAlign: "left",
          mainTitleBorderColor: "white",
          iconName: "ant-design:menu-fold-outlined",
          iconSize: "28px",
          iconColor: `#000000`,
          iconMargin: "0px 12px 0px 12px",
          itemTextColor: "white",
          itemTextAlign: "left",
          itemBackgroundColor: `#000000`,
          itemHoverdBackgroundColor: `#000000`,
          backgroundColor: `#000000`,
        }}
      />
      <Intro
        id='Intro Componen'
        textAlign='left'
        backgroundColor='#ffffff'
        title='Introduce'
        shortIntro='백엔드 개발자, 김지수입니다.'
        description={`안녕하세요. 백엔드 노드 개발자 김지수입니다. 
        \n현재 예약 솔루션 서비스를 운영하는 테이블 매니저라는 회사에서 API 기능 개발 및 이슈 개선 업무를 담당하고 있습니다.
        \n협업을 위한 커뮤니케이션 능력과 개발하며 얻은 지식을 문서화하고, 기록하는 것을 중요하게 생각합니다.
        \nTIL(Today I Learned)을 실천하여 매일 매일 성장하는데 노력합니다.
        `}
      />
      <TechStackListTitle id="['TechStackList', 'bx:coin-stack']">
        Skills
      </TechStackListTitle>
      <TechStackList
        gap='normal'
        techStackList={[
          {
            nameOption: {
              name: "Javascript",
              logoName: "Javascript",
              fontSize: "18px",
              logoSize: "24px",
            },
            progressBarOption: {
              rateText: "80%",
              isHiddenRateText: false,
              colorTo: "#ff9999",
              colorFrom: "#F5DEB3",
              width: "100%",
              height: "30px",
            },
          },
          {
            nameOption: {
              name: "Typescript",
              logoName: "Typescript",
              fontSize: "18px",
              logoSize: "24px",
            },
            progressBarOption: {
              rateText: "70%",
              isHiddenRateText: false,
              colorTo: "#ffebeb",
              colorFrom: "#F5DEB3",
              width: "100%",
              height: "30px",
            },
          },
          {
            nameOption: {
              name: "MySQL",
              logoName: "MySQL",
              fontSize: "18px",
              logoSize: "24px",
            },
            progressBarOption: {
              rateText: "80%",
              isHiddenRateText: false,
              colorTo: "#ff9999",
              colorFrom: "#F5DEB3",
              width: "100%",
              height: "30px",
            },
          },
          {
            nameOption: {
              name: "mongoDB",
              logoName: "mongoDB",
              fontSize: "18px",
              logoSize: "24px",
            },
            progressBarOption: {
              rateText: "60%",
              isHiddenRateText: false,
              colorTo: "#ffebeb",
              colorFrom: "#F5DEB3",
              width: "100%",
              height: "30px",
            },
          },
          {
            nameOption: {
              name: "github",
              logoName: "github",
              fontSize: "18px",
              logoSize: "24px",
            },
            progressBarOption: {
              rateText: "85%",
              isHiddenRateText: false,
              colorTo: "#ff9999",
              colorFrom: "#F5DEB3",
              width: "100%",
              height: "30px",
            },
          },
          {
            nameOption: {
              name: "AWS",
              logoName: "AWS",
              fontSize: "18px",
              logoSize: "24px",
            },
            progressBarOption: {
              rateText: "60%",
              isHiddenRateText: false,
              colorTo: "#ffebeb",
              colorFrom: "#F5DEB3",
              width: "100%",
              height: "30px",
            },
          },
        ]}
      />
      <Gallery
        id='Gallery Component'
        column={3}
        gap='normal' // 'wider' | 'wide' | 'normal' | 'narrow' | 'narrower'
        theme='mid-night' // 'mid-night' | 'blossom' | 'fruits' | 'bare-bare' | 'mint-chocolate'
        padding='2em 10em'
      >
        <Item
          src='dongurami.png'
          title='동그라미 서비스'
          description='인덕대학교의 모든 동아리 소개 및 홍보, 관리할 수 있는 서비스'
          titleColor='#f2f2f2'
          descriptionColor='#f2f2f2'
          redirectURL='https://dongurami.co.kr/'
          hoverdInnerBorderColor='#f2f2f2'
        />
        <Item
          src='테크톡_프레임워크.png'
          title='테크톡'
          description='프레임워크 VS 라이브러리 VS API'
          titleColor='#f2f2f2'
          descriptionColor='#f2f2f2'
          redirectURL='https://www.youtube.com/watch?v=sQpO-oswV-I'
          hoverdInnerBorderColor='#f2f2f2'
        />
        <Item
          src='테크톡_데이터베이스설계.png'
          title='테크톡'
          description='데이터베이스 설계'
          titleColor='#f2f2f2'
          descriptionColor='#f2f2f2'
          redirectURL='https://www.youtube.com/watch?v=K82Nye07mIU'
          hoverdInnerBorderColor='#f2f2f2'
        />
        <Item
          src='테크톡_네트워크보안.png'
          title='테크톡'
          description='네트워크 보안'
          titleColor='#f2f2f2'
          descriptionColor='#f2f2f2'
          redirectURL='https://blog.naver.com/wltn5012/222418929858'
          hoverdInnerBorderColor='#f2f2f2'
        />
        <Item />
        <Item />
      </Gallery>
      <Contact
        id='Contact Component'
        backgroundColor='#ffe6e6'
        title='Hello My name is Jisu Kim'
        subTitle="If you're interested in me, please press the button below :D"
        buttonText='Want to work with me?'
        email='wltn5012@naver.com'
        channels={channels}
        aboutMeInfos={aboutMeInfos}
      />
    </>
  );
}

const aboutMeInfos = [
  {
    title: "Where I live",
    description: "Gwangjin-gu, Seoul, Republic of Korea",
  },
  {
    title: "Give me a call",
    description: "T. +82 (0)10 9263 8903",
  },
  {
    title: "Or, why don’t you email me?",
    description: "wltn5012@naver.com",
  },
];

const channels = [
  {
    name: "github",
    redirectUrl: "https://github.com/jisu3817",
    color: "#181717BB",
    size: "24px",
  },
  {
    name: "naver",
    redirectUrl: "https://blog.naver.com/wltn5012",
    color: "#47A141BB",
    size: "24px",
  },
];

const TechStackListTitle = styled.h1`
  color: #000000;
  margin: 1em 1em;
  padding-bottom: 15px;
  border-bottom: 1px solid;
`;

export default App;
