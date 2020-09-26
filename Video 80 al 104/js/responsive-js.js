const d = document;
const w = window;

export default function responsiveMedia(id, mq, mobileContent, desktopContent) {
  let breakpoint = w.matchMedia(mq);

  const responsive = (e) => {
    if (e.matches) {
      d.getElementById(id).innerHTML = desktopContent;
    } else {
      d.getElementById(id).innerHTML = mobileContent;
    }
  };

  //breakpoint.addListener(responsive);
  breakpoint.addEventListener("change", responsive);
  responsive(breakpoint);
}
