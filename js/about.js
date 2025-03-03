const aboutTestimonialEn = [
    {
        id: 1,
        description:
            'At "Swarm", we believe in the power of technology to reshape the future. As a leading Saudi company in the fields of artificial intelligence, advanced software, digital transformation, and cybersecurity, we strive to provide innovative solutions that meet our clients\' needs and contribute to achieving their aspirations.',
        imgUrl: './images/about/testimonials/1.webp',
        name: 'Dr. Abdullah Al-Badrani',
        position: 'CEO of Swarm'
    },
    // {
    //     id: 2,
    //     description:
    //         'At "Swarm", we believe in the power of technology to reshape the future. As a leading Saudi company in the fields of artificial intelligence, advanced software, digital transformation, and cybersecurity, we strive to provide innovative solutions that meet our clients\' needs and contribute to achieving their aspirations.',
    //     imgUrl: './images/about/testimonials/1.webp',
    //     name: 'Dr. Abdullah Al-Badrani',
    //     position: 'CEO of Swarm'
    // },
    // {
    //     id: 3,
    //     description:
    //         'At "Swarm", we believe in the power of technology to reshape the future. As a leading Saudi company in the fields of artificial intelligence, advanced software, digital transformation, and cybersecurity, we strive to provide innovative solutions that meet our clients\' needs and contribute to achieving their aspirations.',
    //     imgUrl: './images/about/testimonials/1.webp',
    //     name: 'Dr. Abdullah Al-Badrani',
    //     position: 'CEO of Swarm'
    // }
];
const aboutTestimonialAr = [
    {
        id: 1,
        description:
            'في "سوارم"، نحن نؤمن بقوة التقنية في إعادة تشكيل المستقبل. كشركة سعودية رائدة في مجالات الذكاء الاصطناعي البرمجيات المتقدمة، والتحول الرقمي، والأمن السيبراني تسعى لتقديم حلول مبتكرة تلبي احتياجات عملائنا وتساهم في تحقيق تطلعاتهم.',
        imgUrl: './images/about/testimonials/1.webp',
        name: 'د. عبدالله البدراني',
        position: 'المدير التنفيذي لشركة سوارم'
    },
    // {
    //     id: 2,
    //     description:
    //         'في "سوارم"، نحن نؤمن بقوة التقنية في إعادة تشكيل المستقبل. كشركة سعودية رائدة في مجالات الذكاء الاصطناعي البرمجيات المتقدمة، والتحول الرقمي، والأمن السيبراني تسعى لتقديم حلول مبتكرة تلبي احتياجات عملائنا وتساهم في تحقيق تطلعاتهم.',
    //     imgUrl: './images/about/testimonials/1.webp',
    //     name: 'د. عبدالله البدراني',
    //     position: 'المدير التنفيذي لشركة سوارم'
    // },
    // {
    //     id: 3,
    //     description:
    //         'في "سوارم"، نحن نؤمن بقوة التقنية في إعادة تشكيل المستقبل. كشركة سعودية رائدة في مجالات الذكاء الاصطناعي البرمجيات المتقدمة، والتحول الرقمي، والأمن السيبراني تسعى لتقديم حلول مبتكرة تلبي احتياجات عملائنا وتساهم في تحقيق تطلعاتهم.',
    //     imgUrl: './images/about/testimonials/1.webp',
    //     name: 'د. عبدالله البدراني',
    //     position: 'المدير التنفيذي لشركة سوارم'
    // }
];

var currentURL = window.location.href;
const aboutTestimonial = currentURL.includes('-ar') ? aboutTestimonialAr : aboutTestimonialEn;

const aboutTestimonialList = document.querySelector('.testimonial-items');
aboutTestimonialList.innerHTML = '';
aboutTestimonial.forEach(item => {
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="text-white-color py-4">
    <div class="row align-items-center testimonial-width">
        <div class="col-lg-7 order-lg-1 order-2">
            <p class="description fs-6 mb-0 text-dark">
            ${item.description}
            </p>
        </div>
        <div class="col-lg-5 order-lg-2 order-1">
            <div class="p-4">
                <div class="person-img m-auto">
                    <img src="${item.imgUrl}" alt="">
                </div>
                <div class="info m-auto">
                    <h3 class="fs-5-2 mt-4 text-dark">
                    ${item.name}
                    </h3>
                    <small class="fs-6-1 text-black-50 mt-1">
                    ${item.position}
                    </small>
                </div>
            </div>
        </div>
    </div>
</div>
    `;
    aboutTestimonialList.appendChild(div);
});

// setTimeout(() => {
//     $('.testimonial-items').slick({
//         infinite: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         dots: true,
//         nav: false,
//         // vertical: true,
//         // verticalSwiping: true,
//         autoplay: true,
//         speed: 2000,
//         fade: true,
//         rtl: currentURL.includes('-ar') ? true : false
//     });
// }, 100);


