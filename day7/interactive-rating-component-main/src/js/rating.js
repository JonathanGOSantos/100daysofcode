const ratingForm = document.querySelector('form');
const ratingInput = document.querySelectorAll('input[type="radio"]');

ratingInput.forEach((input) => {
  input.addEventListener('click', (event) => {
    const inputBox = ratingForm.querySelectorAll('div');
    const inputLabel = input.parentElement.querySelector('label');
    inputBox.forEach((box) => {
      box.classList.remove('bg-primary');
      box.classList.add('hover:bg-mediumGrey/80', 'hover:text-white');
      box.querySelector('label').classList.remove('text-white');
    });
    input.parentElement.classList.add('bg-primary');
    input.parentElement.classList.remove(
      'hover:bg-mediumGrey/80',
      'hover:text-white'
    );
    inputLabel.classList.remove('text-inherit');
    inputLabel.classList.add('text-white');
  });
});

ratingForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const rating = ratingForm.querySelector('input[type="radio"]:checked').value;
  submitRating(rating);
});

function submitRating(rating) {
  const card = document.getElementById('feedback');
  card.innerHTML = `
    <h2 class="sr-only">Feedback</h2>
    <section
    class="px-6 py-9 md:py-11 rounded-2xl bg-gradient-to-b from-darkBlue/100 to-darkBlue/50 shadow-md flex flex-col items-center text-center"
  >
    <img src="./images/illustration-thank-you.svg" alt="" />
    <output
      class="bg-mediumGrey/10 py-2 px-4 mt-6 mb-9 rounded-3xl text-primary"
      id="rating-output"
      >You selected ${rating} out of 5</output
    >
    <strong class="text-white text-2xl mb-4">Thank You!</strong>
    <p class="text-mediumGrey text-base">
      We appreciate you taking the time to give a rating. If you ever need
      more support, don't hesitate to get in touch!
    </p>
  </section>
  `;
}
