// clients
const clients = [
    { imageUrl: './images/clients/01.svg', altText: 'client3' },
    { imageUrl: './images/clients/02.svg', altText: 'client4' },
    { imageUrl: './images/clients/03.png', altText: 'client7' },
    { imageUrl: './images/clients/4.svg', altText: 'client8' },
    { imageUrl: './images/clients/5.svg', altText: 'client10' },
    { imageUrl: './images/clients/06.png', altText: 'client12' },
    { imageUrl: './images/clients/07.png', altText: 'client13' },
    { imageUrl: './images/clients/08.svg', altText: 'client15' },
    { imageUrl: './images/clients/09.svg', altText: 'client17' },
    { imageUrl: './images/clients/010.svg', altText: 'client18' },
    { imageUrl: './images/clients/11.svg', altText: 'client19' },
    { imageUrl: './images/clients/012.svg', altText: 'client1' },
    { imageUrl: './images/clients/13.svg', altText: 'client21' },
    { imageUrl: './images/clients/014.png', altText: 'client22' },
    { imageUrl: './images/clients/15.webp', altText: 'client22' },
    { imageUrl: './images/clients/16.webp', altText: 'client22' },
]

function createClients() {
    var clientsItems = $(`.clients-items`);
    clients?.forEach(function (item) {
        var slide = $('<div class="client-img d-flex justify-content-center"><img class="h-100" src="' + item.imageUrl + '" alt="' + item.altText + '"></div>');
        clientsItems.append(slide);
    });
    makeClientsSlide();
}
createClients();

function makeClientsSlide() {
    setTimeout(() => {
        $('.clients-items').slick({
            autoplay: true,
            speed: 200,
            dots: false,
            infinite: true,
            loop: true,
            arrows: true, // Enable arrows
            draggable: true, // Enable dragging with mouse
            swipeToSlide: true, // Enable swipe to slide functionality
            slidesToShow: 7,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 7,
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        });
    }, 100);
}

let clientsImgs = document.querySelectorAll('#clients img');
clientsImgs.forEach(image => {
    const originalSrc = image.src;
    image.addEventListener('mouseover', function () {
        // Change the extension to webp on hover
        // image.src = originalSrc?.replace(/\.svg$/, '.webp');
    });

    image.addEventListener('mouseout', function () {
        // Change the extension back to png when the mouse leaves
        image.src = originalSrc;
    });
});

//==================== partners======================
$(document).ready(function () {
    // Initial data for each tab
    var digitalInfrastructureData = [
        { imageUrl: './../images/home/partners/techno/1.png', altText: 'partner' },
        { imageUrl: './../images/home/partners/techno/2.png', altText: 'partner' },
        { imageUrl: './../images/home/partners/techno/3.png', altText: 'partner' },
        { imageUrl: './../images/home/partners/techno/4.png', altText: 'partner' },
        { imageUrl: './../images/home/partners/techno/5.png', altText: 'partner' },
        { imageUrl: './../images/home/partners/techno/6.png', altText: 'partner' },
        { imageUrl: './../images/home/partners/techno/7.png', altText: 'partner' },
        { imageUrl: './../images/home/partners/techno/8.png', altText: 'partner' },
        { imageUrl: './../images/home/partners/techno/9.png', altText: 'partner' },
        { imageUrl: './../images/home/partners/techno/10.png', altText: 'partner' },
        { imageUrl: './../images/home/partners/techno/11.png', altText: 'partner' },
        { imageUrl: './../images/home/partners/techno/12.png', altText: 'partner' }
    ];
    var dataManagementData = [
        { imageUrl: './../images/home/partners/digital/1.png', altText: 'partner' },
        { imageUrl: './../images/home/partners/digital/2.png', altText: 'partner' },
        { imageUrl: './../images/home/partners/digital/3.png', altText: 'partner' },
        { imageUrl: './../images/home/partners/digital/4.png', altText: 'partner' },
        { imageUrl: './../images/home/partners/digital/5.png', altText: 'partner' },
        { imageUrl: './../images/home/partners/digital/6.png', altText: 'partner' },
        { imageUrl: './../images/home/partners/digital/7.png', altText: 'partner' },
        { imageUrl: './../images/home/partners/digital/8.png', altText: 'partner' },
        { imageUrl: './../images/home/partners/digital/9.png', altText: 'partner' },
        { imageUrl: './../images/home/partners/digital/10.png', altText: 'partner' },
        { imageUrl: './../images/home/partners/digital/11.png', altText: 'partner' },
        { imageUrl: './../images/home/partners/digital/12.png', altText: 'partner' },
        { imageUrl: './../images/home/partners/digital/13.png', altText: 'partner' },
        { imageUrl: './../images/home/partners/digital/14.png', altText: 'partner' },
        { imageUrl: './../images/home/partners/digital/15.png', altText: 'partner' },
        { imageUrl: './../images/home/partners/digital/16.png', altText: 'partner' },
        { imageUrl: './../images/home/partners/digital/17.png', altText: 'partner' },
        { imageUrl: './../images/home/partners/digital/18.png', altText: 'partner' },
        { imageUrl: './../images/home/partners/digital/19.png', altText: 'partner' },
        { imageUrl: './../images/home/partners/digital/19.png', altText: 'partner' },
        // { imageUrl: './../images/home/partners/digital/20.png', altText: 'partner' },
        // { imageUrl: './../images/home/partners/digital/21.png', altText: 'partner' },
        // { imageUrl: './../images/home/partners/digital/22.png', altText: 'partner' },
        // { imageUrl: './../images/home/partners/digital/23.png', altText: 'partner' },
        // { imageUrl: './../images/home/partners/digital/24.png', altText: 'partner' },
        // { imageUrl: './../images/home/partners/digital/25.png', altText: 'partner' },
        // { imageUrl: './../images/home/partners/digital/26.png', altText: 'partner' },
        // { imageUrl: './../images/home/partners/digital/27.png', altText: 'partner' },
        // { imageUrl: './../images/home/partners/digital/28.png', altText: 'partner' },
        // { imageUrl: './../images/home/partners/digital/29.png', altText: 'partner' },
        // { imageUrl: './../images/home/partners/digital/30.png', altText: 'partner' },
    ];
    var webSystemsData = [
        { imageUrl: './../images/home/partners/info/1.png', altText: 'partner' },
        { imageUrl: './../images/home/partners/info/2.png', altText: 'partner' },
        { imageUrl: './../images/home/partners/info/3.png', altText: 'partner' },
        { imageUrl: './../images/home/partners/info/4.png', altText: 'partner' },
        { imageUrl: './../images/home/partners/info/5.png', altText: 'partner' },
        { imageUrl: './../images/home/partners/info/6.png', altText: 'partner' },
        { imageUrl: './../images/home/partners/info/7.png', altText: 'partner' },
        { imageUrl: './../images/home/partners/info/8.png', altText: 'partner' },
        { imageUrl: './../images/home/partners/info/9.png', altText: 'partner' },
        { imageUrl: './../images/home/partners/info/10.png', altText: 'partner' },
        { imageUrl: './../images/home/partners/info/11.png', altText: 'partner' },
        { imageUrl: './../images/home/partners/info/12.png', altText: 'partner' },
        { imageUrl: './../images/home/partners/info/13.png', altText: 'partner' },
        { imageUrl: './../images/home/partners/info/14.png', altText: 'partner' },
        { imageUrl: './../images/home/partners/info/15.png', altText: 'partner' },
        { imageUrl: './../images/home/partners/info/16.png', altText: 'partner' },
    ];
    // Function to update data based on the selected tab
    function updateData(tabId, data) {
        var partnersItems = $(`#${tabId} .partners-items`);
        var secondPartnersItems = $(`#${tabId} .second-partners-items`);
        var thirdPartnersItems = $(`#${tabId} .third-partners-items`);
        // Clear existing content
        partnersItems.empty();
        secondPartnersItems.empty();
        thirdPartnersItems.empty();
        // Dynamically create slides
        data.slice(0, Math.ceil(data.length * (1 / 3))).forEach(function (item) {
            var slide = $('<div class="partner-img d-flex"><img class="h-100" src="' + item.imageUrl + '" alt="' + item.altText + '"></div>');
            partnersItems.append(slide);
        });
        data.slice(Math.ceil(data.length * (1 / 3)), Math.ceil(data.length * (2 / 3))).forEach(function (item) {
            var slide = $('<div class="partner-img d-flex"><img class="h-100" src="' + item.imageUrl + '" alt="' + item.altText + '"></div>');
            secondPartnersItems.append(slide);
        });
        data.slice(Math.ceil(data.length * (2 / 3)), Math.ceil(data.length)).forEach(function (item) {
            var slide = $('<div class="partner-img d-flex"><img class="h-100" src="' + item.imageUrl + '" alt="' + item.altText + '"></div>');
            thirdPartnersItems.append(slide);
        });
        // Initialize slick sliders
        partnersItems.children().length > 0 ? createSlider(partnersItems) : '';
        partnersItems.children().length > 0 ? createSlider(secondPartnersItems) : '';
        partnersItems.children().length > 0 ? createSlider(thirdPartnersItems) : '';
    }

    // Function to initialize slick slider
    function createSlider(slider) {
        setTimeout(() => {
            slider.slick({
                autoplay: true,
                infinite: true,
                loop: true,
                speed: 1000,
                slidesToShow: 5,
                slidesToScroll: 1,
                dots: true,
                nav: false,
                vertical: true,
                verticalSwiping: true,
                swipeToSlide: true,
            });

            hideLoading();
            changeImgSrc();
        }, 150);
    }

    // Event listener for tab clicks
    var isSliderInitialized = {
        'pills-digital': true,
        'pills-date': false,
        'pills-system': false,
    };


    // Event listener for tab clicks
    $('.nav-link').on('click', function (event) {
        var tabId = $(this)?.attr('data-bs-target')?.replace('#', ''); // Get the tab ID
        // Check if the slider is already initialized for the current tab
        showLoading();
        if (!isSliderInitialized[tabId]) {
            // Update data based on the selected tab
            switch (tabId) {
                case 'pills-digital':
                    updateData(tabId, digitalInfrastructureData);
                    break;
                case 'pills-date':
                    updateData(tabId, dataManagementData);
                    break;
                case 'pills-system':
                    updateData(tabId, webSystemsData);
                    break;
                default:
                    // Default case (if needed)
                    break;
            }

            // Mark the slider as initialized for the current tab
            isSliderInitialized[tabId] = true;
        }
        if (isSliderInitialized['pills-date'] && isSliderInitialized['pills-digital'] && isSliderInitialized['pills-system']) {
            setTimeout(() => {
                hideLoading();
            }, 500);
        }
    });
    // Initial data for the first tab
    updateData('pills-digital', digitalInfrastructureData);
    function showLoading() {
        $('#pills-tabContent').addClass('d-none');
        $('#pills-loading').removeClass('d-none');
    }

    function hideLoading() {
        $('#pills-tabContent').removeClass('d-none');
        $('#pills-loading').addClass('d-none');
    }
});


// change partner img src when hover
function changeImgSrc() {
    setTimeout(() => {
        let images = document.querySelectorAll('.partner-img img');
        images.forEach(image => {
            const originalSrc = image.src;
            image.addEventListener('mouseover', function () {
                // Change the extension to webp on hover
                image.src = originalSrc?.replace(/\.png$/, '.webp');
            });

            image.addEventListener('mouseout', function () {
                // Change the extension back to png when the mouse leaves
                image.src = originalSrc;
            });
        });
    }, 500);
}
