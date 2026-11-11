
document.addEventListener("DOMContentLoaded", () => {

  // MOBILE NAVIGATION
  const menuButton = document.getElementById("menuButton");
  const navMenu = document.getElementById("navMenu");

  menuButton.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("active");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });

  // AUTOMATIC YEAR
  document.getElementById("year").textContent =
    new Date().getFullYear();

  // SELECT GRADE FROM ADMISSION BUTTON
  const gradeSelect = document.getElementById("gradeApplied");

  document.querySelectorAll(".choose-grade").forEach(button => {
    button.addEventListener("click", () => {
      gradeSelect.value = button.dataset.grade;
    });
  });

  // APPLICATION FORM VALIDATION AND PRINTING
  const form = document.getElementById("applicationForm");

  form.addEventListener("submit", event => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const studentName =
      document.getElementById("studentName").value.trim();

    if (!studentName) {
      alert("Please enter the student's full name.");
      return;
    }

    document.body.classList.add("print-application");

    window.print();
  });

  // REMOVE PRINT MODE
  window.addEventListener("afterprint", () => {
    document.body.classList.remove("print-application");
  });

  // RESET FORM
  form.addEventListener("reset", () => {
    setTimeout(() => {
      gradeSelect.value = "";
    }, 0);
  });

});


