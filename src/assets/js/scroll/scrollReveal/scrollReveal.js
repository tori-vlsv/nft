import ScrollReveal from "scrollreveal";

function scrollInit() {
  const options = {
    distance: "20%",
    origin: "bottom",
    opacity: 0,
    mobile: false,
    duration: 800,
  };
  ScrollReveal().reveal(".reveal", options);
}
scrollInit();
