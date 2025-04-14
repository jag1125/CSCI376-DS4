document.addEventListener("DOMContentLoaded", () => {
    const books = document.querySelectorAll(".book");
    const clearBtn = document.querySelector("#clearButton");
    const filterBtn = document.getElementById("filter-select");
    const filterDone = document.getElementById("filterButton");
  
    // ----- EVENTS -----
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
        const genre = book.querySelector("p2").textContent.toLowerCase();
        const author = book.querySelector("p").textContent.toLowerCase();
        book.closest(".col").classList.toggle("d-none", (!title.includes(query) && !genre.includes(query) && !author.includes(query)));
      });
    });
  
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      books.forEach(book => {
        book.closest(".col").classList.remove("d-none");
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



  filterDone.addEventListener("click", () => {
    let filter = null;
    for(const option of filterBtn.children){
      if(option.selected){
        filter = option.text
      }
    }
    if(filter === "Fiction" || filter === "Fantasy" || filter === "Dystopian"){
      books.forEach(book => {
        const genre = book.querySelector("p2").textContent;
        book.closest(".col").classList.toggle("d-none", !genre.includes(filter));
      });
    }
    else{
      books.forEach(book => {
        book.closest(".col").classList.remove("d-none");
      });
    }
  });
});