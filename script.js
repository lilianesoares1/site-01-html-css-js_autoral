document.addEventListener("DOMContentLoaded", function () {
  const radios = document.querySelectorAll("input[name='pagamento']");
  const pixInfo = document.getElementById("pix-info");
  const cartaoInfo = document.getElementById("cartao-info");

  radios.forEach(radio => {
    radio.addEventListener("change", function () {
      if (radio.value === "pix") {
        pixInfo.style.display = "block";
        cartaoInfo.style.display = "none";
      } else if (radio.value === "cartao") {
        cartaoInfo.style.display = "block";
        pixInfo.style.display = "none";
      }
    });
  });
});
 