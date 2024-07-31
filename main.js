const navBtns = document.querySelectorAll(".navbtn");

navBtns.forEach((btn) => {
  btn.classList.remove("text-black");
  btn.addEventListener("click", () => {
    // Remove text-black from all buttons
    navBtns.forEach((navBtn) => {
      navBtn.classList.remove("text-black");
    });

    // Add text-black to the clicked button
    btn.classList.add("text-black");
  });
});

window.onscroll = function () {
  if (window.scrollY >= 800) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

const scrollBtn = document.querySelector(".scroll-top");

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

//scroll spy from nav to the selcted section

const pizzaBtn = document.querySelector(".spy-1");
const burgerBtn = document.querySelector(".spy-2");
const pastaBtn = document.querySelector(".spy-3");
const noodelsBtn = document.querySelector(".spy-4");
const sandwitchsBtn = document.querySelector(".spy-5");
const saladBtn = document.querySelector(".spy-6");
const Shopbtn = document.querySelector(".spy-7");
const contactUsBtn = document.querySelector(".spy-8");

const pizzaSection = document.querySelector(".got-spy-1");
const burgerSection = document.querySelector(".got-spy-2");
const pastaSection = document.querySelector(".got-spy-3");
const noodelsSection = document.querySelector(".got-spy-4");
const sandwitcSection = document.querySelector(".got-spy-5");
const saladSection = document.querySelector(".got-spy-6");
const service = document.querySelector(".got-spy-7");
const contactUsSection = document.querySelector(".got-spy-8");

pizzaBtn.addEventListener("click", (e) => {
  e.preventDefault();
  pizzaSection.scrollIntoView({ behavior: "smooth" });
});

pastaBtn.addEventListener("click", (e) => {
  e.preventDefault();
  pastaSection.scrollIntoView({ behavior: "smooth" });
});
noodelsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  noodelsSection.scrollIntoView({ behavior: "smooth" });
});
sandwitchsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  sandwitcSection.scrollIntoView({ behavior: "smooth" });
});
burgerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  burgerSection.scrollIntoView({ behavior: "smooth" });
});
saladBtn.addEventListener("click", (e) => {
  e.preventDefault();
  saladSection.scrollIntoView({ behavior: "smooth" });
});
Shopbtn.addEventListener("click", (e) => {
  e.preventDefault();
  service.scrollIntoView({ behavior: "smooth" });
});
contactUsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  contactUsSection.scrollIntoView({ behavior: "smooth" });
});

//input search menu items
const menuItems = document.querySelectorAll(".item-menu");
const searchInput = document.querySelector(".search-input ");

searchInput.addEventListener("input", (e) => {
  let filter = e.target.value.toLowerCase();

  menuItems.forEach((product) => {
    let text = product.textContent.toLocaleLowerCase();
    if (text.includes(filter)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});

// cart fillter

document.addEventListener("DOMContentLoaded", () => {
  const menuCarts = document.querySelectorAll(".cart");
  const cartItems = document.querySelectorAll(".cart-item");
  const mainMenuCarts = document.querySelectorAll(".main-cart");

  const fillercards = (e) => {
    // Show or hide cart items based on the clicked button
    cartItems.forEach((card) => {
      card.classList.add("hidden");
      if (
        card.dataset.name === e.target.dataset.name ||
        e.target.dataset.name === "All"
      ) {
        card.classList.remove("hidden");
      }
    });
  };

  const handleClick = (e) => {
    const clickedButtonName = e.target.dataset.name;
    // Remove the border class from all mainMenuCarts
    mainMenuCarts.forEach((btn) => {
      btn.classList.remove("bg-orange-200");
    });

    // Add the border class to the clicked mainMenuCart
    mainMenuCarts.forEach((btn) => {
      if (btn.dataset.name === clickedButtonName) {
        btn.classList.add("bg-orange-200");
      }
    });

    // Call fillercards to show/hide cart items based on the clicked button
    fillercards(e);
  };

  // Add event listeners to each button
  menuCarts.forEach((btn) => {
    btn.addEventListener("click", handleClick);
  });
});

document
  .getElementById("submitButton")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get all input elements with the class 'inp'
    const inputs = document.querySelectorAll(".inp");

    // Check if any input is empty
    let allFilled = true;
    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        allFilled = false;
      }
    });

    if (!allFilled) {
      // Display an error alert if any input is empty
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all the fields.",
      });
    } else {
      // Display the SweetAlert2 success popup if all fields are filled
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your email has been sent",
        showConfirmButton: false,
        timer: 1500,
      });

      // Optionally, you can reset the form fields after successful submission
      inputs.forEach((input) => (input.value = ""));
    }
  });
