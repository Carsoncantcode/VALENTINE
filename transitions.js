
document.addEventListener('DOMContentLoaded', () => {
    const divs = [1, 2, 3, 4].map(num => document.getElementById(num.toString()));

    let width = 160; // Initial width for the noButton
    let height = 40; // Initial height for the noButton

    document.getElementById('noButton').addEventListener('click', function() {
        const texts = ["I said don't say no.", "Why did you click it again.", "Rose what the fuck.", "ROSE.", "HEY.", "STOP IT.", "STOP FUCKING SAYING NO.", "BITCH.", "CLICK YES", "PLEASE.", "You're running out of room.", "I can do this all day", "if you don't love me just say that.", "Wow.", "Unreal.", "Click yes."]; // Add more as needed
        
        this.dataset.clicks = (parseInt(this.dataset.clicks) || 0) + 1;
        const clicks = parseInt(this.dataset.clicks);
    
        if (clicks - 1 < texts.length) {
            this.textContent = texts[clicks - 1]; 
        }
    
        width *= 1.5;
        height *= 1.5;
        
        this.style.width = `${width}px`;
        this.style.height = `${height}px`;
    });

    document.getElementById('yesButton').addEventListener('click', function() {
        document.getElementById('4').classList.add('hidden');
        document.getElementById('valentine').classList.remove('hidden');
        document.getElementById('valentine').classList.add('inline-flex');
    });

    function showDiv(id, divs) {
        divs.forEach(div => {
            div.classList.add('hidden');
            // Ensure all children start with opacity 0
            Array.from(div.children).forEach(child => {
                child.classList.add('opacity-0'); // Set initial opacity to 0
                child.style.animationDelay = '0s'; // Reset the animation delay
            });
        });
    
        const activeDiv = document.getElementById(id);
        activeDiv.classList.remove('hidden');
        activeDiv.classList.add('inline-flex');
    
        const children = Array.from(activeDiv.children);
        const staggerTime = 3500 / children.length; // Calculate stagger time based on number of children
    
        children.forEach((child, index) => {
            child.style.animationDelay = `${(index * staggerTime) / 1000}s`;
            child.classList.add('fade-in'); // Add the fade-in class to trigger the animation
        });
    }

    // Initially show the first div
    showDiv('1', divs);

    let currentDivIndex = 0;
    // Set an interval to run every 4 seconds
    const interval = setInterval(() => {
        // Increment the index
        currentDivIndex++;

        // If we've shown the last div, stop the interval
        if (currentDivIndex >= divs.length) {
            clearInterval(interval);
        } else {
            // Show the next div
            showDiv(divs[currentDivIndex].id, divs);
        }
    }, 3600); // A bit more than 3500ms to ensure animations are completed
});
