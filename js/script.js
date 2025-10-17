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
