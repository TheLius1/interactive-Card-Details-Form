document.addEventListener("DOMContentLoaded", function () {
  const ratings = document.querySelectorAll(".rating p");
  const submitBtn = document.querySelector(".submit_btn input");
  const ratingSection = document.querySelector(".rating_section");
  const ratingResultSection = document.querySelector(".rating__result");
  const ratingText = document.querySelector(".rating-text .rate");

  let selectedRating = null;

  ratings.forEach((rating) => {
    rating.addEventListener("click", function () {
      selectedRating = parseInt(this.textContent);
      ratings.forEach((number) => {
        number.classList.remove("checked");
      });
      this.classList.add("checked");
    });
  });

  submitBtn.addEventListener("click", function () {
    if (selectedRating !== null) {
      ratingSection.style.display = "none";
      ratingResultSection.style.display = "flex";

      ratingText.textContent = "You selected " + selectedRating + " out of 5";

      selectedRating = null;
    }
  });
});
