  // ➕ JS FUNCTION TO ADD MORE AUTHOR FIELDS (UP TO 7 MAX)
  let authorCount = 1;
  function addAuthorFields() {
    if (authorCount >= 7) return;
    const container = document.getElementById('authorFields');
    const wrapper = document.createElement('div');
    wrapper.className = 'row g-3 mt-2 author-entry';
    wrapper.innerHTML = `
      <div class="col-md-3"><input type="text" class="form-control" placeholder="Name" required></div>
      <div class="col-md-3"><input type="email" class="form-control" placeholder="Email" required></div>
      <div class="col-md-3"><input type="text" class="form-control" placeholder="Mobile" required></div>
      <div class="col-md-2"><input type="text" class="form-control" placeholder="Institute" required></div>
      <div class="col-md-1 d-flex align-items-center">
        <button type="button" class="btn btn-sm btn-danger" onclick="removeAuthor(this)">Delete</button>
      </div>
    `;
    container.appendChild(wrapper);
    authorCount++;
  }

  // ❌ JS FUNCTION TO REMOVE AUTHOR FIELD
  function removeAuthor(button) {
    const authorEntry = button.closest('.author-entry');
    authorEntry.remove();
    authorCount--;
  }