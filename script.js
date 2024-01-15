const accordionBtns = document.querySelectorAll('.accordion-btn');

accordionBtns.forEach((btn, index) => {
    btn.addEventListener('click', function() {
        this.classList.toggle('active');
        const accordionDescription = this.nextElementSibling;
        const plusIcon = this.querySelector('.plus-icon');
        const minusIcon = this.querySelector('.minus-icon');

        if (accordionDescription.style.maxHeight) {
            accordionDescription.style.maxHeight = null;
            plusIcon.style.display = 'block';
            minusIcon.style.display = 'none';
        } else {
            accordionDescription.style.maxHeight = accordionDescription.scrollHeight + 'px';
            plusIcon.style.display = 'none';
            minusIcon.style.display = 'block';
        }
    });

    // Check if the current button is the first one and set its initial state to open

    if (index === 0) {
        const accordionDescription = btn.nextElementSibling;
        const plusIcon = btn.querySelector('.plus-icon');
        const minusIcon = btn.querySelector('.minus-icon');

        accordionDescription.style.maxHeight = accordionDescription.scrollHeight + 'px';
        plusIcon.style.display = 'none';
        minusIcon.style.display = 'block';
        btn.classList.add('active');
    }
});
