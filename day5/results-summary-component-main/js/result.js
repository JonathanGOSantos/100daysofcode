function toggleResult(data) {
  const result = document.querySelector('.c-main__result');
  const resultScore = result.querySelector('.c-result__score__value');
  const resultTier = result.querySelector('.c-result__tier');
  const resultMessage = result.querySelector('.c-result__message');

  let score = 0;

  data.forEach((item, i) => {
    score += item.score;
  });
  score = parseInt(score / data.length);
  resultScore.textContent = score;

  if (score >= 70) {
    resultTier.textContent = 'Great';
    resultMessage.textContent =
      'You scored higher than 65% of the people who have taken these tests.';
  } else {
    resultTier = 'No data';
    resultMessage = 'No data';
  }
}

function toggleSummary(data) {
  data.forEach((item, i) => {
    const summaryItem = document.querySelectorAll('.c-summary__item')[i];
    const summaryIcon = summaryItem.querySelector('.c-summary__icon');
    const summaryCategory = summaryItem.querySelector('.c-summary__category');
    const summaryScore = summaryItem.querySelector('.c-summary__score__value');

    summaryItem.style = `--color: ${item.color}`;
    summaryIcon.src = item.icon;
    summaryCategory.textContent = item.category;
    summaryScore.textContent = item.score;
  });

  toggleResult(data);
}

function getResults() {
  let url = '/100daysofcode/day5/results-summary-component-main/js/data.json';
  if (window.location.href.startsWith('http://localhost')) {
    url = '/js/data.json';
  }
  fetch(url)
    .then((response) => response.json())
    .then((data) => toggleSummary(data))
    .catch((error) => {
      console.error('Error:', error);
      alert('An error occurred while fetching the data. Please try again.');
    });
}

getResults();
