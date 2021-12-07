(() => {
  // 즉시 호출
  let yOffset = 0; // window.pageYOffset 대신 쓸 변수
  let prevScrollHeight = 0;
  // 현재 스크롤 위치(yOffset)보다 이전에 위치한 스크롤 섹션들의 스크롤 높이값의 합
  let currentScene = 0; // 현재 활성화된(눈 앞에 보고있는) 씬(scroll-section)

  const sceneInfo = [
    // 스크롤 구간에 따라서 애니메이션 속도 조절
    // 스크롤 높이를 스크립트로 잡고
    // 그 정보를 배열 안에 넣기
    {
      // 0
      type: 'sticky',
      heightNum: 5, // 브라우저 높이의 5배로 scrollHeight 세팅
      scrollHeight: 0,
      objs: {
        container: document.querySelector('#scroll-section-0'),
        messageA: document.querySelector('#scroll-section-0 .main-message a'),
        messageB: document.querySelector('#scroll-section-0 .main-message b'),
        messageC: document.querySelector('#scroll-section-0 .main-message c'),
        messageD: document.querySelector('#scroll-section-0 .main-message d')
      },
      values: {
        messageA_opacity: [0, 1]
      }
    },
    {
      // 1
      type: 'normal',
      heightNum: 5,
      scrollHeight: 0,
      objs: {
        container: document.querySelector('#scroll-section-1')
      }
    },
    {
      // 2
      type: 'sticky',
      heightNum: 5,
      scrollHeight: 0,
      objs: {
        container: document.querySelector('#scroll-section-2')
      }
    },
    {
      // 3
      type: 'sticky',
      heightNum: 5,
      scrollHeight: 0,
      objs: {
        container: document.querySelector('#scroll-section-3')
      }
    },

  ];

  function setLayout() {
    // 각 스크롤 섹션의 높이 세팅
    for (let i = 0; i < sceneInfo.length; i++) {
      sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
      sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
    }
    // sceneInfo 배열에 있는 각 scene의 scroll height를 잡아주고 scroll height 값을 가지고
    // scroll section element의 높으로 세팅해줌

    yOffset = window.page.pageYOffset;
    let totalScrollHeight = 0;
    for (let i = 0; i < sceneInfo.length; i++) {
      totalScrollHeight += sceneInfo[i].scrollHeight;
      if (totalScrollHeight >= yOffset) {
        currentScene = i;
        break;
        // FIXME: 새로고침 했을 시 
        // totalScroll에 들어간 값이랑 현재 yscroll 값과 비교해서
        // 현재 스크롤 값보다 totalHeight 값이 더 크면
        // 현재 값을 currentScene으로 세팅하고 for 문 빠져나옴
      }
    }
    document.body.setAttribute('id', `show-scene-${currentScene}`);

  }

  function playAnimation() {
    switch (currentScene) {
      case 0:
        break;
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
    }
  }

  function scrollLoop() {
    // console.log(window.pageYOffset);
    // 현재 스크롤한 위치를 알 수 있음

    // 현재 활성화 시킬 스크롤 섹션 정하기
    prevScrollHeight = 0;
    // scroll height 값 누적 방지를 위한 초기화
    for (let i = 0; i < currentScene; i++) {
      // prevScrollHeight = prevScrollHeight + sceneInfo[i].scrollHeight;
      prevScrollHeight += sceneInfo[i].scrollHeight;
      // 네가지 씬의 스크롤 섹션 더한 합
    }

    // 내가 스크롤 하고 있는 씬의 영역 알아내기

    if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
      currentScene++;
      document.body.setAttribute('id', `show-scene-${currentScene}`);
      // 스크롤이 바뀔 때만 적용
    }

    if (yOffset < prevScrollHeight) {
      if (currentScene === 0) return;
      // 바운스 효과를 취급하는 브라우저에서 yOffset을 - 로 만들지 않게 하는 장치 (모바일)
      currentScene--;
      document.body.setAttribute('id', `show-scene-${currentScene}`);
      // 스크롤이 바뀔 때만 적용

    }

    // document.body.setAttribute('id', `show-scene-${currentScene}`);
    // currentScene의 값에 맞춰서 body의 아이디가 붙게된다

    console.log(currentScene);
    // 스크롤 할 때 마다 체크해서 커런트 씬의 값을 현재 위치에 따라 +1 -1 해줘야 함

  }
  
  // 윈도우 사이즈가 바뀌었을 때 함수 다시 호출
  window.addEventListener('scroll', () => {
    yOffset = window.pageYOffset;
    scrollLoop();
  });
  // window.addEventListener('DOMContentLoaded', setLayout);
  window.addEventListener('load', setLayout);

  // FIXME: 1, 2 의 차이는 
  // load: 웹 페이지에 있는 모든 리소스 (이미지... 등) 들이 모두 로드 된 후에만 실행 됨
  // DOMContentLoaded dom 구조만 로드가 끝나면 실행 됨 -> 실행 시점이 빠름

  window.addEventListener('resize', setLayout);
  // 초기화 함수 실행 시점을 문서가 로드 된 다음으로 바꾸어줌
  
})();