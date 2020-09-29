const d = document;
let resultado;

export default function busqueda(input, selector) {
  d.addEventListener("keyup", (e) => {
    if (e.target.matches(input)) {
      //console.log(e.key);
      //console.log(e.target.value);

      if (e.key === "Escape") {
        e.target.value = "";
      }

      d.querySelectorAll(selector).forEach((el) => {
        el.textContent.toLowerCase().includes(e.target.value.toLowerCase()) ? el.classList.remove("filter") : el.classList.add("filter");
      });
    }
  });
}
