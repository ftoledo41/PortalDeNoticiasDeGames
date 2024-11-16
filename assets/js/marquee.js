document.addEventListener("DOMContentLoaded", () => {
  let marquee = (Selector_list, speed) => {

    const list = document.querySelector(Selector_list);

    // Para la velocidad de la maquesina
    let desplazamiento = 0;

    setInterval(() => {
      list.style.marginLeft = `-${desplazamiento}px`;

      if (desplazamiento > list.clientWidth) {
        desplazamiento = 0;
      }
      desplazamiento = desplazamiento + speed;
    },0);
  };

  marquee(".marquee__list", 0.1);
});
