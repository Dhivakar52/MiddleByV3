$(document).ready(function () {


$('.team-carousel').owlCarousel({
                loop: true,
                margin: 20,
                nav: true,
                dots: true,
                autoplay: true,
                autoplayTimeout: 4000,
                autoplayHoverPause: true,
                navText: ['<', '>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    1024: {
                        items: 3
                    }
                }
            });


$('.dish-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    autoplay: false,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    navText: [
        // Prev Button
        '<span class=""><svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 0.75L0.75 5.25L5.75 9.75" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>',
        
        // Next Button
        '<span class=""><svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.749906 10.4423L6.13452 5.59615L0.749906 0.75" stroke="#003250" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>'
    ],
    responsive: {
        0: { items: 1 },
        768: { items: 1 },
        1024: { items: 1 }
    }
});



$('.home-banner-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: true,
      autoplay: false,
      autoplayTimeout: false,
      autoplayHoverPause: true,
      items: 1,
     
    });



});
document.addEventListener("DOMContentLoaded", function () {
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });




const messages = document.querySelectorAll('.message_expand');
const toggleBtns = document.querySelectorAll('.message_show');

toggleBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    messages[index].classList.toggle("expanded");

    if (messages[index].classList.contains("expanded")) {
      btn.innerHTML = `Read Less <i class="fa fa-chevron-up"></i>`;
    } else {
      btn.innerHTML = `Read Full Message <i class="fa fa-chevron-down"></i>`;
    }
  });
});



// time line accordion


 document.addEventListener('DOMContentLoaded', function() {
            const collapseElements = document.querySelectorAll('.collapse');
            
            collapseElements.forEach(function(element) {
                element.addEventListener('show.bs.collapse', function() {
                    const button = document.querySelector(`[data-bs-target="#${element.id}"]`);
                    button.classList.remove('collapsed');
                });
                
                element.addEventListener('hide.bs.collapse', function() {
                    const button = document.querySelector(`[data-bs-target="#${element.id}"]`);
                    button.classList.add('collapsed');
                });
            });
        });


document.querySelectorAll('.read-toggle').forEach(btn => {
  btn.addEventListener('click', function () {
    const text = this.previousElementSibling;

    text.classList.toggle('expanded');

    if (text.classList.contains('expanded')) {
      this.innerText = "Less";
    } else {
      this.innerText = "More";
    }
  });
});


});
