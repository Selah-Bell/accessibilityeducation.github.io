/*!
* Start Bootstrap - Clean Blog v6.0.4 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function () {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if (currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
})


var LOButton = document.querySelectorAll("input[id*='checkLO']");
for (let i = 0; i <= LOButton.length; i++) {
    LOButton[i].addEventListener("click", () => {
        var labelName = "label-" + LOButton[i].getAttribute("id");
        var inputName = "input-" + LOButton[i].getAttribute("id");
        if (LOButton[i].checked) {
            document.getElementById("display" + LOButton[i].getAttribute("id").slice(-5)).style.display = "inline-block";
            document.getElementById("category-section").style.display = "none";
            document.getElementById("back-to-ressources").style.display = "inline-block";
            document.querySelector("input[id='back-btn']").addEventListener("click", () => {
                if (document.querySelector("input[id='back-btn']").checked) {
                    document.getElementById("test").innerHTML = document.getElementById("test").innerHTML + "1";
                    document.getElementById("display" + LOButton[i].getAttribute("id").slice(-5)).style.display = "none";
                    document.getElementById("category-section").style.display = "inline-block";
                    document.querySelector("input[id='back-btn']").checked = false;
                }
                LOButton[i].checked = false;
            }
            )
        }
    }
    )
}
