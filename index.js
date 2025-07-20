const allIcons = document.querySelectorAll(".rating-icon");
const ratingSection = document.getElementsByClassName('section-rating')[0];
const thankYouSection = document.getElementsByClassName('thank-you-section')[0];
const submitButton = document.getElementsByClassName('button-submit')[0];
const ratingText = document.getElementById('rating-text');

const root = document.documentElement;
const whiteColor = getComputedStyle(root).getPropertyValue('--c-white').trim();
const grey900Color = getComputedStyle(root).getPropertyValue('--c-grey-900').trim();
const blackColor = getComputedStyle(root).getPropertyValue('--c-black').trim()
    

allIcons.forEach((icon, index) => {
    icon.addEventListener("click", () => {
        allIcons.forEach((otherIcon, otherIndex) => {
            if (otherIndex !== index) {
                // THIS REMOVES INLINES STYLE --> CSS STYLES TAKE OVER AGAIN
                otherIcon.style.backgroundColor = "";
                otherIcon.style.color = "";
            }
        })
        icon.style.backgroundColor = whiteColor;
        icon.style.color = blackColor;
        const selectedRating = icon.textContent;
        console.log(selectedRating)
        console.log(ratingText)
        ratingText.innerText = `You selected ${selectedRating} out of 5`;
    });
});

submitButton.addEventListener('click', () => {
    ratingSection.classList.add("hidden");
    thankYouSection.classList.remove("hidden");
})