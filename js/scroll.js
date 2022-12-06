// 스크롤 값 240 - header fixed 검색바로 변환
$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 240) {
    $(".header").addClass("fixed-header");
    $(".nav").addClass("nav-none");
    $(".main").addClass("main-mt");
  } else {
    $(".header").removeClass("fixed-header");
    $(".nav").removeClass("nav-none");
    $(".main").removeClass("main-mt");
  }
});

// 사이드바 스크롤 이벤트
var startScroll = false;

var saveAsideTop = 0;
var saveAsideBottom = 0;
var lastScrollTop = 0;
var lastScrollBottom = 0;

var asidePositionTop = 70;
var asidePostionBtm = 36;
var sectionPositionBtm = 27;
var mainPt = 20;

$(window).scroll(function () {
  var scrollTop = $(window).scrollTop();
  var scrollBottom = $(window).scrollTop() + $(window).height();
  var asideBottomValue = $(".aside").offset().top + $(".aside").outerHeight();
  var sectionBottomValue =
    $(".section").offset().top + $(".section").outerHeight();
  var asideTopValue = $(".aside").offset().top;
  var currentAsideTop = $(".aside-area").offset().top;
  var currentAsideBottom =
    $(".aside-area").offset().top + $(".aside-area").outerHeight();

  /* 
    1. 사이드바 끝까지 도착하기 전까지는 중간에 스크롤을 올려도 변하는게 없다.
    2. 사이드바 끝에 도달하면 fixed-bottom 추가
    3. 사이드바가 섹션 끝에 도달하면 fixed-bottom 제거, stop-aside 추가
    4. fixed-bottom일 때 스크롤을 위로 올린다면 fixed-bottom 제거 absolute-aside 추가
    5. stop-aside일 때 스크롤을 위로 올릴 때 사이드바 상단에 도착하면 stop-aside 제거, fixed-top 추가
    6. fixed~~ 클래스일 떄 위, 아래 끝부분에서 움직인다면 absolute-aside로 변경하며 변경될때 top 좌표값을 구하여
        같은 위치에 사이드바가 존재하도록 맞춰준다.
    7. 
  */

  console.log(startScroll);

  // 최상단일 때
  if (scrollTop === 0) {
    $(".aside").removeClass("fixed-bottom");
    $(".aside").removeClass("fixed-top");
    $(".aside").removeClass("absolute-aside");
    $(".aside").removeClass("stop-aside");
    $(".aside .aside-area")
      .css("position", "relative")
      .css("top", "auto")
      .css("bottom", "auto")
      .css("margin-top", "0");
    startScroll = false;
  }

  // 스크롤 내릴 때
  if (lastScrollTop < scrollTop) {
    // 처음 스크롤을 내릴 때 사이드바 끝에 도달한다면
    if (scrollBottom >= asideBottomValue + asidePostionBtm && !startScroll) {
      $(".aside").addClass("fixed-bottom");
      $(".fixed-bottom .aside-area")
        .css("position", "fixed")
        .css("top", "auto")
        .css("bottom", asidePostionBtm + "px")
        .css("transition", "bottom 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)");
      startScroll = true;
    }

    // 맨 아래까지 내려갔을 때
    if (scrollBottom >= sectionBottomValue + sectionPositionBtm) {
      $(".aside").removeClass("fixed-bottom");
      $(".aside").removeClass("absolute-aside");

      $(".aside").addClass("stop-aside");
      $(".stop-aside .aside-area")
        .css("position", "absolute")
        .css("top", "auto")
        .css("bottom", sectionPositionBtm)
        .css("transition", "none");
      saveAsideTop = currentAsideTop;
    }

    // if (
    //   scrollBottom - asidePostionBtm >= asideBottomValue &&
    //   startScroll &&
    //   $(".aside").hasClass("absolute-aside")
    // ) {
    //   $(".aside").removeClass("absolute-aside");

    //   $(".aside").addClass("fixed-bottom");
    //   $(".fixed-bottom .aside-area")
    //     .css("position", "fixed")
    //     .css("top", "auto")
    //     .css("bottom", saveAsideBottom + "px")
    //     .css("transition", "bottom 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)");
    // }

    // if ($(".aside").hasClass("fixed-top")) {
    //   $(".aside").removeClass("fixed-top");

    //   $(".aside").addClass("absolute-aside");
    //   $(".absolute-aside .aside-area")
    //     .css("position", "absolute")
    //     .css("top", currentAsideTop - 212 + "px")
    //     .css("bottom", "auto")
    //     .css("margin-top", "0")
    //     .css("transition", "none");
    // }
  } else {
    // 스크롤 올릴 때
    // if ($(".aside").hasClass("fixed-bottom")) {
    //   $(".aside").removeClass("fixed-bottom");
    //   $(".aside").addClass("absolute-aside");
    //   $(".absolute-aside .aside-area")
    //     .css("position", "absolute")
    //     .css("top", currentAsideTop - 212 + "px")
    //     .css("bottom", "auto")
    //     .css("margin-top", "0")
    //     .css("transition", "none");
    // }
    if (
      scrollTop <= saveAsideTop - asidePositionTop &&
      startScroll &&
      $(".aside").hasClass("stop-aside")
    ) {
      $(".aside").removeClass("stop-aside");

      $(".aside").addClass("fixed-top");
      $(".fixed-top .aside-area")
        .css("position", "fixed")
        .css("top", asidePositionTop + "px")
        .css("bottom", "auto")
        .css("margin-top", "20px");
      saveAsideTop = currentAsideTop;
    }
    if (
      asideTopValue >= scrollTop + asidePositionTop + mainPt &&
      $(".aside").hasClass("fixed-top") &&
      startScroll
    ) {
      $(".aside").removeClass("fixed-top");

      $(".aside .aside-area")
        .css("position", "relative")
        .css("top", "auto")
        .css("bottom", "auto")
        .css("margin-top", "0");
    }
    // if (
    //   scrollTop + asidePositionTop <= saveAsideTop &&
    //   $(".aside").hasClass("absolute-aside")
    // ) {
    //   $(".aside").removeClass("absolute-aside");
    //   $(".aside").addClass("fixed-top");
    //   $(".fixed-top .aside-area")
    //     .css("position", "fixed")
    //     .css("top", asidePositionTop + "px")
    //     .css("bottom", "auto")
    //     .css("margin-top", "20px");
    //   saveAsideTop = currentAsideTop;
    //   saveAsideBottom = currentAsideBottom;
    // }
  }

  lastScrollTop = scrollTop;
  lastScrollBottom = scrollBottom;
});
