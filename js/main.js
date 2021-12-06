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
        container: document.querySelector('#scroll-section-0')
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

    if (yOffset > prevScrollHeight) {
      
    }
    // 스크롤 할 때 마다 체크해서 커런트 씬의 값을 현재 위치에 따라 +1 -1 해줘야 함

  }
  
  // 윈도우 사이즈가 바뀌었을 때 함수 다시 호출
  window.addEventListener('resize', setLayout);
  window.addEventListener('scroll', () => {
    yOffset = window.pageYOffset;
    scrollLoop();
  })
  
  setLayout();
})();