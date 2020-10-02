const d = document;
const w = window;

export default function videoInteligente() {
  const $videos = d.querySelectorAll("video[data-smart-video]");

  const cb = (entries) => {
    //console.log(entries);
    entries.forEach((entry) => {
      //console.log(entry.target);
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        entry.target.pause();
      }
      w.addEventListener("visibilitychange", (e) => {
        if (d.visibilityState === "visible" && entry.isIntersecting) {
          entry.target.play();
          console.log(entry.target);
        } else {
          entry.target.pause();
        }
      });
      // Esto no me funciona bien, al cambiar de pestaña si se pausa el video que estaba reproduciendo, pero al volver se ponen en reproducción los dos videos en lugar de solo el que esta en foco.
    });
  };

  const observer = new IntersectionObserver(cb, { threshold: 0.5 });
  $videos.forEach((el) => observer.observe(el));
}

/* w.addEventListener("visibilitychange", (e) => {
  if (d.visibilityState === "visible" && entry.isIntersecting) {
    entry.target.play();
    console.log(entry.target);
  } else {
    entry.target.pause();
  }
}); */

//w.addEventListener("visibilitychange", (e) => (d.visibilityState === "visible" ? entry.target.play() : entry.target.pause()));
