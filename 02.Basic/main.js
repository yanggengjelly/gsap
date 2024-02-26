// gsap.to(".orange", {
//   scale: 1,
//   duration: 4,
//   width: 1000,
//   borderRadius: 20,
//   backgroundColor: "black",
//   y: 100,
// });

//gsap.fromTo()는 지정한 값에서 지정한 값으로 애니메이션을 적용합니다.
// gsap.fromTo(
//   ".orange",
//   { x: 700, y: 400, scale: 1, opacity: 0, duration: 1 },
//   { x: 400, y: 200, scale: 10, opacity: 1, duration: 3 }
// );

// - delay : 애니메이션이 시작되기 전에 지연시간을 지정합니다.
// - repeat : 애니메이션이 몇번 반복되어야 하는지를 지정합니다.
// - yoyo : `true` 로 설정하면 애니메이션이 앞뒤로 재생됩니다.
// - repeatDelay : 각 반복 사이에 발생하는 지연시간을 지정합니다.

gsap.to(".orange", { x: 300, repeat: 3, delay: 2, repeatDelay: 1, yoyo: true });
//무한 반복은 repeat: -1 을 설정하면 애니메이션이 무기한 반복됩니다.
//yoyo 속성은 repeat 설정이 들어있어야 사용가능합니다.

// x: 요소의 x 좌표를 설정합니다.
// y: 요소의 y 좌표를 설정합니다.
// opacity: 요소의 투명도를 설정합니다.
// scale: 요소의 크기를 설정합니다.
// rotation: 요소의 회전 각도를 설정합니다.
// skewX: 요소의 x 축 기울기를 설정합니다.
// skewY: 요소의 y 축 기울기를 설정합니다.
// scaleX: 요소의 x 축 크기를 설정합니다.
// scaleY: 요소의 y 축 크기를 설정합니다.
// color: 요소의 텍스트 색상을 설정합니다.
// backgroundColor: 요소의 배경 색상을 설정합니다.
// borderColor: 요소의 테두리 색상을 설정합니다.
// borderWidth: 요소의 테두리 너비를 설정합니다.
// borderRadius: 요소의 테두리 반경을 설정합니다.
// width: 요소의 너비를 설정합니다.
// height: 요소의 높이를 설정합니다.
// fontSize: 요소의 글꼴 크기를 설정합니다.
// letterSpacing: 요소의 글자 간격을 설정합니다.
// lineSpacing: 요소의 줄 간격을 설정합니다.
// padding: 요소의 여백을 설정합니다. 을 옆에다 css로 해석해줘

// 브라우저 성능을 고려 한다면 ..

// 브라우저 성능을 최대치로 끌어올리기 위해선 CSS Transform과 Opacity의
// 애니메이션을 사용하세요. CSS Transform 과  Opacity 가 아닌 값을 변경하면
// 브라우저가 페이지 레이아웃을 다시 랜더링(re-rander)하여
// 트윈이 많을 경우 성능을 저하시킬 수 있습니다.
