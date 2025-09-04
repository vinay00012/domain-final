
  let currentIssuePage = 0;
  const currentCardsPerPage = 20;
  let currentIssueCards = [];

  // 🧩 Replace this array with your cards for Volume 7, Issue 7
  const currentIssueData = [
    {
      title: '001 - PAvan is the best',
      abstract: 'Sample abstract text for entry one. It continues with another sentence for visual balance.',
      authors: 'John Doe, Jane Smith',
      downloadLink: '#'
    },
    {
      title: '002 - PAvan is still the best',
      abstract: 'Another example abstract for the second card in Volume 7, Issue 7.',
      authors: 'Alice Brown, Bob Johnson',
      downloadLink: '#'
    },

     {
      title: '002 - PAvan is still the best',
      abstract: 'Another example abstract for the second card in Volume 7, Issue 7.',
      authors: 'Alice Brown, Bob Johnson',
      downloadLink: '#'
    },
    // ➕ Add more cards here
  ];

  currentIssueCards = currentIssueData;
  displayCurrentIssueCards();

  function displayCurrentIssueCards() {
    const resultArea = document.getElementById('currentIssueArea');
    resultArea.innerHTML = '';

    const start = currentIssuePage * currentCardsPerPage;
    const end = start + currentCardsPerPage;
    const pageCards = currentIssueCards.slice(start, end);

    pageCards.forEach(data => {
      const card = document.createElement('div');
      card.className = 'card mb-4 p-3';

      card.innerHTML = `
        <div class="d-flex align-items-center mb-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google Logo" style="width: 40px; height: auto;" class="me-3">
          <h5 class="mb-0">${data.title}</h5>
        </div>
        <p class="mb-1"><strong>Abstract:</strong> ${data.abstract}</p>
        <p class="mb-2"><strong>Authors:</strong> ${data.authors}</p>
        <hr>
        <div class="text-end">
          <a href="${data.downloadLink}" class="btn btn-primary">Download</a>
        </div>
      `;

      resultArea.appendChild(card);
    });

    const paginationControls = document.getElementById('currentPaginationControls');
    if (currentIssueCards.length > (currentIssuePage + 1) * currentCardsPerPage) {
      paginationControls.style.display = 'block';
    } else {
      paginationControls.style.display = 'none';
    }
  }

  function nextCurrentPage() {
    currentIssuePage++;
    displayCurrentIssueCards();
  }