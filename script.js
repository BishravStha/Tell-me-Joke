const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "How do you organize a space party? You planet.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "What do you get if you cross a snowman and a vampire? Frostbite.",
    "Why did the math book look sad? Because it had too many problems.",
    "Why was the broom late? It swept in.",
    "What do you call fake spaghetti? An impasta!",
    "Why don't programmers like nature? It has too many bugs.",
    "How does a penguin build its house? Igloos it together.",
    "Why was the computer cold? It left its Windows open.",
    "Why did the coffee file a police report? It got mugged.",
    "How does a skeleton call his friends? On the tele-bone.",
    "What did the grape do when it got stepped on? Nothing but let out a little wine!",
    "Why don't some couples go to the gym? Because some relationships don't work out.",
    "Why was the stadium so cool? It was filled with fans.",
    "Why can't you give Elsa a balloon? Because she will let it go.",
    "Why don't oysters donate to charity? Because they are shellfish.",
    "What do you call cheese that isn't yours? Nacho cheese.",
    "How do you make holy water? You boil the hell out of it.",
    "Why don't elephants use computers? Because they are afraid of the mouse.",
    "Why did the bicycle fall over? Because it was two-tired.",
    "What do you call a factory that makes good products? A satisfactory.",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you get when you cross a snowman and a dog? Frostbite.",
    "Why are frogs so happy? Because they eat whatever bugs them.",
    "Why don't seagulls fly over the bay? Because then they'd be bay-gulls.",
    "Why did the chicken join a band? Because it had the drumsticks.",
    "Why do cows have hooves instead of feet? Because they lactose.",
    "What do you call an alligator in a vest? An investigator.",
    "Why did the tomato turn red? Because it saw the salad dressing.",
    "Why did the scarecrow become a successful neurosurgeon? He was outstanding in his field.",
    "Why did the banana go to the doctor? Because it wasn't peeling well.",
    "What do you call a bear with no teeth? A gummy bear.",
    "Why don't some fish play piano? Because you can't tuna fish.",
    "Why did the cookie go to the doctor? Because it felt crummy.",
    "Why don't you ever see elephants hiding in trees? Because they're so good at it.",
    "What do you call a sleeping bull? A bulldozer.",
    "Why do fish live in salt water? Because pepper makes them sneeze.",
    "Why did the man put his money in the blender? He wanted to make some liquid assets.",
    "Why did the stadium get hot after the game? All of the fans left.",
    "What do you call a snowman with a six-pack? An abdominal snowman.",
    "Why don't some cats play poker in the jungle? Too many cheetahs.",
    "Why did the girl smear peanut butter on the road? To go with the traffic jam.",
    "Why don't some dogs make good dancers? Because they have two left feet.",
    "Why did the fish blush? Because it saw the ocean's bottom.",
    "Why did the golfer wear two pairs of pants? In case he got a hole in one.",
    "What do you get when you cross an elephant with a rhinoceros? Elephino (pronounced ",
    "Why did the music teacher go to jail? Because she got caught with the treble.",
    "Why was the math book unhappy? It had too many problems.",
    "Why don't some birds use social media? They already tweet."
];






document.getElementById('tab').addEventListener('click', function() {
    const joke = Math.floor(Math.random() * jokes.length);
    const select = jokes[joke];
    document.getElementById('joke').innerHTML = select;
});

