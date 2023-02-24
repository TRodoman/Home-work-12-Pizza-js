// Валидация формы подтверджения заказа
export function validate() {


  let flagBtn = false;
  let name = false;
  let phone = false;
  let email = false;
  const btn = document.querySelector("#btnSubmit");

  const [...inputs] = document.querySelectorAll("input");
  const user = {
    name: "",
    phone: "",
    email: "",
  };

  const validate = (p, v) => p.test(v);

  inputs.forEach((input) => {
    input.addEventListener("change", (e) => {
      document.querySelector("#name").classList.remove("error");
      document.querySelector("#phone").classList.remove("error");
      document.querySelector("#email").classList.remove("error");
      if (e.target.dataset.type === "name") {
        if (!validate(/^[а-яієґї'-]{2,}$/gi, e.target.value)) {
          e.target.classList.add("error");
          name = false;
        } else {
          user.name = e.target.value;
          e.target.classList.remove("error");
          name = true;
        }
      } else if (e.target.dataset.type === "phone") {
        if (!validate(/^\+380\d{2}\d{3}\d{2}\d{2}$/gi, e.target.value)) {
          e.target.classList.add("error");
          phone = false;
        } else {
          user.phone = e.target.value;
          e.target.classList.remove("error");
          phone = true;
        }
      } else if (e.target.dataset.type === "email") {
        if (!validate(/^[a-z_.0-9]+@[a-z0-9-.]+\.[a-z.]+$/gi, e.target.value)) {
          e.target.classList.add("error");
          email = false;
        } else {
          user.email = e.target.value;
          e.target.classList.remove("error");
          email = true;
        }
      } else {
        e.target.classList.add("error");
      }
    });
  });

  flagBtn = name && phone && email ? true : false;

  let form = document.querySelector("#info");

  btn.addEventListener("click", () => {
    if (name === false || phone === false || email === false) {
      flagBtn = false;
      document.querySelector("#name").classList.add("error");
      document.querySelector("#phone").classList.add("error");
      document.querySelector("#email").classList.add("error");
      return;
    } else if ((flagBtn = true)) {
      localStorage.info = `name: ${info.name.value}, phone: ${info.phone.value}, email: ${info.email.value} `;
    }
  });
}
validate();

