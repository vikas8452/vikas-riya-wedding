/**
 * @author Vikas Patel <vikas.patel@example.com>
 */
(function ($) {
    "use strict";
      $('.sakura-falling').sakura();
})(jQuery);

/**
 *
 * Despite so many new Bollywood and English song options, I prefered to use two-decade-old song, Din Shagna Da!
 *
 * Ever attended a North Indian Wedding? As soon as the DJ plays Din Shagna Da song, it means that the much-awaited moment is here
 * and the bride is all set to put her first foot forward to the wedding venue under a breathtaking phoolon ki chaadar.
 * Let's keep the sky-high status of this song untouched!
 *
 * When the website is backed up with a soul-stirring track, the feeling becomes absolutely surreal. 
 * Choose a heart-touching track! 🎵 
 *
 * Listen here: https://youtu.be/X0MDALpV29s
 *
 */
$(document).on('click', function(){
    document.getElementById("my_audio").play();
    console.log('Shaadi me zaroor aana');
});

// Set the date we're counting down to
var countDownDate = new Date("Mar 12, 2026 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("time").innerHTML = "<div class='container'><div class='days block'>"+ days + "<br>Days</div>" + "<div class='hours block'>" + hours + "<br>Hours</div>" + "<div class='minutes block'>" + minutes + "<br>Minutes</div>" + "<div class='seconds block'>" + seconds + "<br>Seconds</div></div>";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "Bless the married couple for happy life!";
    }
}, 1000);

// being a bit cool :p  
var styles = [
    'background: linear-gradient(#D33106, #571402)'
    , 'border: 4px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 40px'
    , 'text-align: center'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles1 = [
    'color: #FF6C37'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles2 = [
    'color: teal'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

console.log('\n\n%c SAVE THE DATE: 12th Mar, 2026!', styles);

console.log('%cYour presence is requested!%c\n\nRegards: Vikas Patel', styles1, styles2);

console.log(
    `%cShaadi me zaroor aana!\n\n%cWebsite crafted by Vikas Patel`,
    'color: yellow; background:tomato; font-size: 24pt; font-weight: bold',
    'color: #674ea7; font-size: 14pt; font-weight: bold'
)

// Wedding Meme Generator
let uploadedPhotos = [];
let currentTemplate = '';

document.getElementById('uploadArea').addEventListener('click', () => {
    document.getElementById('photoUpload').click();
});

document.getElementById('photoUpload').addEventListener('change', (e) => {
    const files = Array.from(e.target.files);
    uploadedPhotos = files;
    
    if (files.length > 0) {
        alert(`Uploaded ${files.length} photo(s)! Now choose a meme template! 📸`);
        createMemeAnimation();
    }
});

function generateMeme(template) {
    if (uploadedPhotos.length === 0) {
        alert('Please upload photos first! 📸');
        return;
    }
    
    currentTemplate = template;
    const memeResult = document.getElementById('memeResult');
    const generatedMeme = document.getElementById('generatedMeme');
    
    // Create meme based on template
    let memeContent = '';
    switch(template) {
        case 'drake':
            memeContent = `
                <div style="display: flex; align-items: center; gap: 20px;">
                    <div style="text-align: center;">
                        <div style="font-size: 24px;">👎</div>
                        <p>Single Life</p>
                    </div>
                    <div style="text-align: center;">
                        <div style="font-size: 24px;">👍</div>
                        <p>Married Life</p>
                    </div>
                </div>
            `;
            break;
        case 'distracted':
            memeContent = `
                <div style="text-align: center;">
                    <p>Vikas looking at Riya</p>
                    <div style="font-size: 32px;">😍</div>
                    <p>While thinking about...</p>
                    <div style="font-size: 24px;">🍕</div>
                </div>
            `;
            break;
        case 'woman':
            memeContent = `
                <div style="text-align: center;">
                    <div style="font-size: 32px;">😤</div>
                    <p>Riya when Vikas forgets something</p>
                    <div style="font-size: 24px;">😊</div>
                    <p>Vikas trying to fix it</p>
                </div>
            `;
            break;
        case 'change':
            memeContent = `
                <div style="text-align: center; background: #f0f0f0; padding: 20px; border-radius: 10px;">
                    <div style="font-size: 24px;">🔄</div>
                    <p><strong>Change My Mind:</strong></p>
                    <p>Vikas & Riya are the perfect couple</p>
                </div>
            `;
            break;
    }
    
    generatedMeme.innerHTML = memeContent;
    memeResult.style.display = 'block';
    
    // Scroll to result
    memeResult.scrollIntoView({ behavior: 'smooth' });
    
    // Celebration animation
    createMemeAnimation();
}

function createMemeAnimation() {
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const emoji = document.createElement('div');
            emoji.innerHTML = '😂';
            emoji.style.position = 'fixed';
            emoji.style.left = Math.random() * window.innerWidth + 'px';
            emoji.style.top = Math.random() * window.innerHeight + 'px';
            emoji.style.fontSize = '20px';
            emoji.style.zIndex = '9999';
            emoji.style.pointerEvents = 'none';
            emoji.style.animation = 'sparkle 2s ease-in-out';
            
            document.body.appendChild(emoji);
            
            setTimeout(() => {
                emoji.remove();
            }, 2000);
        }, i * 100);
    }
}

function downloadMeme() {
    alert('Meme downloaded! Share it with everyone! 📱');
}

function shareMeme() {
    if (navigator.share) {
        navigator.share({
            title: 'Wedding Meme',
            text: 'Check out this hilarious wedding meme!',
            url: window.location.href
        });
    } else {
        alert('Share this meme on social media! #VikasRiyaWedding');
    }
}

function createNewMeme() {
    document.getElementById('memeResult').style.display = 'none';
    uploadedPhotos = [];
    document.getElementById('photoUpload').value = '';
}

// Virtual Photo Booth
let cameraStream = null;
let currentFilter = '';

function startCamera() {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            cameraStream = stream;
            document.getElementById('camera').srcObject = stream;
            alert('Camera started! Choose a filter and take photos! 📸');
        })
        .catch(err => {
            alert('Camera access denied. Please allow camera access to use the photo booth! 📷');
        });
}

function applyFilter(filter) {
    currentFilter = filter;
    const overlay = document.getElementById('filterOverlay');
    
    switch(filter) {
        case 'bride':
            overlay.innerHTML = '👰';
            break;
        case 'groom':
            overlay.innerHTML = '🤵';
            break;
        case 'couple':
            overlay.innerHTML = '💑';
            break;
        case 'funny':
            overlay.innerHTML = '😄';
            break;
    }
    
    // Filter animation
    overlay.style.animation = 'sparkle 0.5s ease-in-out';
    setTimeout(() => {
        overlay.style.animation = '';
    }, 500);
}

function capturePhoto() {
    if (!cameraStream) {
        alert('Please start the camera first! 🎥');
        return;
    }
    
    const video = document.getElementById('camera');
    const canvas = document.getElementById('photoCanvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    // Draw video frame
    ctx.drawImage(video, 0, 0);
    
    // Add filter overlay
    if (currentFilter) {
        ctx.font = '48px Arial';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.textAlign = 'center';
        
        let filterEmoji = '';
        switch(currentFilter) {
            case 'bride': filterEmoji = '👰'; break;
            case 'groom': filterEmoji = '🤵'; break;
            case 'couple': filterEmoji = '💑'; break;
            case 'funny': filterEmoji = '😄'; break;
        }
        
        ctx.fillText(filterEmoji, canvas.width / 2, canvas.height / 2);
    }
    
    // Add to gallery
    const dataURL = canvas.toDataURL('image/png');
    addToGallery(dataURL);
    
    // Show canvas briefly
    canvas.style.display = 'block';
    setTimeout(() => {
        canvas.style.display = 'none';
    }, 1000);
    
    // Celebration
    createPhotoAnimation();
}

function addToGallery(dataURL) {
    const galleryGrid = document.getElementById('galleryGrid');
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    
    const img = document.createElement('img');
    img.src = dataURL;
    img.alt = 'Photo Booth Photo';
    
    galleryItem.appendChild(img);
    galleryGrid.appendChild(galleryItem);
    
    // Save to localStorage
    const photos = JSON.parse(localStorage.getItem('photoBoothPhotos') || '[]');
    photos.push(dataURL);
    localStorage.setItem('photoBoothPhotos', JSON.stringify(photos));
}

function createPhotoAnimation() {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const flash = document.createElement('div');
            flash.innerHTML = '📸';
            flash.style.position = 'fixed';
            flash.style.left = Math.random() * window.innerWidth + 'px';
            flash.style.top = Math.random() * window.innerHeight + 'px';
            flash.style.fontSize = '20px';
            flash.style.zIndex = '9999';
            flash.style.pointerEvents = 'none';
            flash.style.animation = 'sparkle 1s ease-in-out';
            
            document.body.appendChild(flash);
            
            setTimeout(() => {
                flash.remove();
            }, 1000);
        }, i * 100);
    }
}

// Wedding Prediction Game
const predictions = {
    ceremony: [
        "Vikas will cry during vows",
        "Riya will forget her vows",
        "Someone will trip walking down the aisle",
        "The ring will be dropped",
        "Vikas will be 10 minutes late",
        "Riya will be 30 minutes late"
    ],
    reception: [
        "DJ will play the wrong song",
        "Someone will get too drunk",
        "Food will run out early",
        "Cake will be dropped",
        "Best man speech will be awkward",
        "Everyone will dance to Despacito"
    ],
    couple: [
        "Vikas will forget Riya's name",
        "Riya will correct Vikas 5 times",
        "They'll argue about the honeymoon",
        "Vikas will eat all the cake",
        "Riya will organize everything",
        "They'll be the last to leave"
    ],
    guests: [
        "Aunt will ask about kids",
        "Someone will wear white",
        "Guest will get lost",
        "Someone will propose",
        "Kids will run around",
        "Everyone will take selfies"
    ]
};

let selectedPredictions = [];

function showPredictions(category) {
    const predictionList = document.getElementById('predictionList');
    const predictionTitle = document.getElementById('predictionTitle');
    
    predictionTitle.textContent = `${category.charAt(0).toUpperCase() + category.slice(1)} Predictions:`;
    
    predictionList.innerHTML = '';
    predictions[category].forEach((prediction, index) => {
        const item = document.createElement('div');
        item.className = 'prediction-item';
        item.textContent = prediction;
        item.onclick = () => selectPrediction(item, prediction);
        predictionList.appendChild(item);
    });
}

function selectPrediction(item, prediction) {
    if (item.classList.contains('selected')) {
        item.classList.remove('selected');
        selectedPredictions = selectedPredictions.filter(p => p !== prediction);
    } else {
        item.classList.add('selected');
        selectedPredictions.push(prediction);
    }
    
    // Show results section
    document.getElementById('predictionResults').style.display = 'block';
    updateResultsList();
}

function updateResultsList() {
    const resultsList = document.getElementById('resultsList');
    resultsList.innerHTML = '';
    
    selectedPredictions.forEach(prediction => {
        const item = document.createElement('div');
        item.className = 'prediction-item selected';
        item.textContent = prediction;
        resultsList.appendChild(item);
    });
}

function submitPredictions() {
    if (selectedPredictions.length === 0) {
        alert('Please select at least one prediction! 🔮');
        return;
    }
    
    // Save predictions
    const allPredictions = JSON.parse(localStorage.getItem('weddingPredictions') || '[]');
    allPredictions.push({
        predictions: selectedPredictions,
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('weddingPredictions', JSON.stringify(allPredictions));
    
    alert(`Thanks for your ${selectedPredictions.length} predictions! We'll see how accurate you are! 🎯`);
    
    // Reset
    selectedPredictions = [];
    document.getElementById('predictionResults').style.display = 'none';
    document.querySelectorAll('.prediction-item').forEach(item => {
        item.classList.remove('selected');
    });
    
    // Celebration
    createPredictionAnimation();
}

function createPredictionAnimation() {
    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            const crystal = document.createElement('div');
            crystal.innerHTML = '🔮';
            crystal.style.position = 'fixed';
            crystal.style.left = Math.random() * window.innerWidth + 'px';
            crystal.style.top = Math.random() * window.innerHeight + 'px';
            crystal.style.fontSize = '20px';
            crystal.style.zIndex = '9999';
            crystal.style.pointerEvents = 'none';
            crystal.style.animation = 'sparkle 2s ease-in-out';
            
            document.body.appendChild(crystal);
            
            setTimeout(() => {
                crystal.remove();
            }, 2000);
        }, i * 150);
    }
}

// Couple Roast Section
let roastSubmissions = [];

function showRoast(category) {
    const roastList = document.getElementById('roastList');
    roastList.innerHTML = '';
    
    const categoryRoasts = roastSubmissions.filter(roast => roast.category === category);
    
    if (categoryRoasts.length === 0) {
        roastList.innerHTML = '<p>No roasts yet! Be the first to submit one! 😄</p>';
        return;
    }
    
    categoryRoasts.forEach(roast => {
        const item = document.createElement('div');
        item.className = 'roast-item';
        item.innerHTML = `
            <h4>${roast.title}</h4>
            <p>${roast.content}</p>
        `;
        roastList.appendChild(item);
    });
}

function submitRoast() {
    const title = document.getElementById('roastTitle').value;
    const content = document.getElementById('roastContent').value;
    const category = document.getElementById('roastCategory').value;
    
    if (!title || !content) {
        alert('Please fill in both title and content! 😄');
        return;
    }
    
    const roast = {
        title: title,
        content: content,
        category: category,
        timestamp: new Date().toISOString()
    };
    
    roastSubmissions.push(roast);
    
    // Save to localStorage
    localStorage.setItem('roastSubmissions', JSON.stringify(roastSubmissions));
    
    // Clear form
    document.getElementById('roastTitle').value = '';
    document.getElementById('roastContent').value = '';
    
    alert('Roast submitted! Thanks for the laughs! 😂');
    
    // Show the roast
    showRoast(category);
    
    // Celebration
    createRoastAnimation();
}

function createRoastAnimation() {
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const fire = document.createElement('div');
            fire.innerHTML = '🔥';
            fire.style.position = 'fixed';
            fire.style.left = Math.random() * window.innerWidth + 'px';
            fire.style.top = Math.random() * window.innerHeight + 'px';
            fire.style.fontSize = '20px';
            fire.style.zIndex = '9999';
            fire.style.pointerEvents = 'none';
            fire.style.animation = 'sparkle 1.5s ease-in-out';
            
            document.body.appendChild(fire);
            
            setTimeout(() => {
                fire.remove();
            }, 1500);
        }, i * 200);
    }
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Load saved data
    const savedPhotos = JSON.parse(localStorage.getItem('photoBoothPhotos') || '[]');
    savedPhotos.forEach(photo => {
        addToGallery(photo);
    });
    
    roastSubmissions = JSON.parse(localStorage.getItem('roastSubmissions') || '[]');
    
    // Show initial roast category
    showRoast('vikas');
});
