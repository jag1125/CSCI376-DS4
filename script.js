document.addEventListener("DOMContentLoaded", () => {
    const books = document.querySelectorAll(".book");
    const highlightBtn = document.querySelector("#highlightButton");
    const resetBtn = document.querySelector("#resetButton");
    const clearBtn = document.querySelector("#clearButton");
  
    // ----- EVENTS -----
    highlightBtn.addEventListener("click", () => {
      books.forEach(book => {
        const title = book.querySelector("h2").textContent;
        if (title.length > 20) {
          book.classList.remove("border-primary");
          book.classList.add("border-danger", "border-3");
        }
      });
    });
  
    resetBtn.addEventListener("click", () => {
      books.forEach(book => {
        book.classList.remove("border-danger", "border-3", "bg-info", "text-white", "d-none");
        book.classList.add("border-primary");
      });
      searchInput.value = "";
    });
  
    books.forEach(book => {
      book.addEventListener("click", () => {
        book.classList.add("bg-info", "text-white");
        setTimeout(() => {
          book.classList.remove("bg-info", "text-white");
        }, 1000);
      });
    });
  
    // ----- SEARCH LOGIC -----
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase();
      books.forEach(book => {
        const title = book.querySelector("h2").textContent.toLowerCase();
        book.closest(".col").classList.toggle("d-none", !title.includes(query));
      });
    });
  
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      books.forEach(book => {
        book.closest(".col").classList.remove("d-none");
      });
    });
  });

  
  // for modal
  const exampleModal = document.getElementById('exampleModal');
  if (exampleModal) {
    exampleModal.addEventListener('show.bs.modal', event => {
      // Button that triggered the modal
      const button = event.relatedTarget;
      // Extract info from data-bs-* attributes
      const title = button.getAttribute('data-bs-title');
      const description = button.getAttribute('data-bs-description');
      const image = button.getAttribute('data-bs-image');

      // Update the modal's content.
      const modalTitle = exampleModal.querySelector('.modal-title');
      const modalBody = exampleModal.querySelector('.modal-body');
  
      modalTitle.textContent = `${title}`;
      modalBody.textContent = `${description}`;
    });
  }