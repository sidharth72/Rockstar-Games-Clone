const hamburgerMenu = document.getElementById('hamburger-menu');
const sidebar = document.getElementById('sidebar');

hamburgerMenu.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    hamburgerMenu.classList.toggle('collapsed');
});


// Array of headings for each slide
var slideHeadings = [
    "Halloween in GTA Online",
    "Now on Nintendo Switch and PS4",
    "The Mammoth Avenger",
    "San Andreas Mercenaries Out Now"
];

var slideWord = [
    "Grand Theft Auto Online",
    "Red Dead Redemption",
    "Grand Theft Auto Online",
    "Grand Theft Auto Online",
]


$('#carouselExampleIndicators').on('slid.bs.carousel', function () {
    var currentSlideIndex = $('.carousel-item.active').index();

    // Update the gta-heading based on the current slide index
    $('#gta-heading').text(slideHeadings[currentSlideIndex]);
    $('#gta-word').text(slideWord[currentSlideIndex]);
});

