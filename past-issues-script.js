
  let currentPage = 0;
  const cardsPerPage = 20;
  let currentCards = [];

  function performSearch() {
    const resultArea = document.getElementById('resultArea');
    const selectedVolume = document.getElementById('volumeSelect').value;
    currentPage = 0;

    // 🧹 Clear previous results
    resultArea.innerHTML = '';
    document.getElementById('paginationControls').style.display = 'none';

    // 📦 Dataset - Add more as needed
    const allData = {
      vol1issue1: [
        {
          title: '001 - PAvan is the best',
          abstract: 'Sample abstract text for entry one. It continues with another sentence for visual balance.',
          authors: 'John Doe, Jane Smith',
          downloadLink: '#'
        },
        {
          title: '002 - PAvan is still the best',
          abstract: 'Another example abstract for the second card in Volume 1, Issue 1.',
          authors: 'Alice Brown, Bob Johnson',
          downloadLink: '#'
        },
        // 🆕 Add up to 20+ items here
      ],
      vol1issue2: [
        {
          title: '003 - Another sample title',
          abstract: 'Example abstract content for Volume 1, Issue 2. Another dummy entry for testing.',
          authors: 'Charlie King, Dana Lee',
          downloadLink: '#'
        }
      ],
      vol2issue1: [
        {
          title: '004 - Example for new dropdown',
          abstract: 'New abstract sample line one. New abstract line two.',
          authors: 'Samuel T., Emily R.',
          downloadLink: '#'
        }
      ]
    };

    currentCards = allData[selectedVolume] || [];
    displayCards();
  }

  function displayCards() {
    const resultArea = document.getElementById('resultArea');
    resultArea.innerHTML = '';

    const start = currentPage * cardsPerPage;
    const end = start + cardsPerPage;
    const pageCards = currentCards.slice(start, end);

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

    // ➕ Show next page button if more cards exist
    const paginationControls = document.getElementById('paginationControls');
    if (currentCards.length > (currentPage + 1) * cardsPerPage) {
      paginationControls.style.display = 'block';
    } else {
      paginationControls.style.display = 'none';
    }
  }

  function nextPage() {
    currentPage++;
    displayCards();
  }
