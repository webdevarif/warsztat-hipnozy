class Theme {
    constructor() {
        this.setupHeader();
        this.setupSVGIcon();
    }
    
    setupHeader() {
        const menuButtons = document.querySelectorAll('.menu--toggler');
        const menuOverlay = document.querySelector('.offcanvas-overlay');
    
        if (menuButtons.length) {
            menuButtons.forEach(button => {
                button.addEventListener('click', function () {
                    document.body.classList.add('open-offcanvas');
                    menuOverlay.classList.add('show');
                });
            });
            menuOverlay.addEventListener('click', function(){
                document.body.classList.remove('open-offcanvas');
                menuOverlay.classList.remove('show');
            })
        }
    }
    
    setupSVGIcon() {
        function createSVGIcon(iconName) {
            // Define the base path for the SVG icons
            const basePath = '../svg/icons/';

            // Construct the file path for the provided icon name
            const filePath = `${basePath}${iconName}.svg`;

            // Load the SVG content from the file path
            return fetch(filePath)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text();
                })
                .catch(error => {
                    console.error('Error fetching SVG icon:', error);
                    throw error; // rethrow the error to be caught by the caller
                });
        }

        const svgIcons = document.querySelectorAll('svg-icon');
        if (svgIcons.length) {
            svgIcons.forEach(svgIcon => {
                const iconName = svgIcon.textContent.trim();
                createSVGIcon(iconName)
                    .then(svgContent => {
                        // Set the inner HTML of each <svg-icon> element to the SVG content
                        svgIcon.innerHTML = svgContent;
                    })
                    .catch(error => {
                        // Handle errors here
                        console.error('Error setting SVG content:', error);
                    });
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    new Theme();
});
