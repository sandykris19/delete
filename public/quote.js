console.log("Client side js running");
let quotes = [
  {
    text: "The only people who never fail are those who never try.",
    from: "Ilka Chase",
  },
  {
    text: "Failure is just another way to learn how to do something right.",
    from: "Marian Wright Edelman",
  },
  {
    text: "I failed my way to success.",
    from: "Thomas Edison",
  },
  {
    text: "Every failure brings with it the seed of an equivalent success.",
    from: "Napoleon Hill",
  },
  {
    text: "Only those who dare to fail greatly can ever achieve greatly.",
    from: "John F. Kennedy",
  },
  {
    text: "It is hard to fail, but it is worse never to have tried to succeed.",
    from: "Theodore Roosevelt",
  },
  {
    text: "Imagination is more important than knowledge.",
    from: "Albert Einstein",
  },
  {
    text:
      "Hold fast to dreams, for if dreams die, life is a broken winged bird that cannot fly.",
    from: "Langston Hughes",
  },
  {
    text:
      "The future belongs to those who believe in the beauty of their dreams.",
    from: "Eleanor Roosevelt",
  },
  {
    text:
      "Go confidently in the direction of your dreams. Live the life you have imagined.",
    from: "Henry David Thoreau",
  },
  {
    text:
      "You cannot depend on your eyes when your imagination is out of focus.",
    from: "Mark Twain",
  },
  {
    text: "Commitment leads to action. Action brings your dream closer.",
    from: "Marcia Wieder",
  },
  {
    text: "I never think of the future",
    from: 'it comes soon enough."',
  },
  {
    text:
      "Don't waste your life in doubts and fears: Spend yourself on the work before you, well assured that the right performance of this hour's duties will be the best preparation for the hours or ages that follow it.",
    from: "Ralph Waldo Emerson",
  },
  {
    text:
      "Do not anticipate trouble or worry about what may never happen. Keep in the sunlight.",
    from: "Benjamin Franklin",
  },
  {
    text:
      "Take time to deliberate; but when the time for action arrives, stop thinking and go in.",
    from: "Andrew Jackson",
  },
  {
    text: "The mind that is anxious about future events is miserable.",
    from: "Seneca",
  },
  {
    text:
      "Live in each season as it passes; breathe the air, drink the drink, taste the fruit, and resign yourself to the influences of each.",
    from: "Henry David Thoreau",
  },
  {
    text:
      "The art of leadership is saying no, not yes. It is very easy to say yes.",
    from: "Tony Blair",
  },
  {
    text: "A leader is a dealer in hope.",
    from: "Napoleon Bonaparte",
  },
  {
    text: "While a good leader sustains momentum, a great leader increases it.",
    from: "John C. Maxwell",
  },
  {
    text:
      "A general is just as good or just as bad as the troops under his command make him.",
    from: "General Douglas MacArthur",
  },
  {
    text:
      "To do great things is difficult; but to command great things is more difficult.",
    from: "Friedrich Nietzsche",
  },
  {
    text: "Leadership does not always wear the harness of compromise.",
    from: "Woodrow Wilson",
  },
  {
    text: "Business opportunities are like buses",
    from: "there's always another one coming.\"",
  },
  {
    text:
      "I avoid looking forward or backward, and try to keep looking upward.",
    from: "Charlotte Bronte",
  },
  {
    text:
      "The more difficulties one has to encounter, within and without, the more significant and the higher in inspiration his life will be.",
    from: "Horace Bushnell",
  },
  {
    text: "Every artist was first an amateur.",
    from: "Ralph Waldo Emerson",
  },
  {
    text:
      "I was always looking outside myself for strength and confidence, but it comes from within. It is there all of the time.",
    from: "Anna Freud",
  },
  {
    text: "We can do anything we want to do if we stick to it long enough.",
    from: "Helen Keller",
  },
  {
    text:
      "Our business in life is not to get ahead of others, but to get ahead of ourselves.",
    from: "E. Joseph Cossman",
  },
  {
    text: "Insist on yourself. Never imitate.",
    from: "Ralph Waldo Emerson",
  },
  {
    text: "Who looks outside, dreams. Who looks inside, awakes.",
    from: "Carl Jung",
  },
  {
    text:
      "It is not easy to find happiness in ourselves, and it is not possible to find it elsewhere.",
    from: "Agnes Repplier",
  },
  {
    text: "The only journey is the one within.",
    from: "Rainer Maria Rilke",
  },
  {
    text: "Follow your honest convictions, and stay strong.",
    from: "William Thackeray",
  },
  {
    text:
      "The happiness of your life depends upon the quality of your thoughts; therefore guard accordingly.",
    from: "Marcus Aurelius",
  },
  {
    text:
      "Action may not always bring happiness; but there is no happiness without action.",
    from: "Benjamin Disraeli",
  },
  {
    text:
      "Happiness depends more on the inward disposition of mind than on outward circumstances.",
    from: "Benjamin Franklin",
  },
  {
    text:
      "There is no happiness except in the realization that we have accomplished something.",
    from: "Henry Ford",
  },
  {
    text: "Happiness is not a goal, but a by-product.",
    from: "Eleanor Roosevelt",
  },
  {
    text: "Happiness is not a state to arrive at, but a manner of traveling.",
    from: "Margaret Lee Runbeck",
  },
  {
    text: "Purpose is what gives life a meaning.",
    from: "C. H. Parkhurst",
  },
  {
    text:
      "The significance of a man is not in what he attains but in what he longs to attain.",
    from: "Kahlil Gibran",
  },
  {
    text: "In all things that you do, consider the end.",
    from: "Solon",
  },
  {
    text:
      "Life can be pulled by goals just as surely as it can be pushed by drives.",
    from: "Viktor Frankl",
  },
  {
    text: "The virtue lies in the struggle, not in the prize.",
    from: "Richard Monckton Milnes",
  },
  {
    text: "To reach a port, we must sail",
    from: "sail, not tie at anchor",
  },
  {
    text: "Success is the child of audacity.",
    from: "Benjamin Disraeli",
  },
  {
    text:
      "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.",
    from: "Vince Lombardi",
  },
  {
    text: "The secret of success is to know something nobody else knows.",
    from: "Aristotle Onassis",
  },
  {
    text: "The surest way not to fail is to determine to succeed.",
    from: "Richard Brinsley Sheridan",
  },
  {
    text:
      "I cannot give you the formula for success, but I can give you the formula for failure",
    from: 'which is: Try to please everybody."',
  },
  {
    text:
      "Careful thinking and hard work will solve nearly all your problems. Try and see for yourself.",
    from: "Ullery",
  },
  {
    text: "Years teach us more than books.",
    from: "Berthold Auerbach",
  },
  {
    text:
      "The only medicine for suffering, crime, and all the other woes of mankind, is wisdom.",
    from: "Thomas Huxley",
  },
  {
    text: "The art of being wise is knowing what to overlook.",
    from: "William James",
  },
  {
    text:
      "The great lesson is that the sacred is in the ordinary, that it is to be found in one's daily life, in one's neighbors, friends and family, in one's backyard.",
    from: "Abraham Maslow",
  },
  {
    text: "A wise man learns by the mistakes of others, a fool by his own.",
    from: "Latin proverb",
  },
  {
    text: "No man was ever wise by chance.",
    from: "Seneca",
  },
  {
    text:
      "In everything the ends well defined are the secret of durable success.",
    from: "Victor Cousins",
  },
  {
    text: "Arriving at one goal is the starting point to another.",
    from: "John Dewey",
  },
  {
    text: "A goal is a dream with a deadline.",
    from: "Napoleon Hill",
  },
  {
    text:
      "Most 'impossible' goals can be met simply by breaking them down into bite-size chunks, writing them down, believing them, and then going full speed ahead as if they were routine.",
    from: "Don Lancaster",
  },
  {
    text: "Goals are the fuel in the furnace of achievement.",
    from: "Brian Tracy",
  },
  {
    text:
      "We are what we repeatedly do. Excellence, therefore, is not an act but a habit.",
    from: "Aristotle",
  },
  {
    text:
      "Take risks and you'll get the payoffs. Learn from your mistakes until you succeed. It's that simple.",
    from: "Bobby Flay",
  },
  {
    text: "The best way out is always through.",
    from: "Robert Frost",
  },
  {
    text: "You miss 100 percent of the shots you don't take.",
    from: "Wayne Gretzky",
  },
  {
    text:
      "Nothing will ever be attempted if all possible objections must first be overcome.",
    from: "Samuel Johnson",
  },
  {
    text: "Don't bunt. Aim out of the ballpark.",
    from: "David Ogilvy",
  },
  {
    text:
      "“The critical ingredient is getting off your butt and doing something. It’s as simple as that. A lot of people have ideas, but there are few who decide to do something about them now. Not tomorrow. Not next week. But today. The true entrepreneur is a doer, not a dreamer.”",
    from: "Nolan Bushnell, entrepreneur.",
  },
  {
    text: "“Never give in",
    from:
      "never, never, never, never, in nothing great or small, large or petty, never give in except to convictions of honour and good sense. Never yield to force; never yield to the apparently overwhelming might of the enemy.” - Winston Churchill, British Prime Minister.",
  },
  {
    text: "Your most unhappy customers are your greatest source of learning.",
    from: "Bill Gates, co-founder of Microsoft.",
  },
  {
    text: "I have not failed. I’ve just found 10,000 ways that won’t work.",
    from: "Thomas Edison, inventor.",
  },
  {
    text: "Entrepreneurship is neither a science nor an art. It is a practice.",
    from: "Peter Drucker, management consultant, educator, and author.",
  },
  {
    text:
      "In the modern world of business, it is useless to be a creative, original thinker unless you can also sell what you create.",
    from: "David Ogilvy, co-founder of Ogilvy & Mather.",
  },
  {
    text: "Success is how high you bounce after you hit bottom.",
    from: "General George Patton.",
  },
  {
    text:
      "“If you’re not embarrassed by the first version of your product, you’ve launched too late.”",
    from: "Reid Hoffman, co-founder of LinkedIn.",
  },
  {
    text:
      "Positive thinking will let you do everything better than negative thinking will.",
    from: "Zig Ziglar, author, salesman, and motivational speaker.",
  },
  {
    text: "“I’m not afraid of dying, I’m afraid of not trying.”",
    from: "Jay Z, musician.",
  },
  {
    text: "Whatever the mind can conceive and believe, the mind can achieve.",
    from: "Dr. Napoleon Hill, author of Think and Grow Rich.",
  },
  {
    text: "The longer you’re not taking action the more money you’re losing",
    from: "Carrie Wilkerson",
  },
  {
    text: "If you live for weekends or vacations, your shit is broken",
    from: "Gary Vaynerchuk",
  },
  {
    text: "Go Big, or Go Home",
    from: "Eliza Dushku",
  },
  {
    text:
      "Most great people have attained their greatest success just one step beyond their greatest failure",
    from: "Napoleon Hill",
  },
  {
    text:
      "Opportunity is missed by most people because it is dressed in overalls and looks like work",
    from: "Thomas Edison",
  },
  {
    text:
      "Have the end in mind and every day make sure your working towards it",
    from: "Ryan Allis",
  },
  {
    text: "He who begins many things finishes but few",
    from: "German Proverb",
  },
  {
    text: "The best use of life is to spend it for something that outlasts it",
    from: "William James",
  },
  {
    text: "If you think education is expensive, try ignorance",
    from: "Derek Bok",
  },
  {
    text:
      "Entrepreneurship is living a few years of your life like most people wont so you can spend the rest of your life like most people can’t",
    from: "A student in Warren G. Tracy’s class",
  },
  {
    text:
      "Lend your friend $20, if he doesn’t pay you back then he’s not your friend. Money well spent",
    from: "Ted Nicolas",
  },
  {
    text: "Be nice to geek’s, you’ll probably end up working for one",
    from: "Bill Gates",
  },
  {
    text:
      "To never forget that the most important thing in life is the quality of life we lead",
    from: "Quoted by Tony Hsieh on Retireat21",
  },
  {
    text: "Its better to own the racecourse then the race horse",
    from: "Unknown",
  },
  {
    text: "When you go to buy, don’t show your silver",
    from: "Chinese Proverb",
  },
  {
    text: "It’s easier to ask forgiveness than it is to get permission",
    from: "Grace Hopper",
  },
  {
    text: "To win without risk is to triumph without glory",
    from: "Corneille",
  },
  {
    text:
      "Example is not the main thing in influencing other people; it’s the only thing",
    from: "Abraham Lincoln",
  },
  {
    text:
      "Associate yourself with people of good quality, for it is better to be alone than in bad company",
    from: "Booker T. Washington",
  },
  {
    text:
      "Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great",
    from: "Mark Twain",
  },
  {
    text: "There is only one success",
    from: "to be able to spend your life in your own way",
  },
  {
    text:
      "You don’t buy a nice car and get rich you get rich and buy a nice car",
    from: "Unknown",
  },
  {
    text: "Fall seven times, stand up eight",
    from: "Japanese Proverb",
  },
  {
    text:
      "One day your life will flash before your eyes. Make sure it is worth watching",
    from: "Mooie",
  },
  {
    text: "Whatever the mind can conceive and believe, the mind can achieve",
    from: "Dr. Napoleon Hill",
  },
  {
    text: "I have not failed. I’ve just found 10,000 ways that won’t work",
    from: "Thomas Alva Edison",
  },
  {
    text: "If you ain’t making waves, you ain’t kickin’ hard enough",
    from: "Unknown",
  },
  {
    text: "What is not started will never get finished",
    from: "Johann Wolfgang von Goethe",
  },
  {
    text:
      "Do not wait to strike until the iron is hot; but make it hot by striking",
    from: "William B. Sprague",
  },
  {
    text: "When you cease to dream you cease to live",
    from: "Malcolm Forbes",
  },
  {
    text:
      "“There are two rules for success. 1) Never tell everything you know.",
    from: "Roger H. Lincoln",
  },
  {
    text:
      "“The only place where success comes before work is in the dictionary.",
    from: "Vidal Sassoon",
  },
  {
    text:
      "“Every single person I know who is successful at what they do is successful because they love doing it.",
    from: "Joe Penna",
  },
  {
    text: "“Being realistic is the most commonly traveled road to mediocrity.",
    from: "Will Smith",
  },
  {
    text:
      "“Whenever an individual or a business decides that success has been attained, progress stops.",
    from: "Thomas J. Watson",
  },
  {
    text:
      "“To be successful, you have to have your heart in your business, and your business in your heart.",
    from: "Thomas J. Watson",
  },
  {
    text:
      "“If hard work is the key to success, most people would rather pick the lock.",
    from: "Claude McDonald",
  },
  {
    text: "“Success is simply a matter of luck. Ask any failure.",
    from: "Earl Wilson",
  },
  {
    text: "“The road to success is always under construction.",
    from: "Arnold Palmer",
  },
  {
    text: "“Anything the mind can conceive and believe, it can achieve.",
    from: "Napoleon Hill",
  },
  {
    text:
      "“Most great people have attained their greatest success just one step beyond their greatest failure.",
    from: "Napoleon Hill",
  },
  {
    text: "“Whether you think you can or you can’t, you’re right.",
    from: "Henry Ford",
  },
  {
    text: "“Failure defeats losers, failure inspires winners.",
    from: "Robert T. Kiyosaki",
  },
  {
    text: "“I have not failed. I’ve just found 10,000 ways that won’t work.",
    from: "Thomas Edison",
  },
  {
    text: "“The biggest failure you can have in life is not trying at all.",
    from: "Emil Motycka",
  },
  {
    text:
      "“I honestly think it is better to be a failure at something you love than to be a success at something you hate.",
    from: "George Burns",
  },
  {
    text:
      "“Leaders don’t force people to follow, they invite them on a journey.",
    from: "Charles S. Lauer",
  },
  {
    text:
      "“Example is not the main thing in influencing other people; it’s the only thing.",
    from: "Abraham Lincoln",
  },
  {
    text: "“Leadership is doing what is right when no one is watching.",
    from: "George Van Valkenburg",
  },
  {
    text:
      "“Leadership is the art of getting someone else to do something you want done because he wants to do it.",
    from: "Dwight D. Eisenhower",
  },
  {
    text:
      "“The difference between a boss and a leader: a boss says, ‘Go!’ -a leader says, ‘Let’s go!’.",
    from: "E. M. Kelly",
  },
  {
    text:
      "“I am more afraid of an army of one hundred sheep led by a lion than an army of one hundred lions led by a sheep.",
    from: "Charles Maurice",
  },
  {
    text:
      "“The whole problem with the world is that fools and fanatics are always so certain of themselves, but wiser people so full of doubts.",
    from: "Bertrand Russell",
  },
  {
    text:
      "“We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    from: "Aristotle",
  },
  {
    text: "“Cannibals prefer those who have no spines.",
    from: "Stanislaw Lem",
  },
  {
    text: "“A ship in harbor is safe. But that’s now what ships are built for.",
    from: "William Shedd",
  },
  {
    text:
      "“If one does not know to which port one is sailing, no wind is favorable.",
    from: "Lucius Annaeus Seneca",
  },
  {
    text: "“You miss 100% of the shots you don’t take.",
    from: "Wayne Gretzky",
  },
  {
    text: "“I’m not a businessman. I’m a business, man.",
    from: "Jay-Z",
  },
  {
    text:
      "“The vision must be followed by the venture. It is not enough to stare up the steps – we must step up the stairs.",
    from: "Vance Hayner",
  },
  {
    text:
      "“Do not wait to strike until the iron is hot; but make it hot by striking.",
    from: "William B. Sprague",
  },
  {
    text: "“It’s easier to ask forgiveness than it is to get permission.",
    from: "Grace Hopper",
  },
  {
    text:
      "“Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
    from: "Mark Twain",
  },
  {
    text:
      "“One day your life will flash before your eyes. Make sure it is worth watching.",
    from: "Mooie",
  },
  {
    text: "“I think it’s wrong that only one company makes the game Monopoly.",
    from: "Steven Wright",
  },
  {
    text:
      "“Ever notice how it’s a penny for your thoughts, yet you put in your two-cents? Someone is making a penny on the deal.",
    from: "Steven Wright",
  },
  {
    text:
      "“Catch a man a fish, and you can sell it to him. Teach a man to fish, and you ruin a wonderful business opportunity.",
    from: "Karl (maybe Groucho) Marx",
  },
  {
    text:
      "“I used to sell furniture for a living. The trouble was, it was my own.",
    from: "Les Dawson",
  },
  {
    text:
      "“Marking dynamos for repair $10,000.00—2 hours labor $10.00; knowing where to mark $9,990.00.",
    from: "Invoice from Charles Steinmetz",
  },
  {
    text:
      "“By working faithfully eight hours a day you may eventually get to be boss and work twelve hours a day.",
    from: "Robert Frost",
  },
  {
    text:
      "“My son is now an ‘entrepreneur’. That’s what you’re called when you don’t have a job.",
    from: "Ted Turner",
  },
  {
    text:
      "“I didn’t go to college, but if I did, I would’ve taken all my tests at a restaurant, ’cause ‘The customer is always right.’",
    from: "Mitch Hedberg",
  },
  {
    text:
      "“Formal education will make you a living. Self education will make you a fortune.",
    from: "Jim Rohn",
  },
  {
    text:
      "“The greatest reward in becoming a millionaire is not the amount of money that you earn. It is the kind of person that you have to become to become a millionaire in the first place.",
    from: "Jim Rohn",
  },
  {
    text:
      "“If you’re not learning while you’re earning, you’re cheating yourself out of the better portion of your compensation.",
    from: "Napoleon Hill",
  },
  {
    text: "“A business that makes nothing but money is a poor business.",
    from: "Henry Ford",
  },
  {
    text:
      "“After a certain point, money is meaningless. It ceases to be the goal. The game is what counts.",
    from: "Aristotle",
  },
  {
    text:
      "“I treat business a bit like a computer game. I count money as points. I’m doing really well: making lots of money and lots of points.",
    from: "Michael Dunlop",
  },
  {
    text:
      "“All of my friends were doing babysitting jobs. I wanted money without the job.",
    from: "Adam Horwitz",
  },
  {
    text:
      "“I don’t pay good wages because I have a lot of money; I have a lot of money because I pay good wages.",
    from: "Robert Bosch",
  },
  {
    text:
      "“Lend your friend $20. If he doesn’t pay you back then he’s not your friend. Money well spent.",
    from: "Ted Nicolas",
  },
  {
    text:
      "“Money and success don’t change people; they merely amplify what is already there.",
    from: "Will Smith",
  },
  {
    text: "“The secret of getting ahead is getting started.",
    from: "Agatha Christie",
  },
  {
    text: "“Hire character. Train skill.",
    from: "Peter Schultz",
  },
  {
    text:
      "“In preparing for battle I have always found that plans are useless, but planning is indispensable.",
    from: "Dwight D. Eisenhower",
  },
  {
    text:
      "“You’ve got to stop doing all the things that people have tried, tested, and found out don’t work.",
    from: "Michael Dunlop",
  },
  {
    text:
      "“I never perfected an invention that I did not think about in terms of the service it might give others… I find out what the world needs, then I proceed to invent.",
    from: "Thomas Edison",
  },
  {
    text: "“If you’re not making mistakes, then you’re not making decisions.",
    from: "Catherine Cook",
  },
  {
    text: "“Your most unhappy customers are your greatest source of learning.",
    from: "Bill Gates",
  },
  {
    text:
      "“One can get anything if he is willing to help enough others get what they want.",
    from: "Zig Ziglar",
  },
  {
    text:
      "“An entrepreneur tends to bite off a little more than he can chew hoping he’ll quickly learn how to chew it.",
    from: "Roy Ash",
  },
  {
    text: "“The true entrepreneur is a doer, not a dreamer.",
    from: "Nolan Bushnell",
  },
  {
    text:
      "“Whenever you are asked if you can do a job, tell ’em, ‘Certainly, I can!’ Then get busy and find out how to do it.",
    from: "Theodore Roosevelt",
  },
  {
    text: "“Everything started as nothing.",
    from: "Ben Weissenstein",
  },
  {
    text:
      "“If you start with nothing and end up with nothing, there’s nothing lost.",
    from: "Michael Dunlop",
  },
  {
    text:
      "“Start today, not tomorrow. If anything, you should have started yesterday.",
    from: "Emil Motycka",
  },
  {
    text: "“Make it happen now, not tomorrow. Tomorrow is a loser’s excuse.",
    from: "Andrew Fashion",
  },
  {
    text:
      "“Every day I get up and look through the Forbes list of the richest people in America. If I’m not there, I go to work.",
    from: "Robert Orben",
  },
  {
    text:
      "“Entrepreneurship is living a few years of your life like most people won’t, so that you can spend the rest of your life like most people can’t.",
    from: "Anonymous",
  },
  {
    text: "“Yesterday’s home runs don’t win today’s games.",
    from: "Babe Ruth",
  },
  {
    text: "“You should always stay hungry. Stay hungry, so you can eat.",
    from: "Syed Balkhi",
  },
  {
    text:
      "“If you’re not living life on the edge, you’re taking up too much space.",
    from: "Anonymous",
  },
  {
    text:
      "“I wasn’t satisfied just to earn a good living. I was looking to make a statement.",
    from: "Donald Trump",
  },
  {
    text:
      "“Opportunity is missed by most people because it is dressed in overalls and looks like work.",
    from: "Thomas Edison",
  },
  {
    text: "“You must either modify your dreams or magnify your skills.",
    from: "Jim Rohn",
  },
  {
    text:
      "“Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great.",
    from: "Mark Twain",
  },
  {
    text:
      "“Not a single person whose name is worth remembering lived a life of ease.",
    from: "Ryan P. Allis",
  },
  {
    text:
      "“If you think that you are going to love something, give it a try. You’re going to kick yourself in the butt for the rest of your life if you don’t.",
    from: "Joe Penna",
  },
  {
    text:
      "“The best time to plant a tree is twenty years ago. The second best time is now.",
    from: "Chinese Proverb",
  },
  {
    text:
      "“If you want one year of prosperity, grow grain. If you want ten years of prosperity, grow trees. If you want one hundred years of prosperity, grow people.",
    from: "Chinese Proverb",
  },
  {
    text:
      "“Vision without action is a daydream. Action without vision is a nightmare.",
    from: "Japanese Proverb",
  },
  {
    text:
      "“Sow a thought, reap an action; sow an action, reap a habit; sow a habit, reap a character; sow a character, reap a destiny.",
    from: "Chinese Proverb",
  },
  {
    text: "“A bad workman blames his tools.",
    from: "Chinese Proverb",
  },
  {
    text: "“A fall into a ditch makes you wiser.",
    from: "Chinese Proverb",
  },
  {
    text: "“Defeat isn’t bitter if you don’t swallow it.",
    from: "Chinese Proverb",
  },
  {
    text:
      "“The diamond cannot be polished without friction, nor the man perfected without trials.",
    from: "Chinese Proverb",
  },
  {
    text:
      "“A jade stone is useless before it is processed; a man is good-for-nothing until he is educated.",
    from: "Chinese Proverb",
  },
  {
    text: "“A journey of a thousand miles begins with a single step.",
    from: "Chinese Proverb",
  },
  {
    text: "“The loftiest towers rise from the ground.",
    from: "Chinese Proverb",
  },
  {
    text:
      "“Building a castle is difficult. Defending and maintaining it is harder still.",
    from: "Asian Proverb",
  },
  {
    text:
      "“A person who says it cannot be done should not interrupt the man doing it.",
    from: "Chinese Proverb",
  },
  {
    text: "“All cats love fish but fear to wet their paws.",
    from: "Chinese Proverb",
  },
  {
    text:
      "“Don’t stand by the water and long for fish; go home and weave a net.",
    from: "Chinese Proverb",
  },
  {
    text:
      "“Everyone should carefully observe which way his heart draws him, and then choose that way with all his strength.",
    from: "Hasidic Proverb",
  },
  {
    text: "“Failing to plan is planning to fail.",
    from: "Chinese Proverb",
  },
  {
    text: "“If you pay peanuts, you get monkeys.",
    from: "Chinese Proverb",
  },
  {
    text: "“Make happy those who are near, and those who are far will come.",
    from: "Chinese Proverb",
  },
  {
    text: "“Teachers open the door. You enter by yourself.",
    from: "Chinese Proverb",
  },
  {
    text: "“Find a job you love and you’ll never work a day in your life.",
    from: "Confucius",
  },
  {
    text:
      "“The entrepreneur builds an enterprise; the technician builds a job.",
    from: "Michael Gerber",
  },
  {
    text: "“If you want to be inventive",
    from: "you have to be willing to fail.”",
  },
  {
    text:
      "“The challenge is not just to build a company that can endure; but to build one that is worthy of enduring.",
    from: "Jim Collins",
  },
  {
    text:
      "“Success is a lousy teacher. It seduces smart people into thinking they can’t lose.",
    from: "Bill Gates",
  },
  {
    text: "“Don’t treat your customers like a bunch of purses and wallets.",
    from: "Chris Brogan",
  },
  {
    text:
      "“Nine out of ten businesses fail; so I came up with a foolproof plan",
    from: "create ten businesses.”",
  },
  {
    text: "“I’m not a businessman",
    from: "I”m a business, man.”",
  },
  {
    text: "“If plan ‘A’ fails",
    from: "remember you have 25 letters left.”",
  },
  {
    text:
      "“We make a living by what we get. But we make a life by what we give.",
    from: "Winston Churchhill",
  },
  {
    text: "“Believe that you will succeed",
    from: "and you will.”",
  },
  {
    text: "“Victory comes only after many struggles and countless defeats.",
    from: "Og Mandino",
  },
  {
    text: "“As long as you’re going to be thinking anyway, think big.",
    from: "Donald Trump",
  },
  {
    text: "“Success is how high you bounce after you hit bottom",
    from: "General George Patton",
  },
  {
    text:
      "“Remembering you are going to die is the best way I know to avoid the trap of thinking you have something to lose.",
    from: "Steve Jobs",
  },
  {
    text: "“It’s not about how to get started; its about how to get noticed.",
    from: "Steve Case",
  },
  {
    text: "“A ship in harbor is safe, but that’s not what ships are for.",
    from: "John Shedd",
  },
  {
    text:
      "“If I find 10,000 ways something won’t work, I haven’t failed. I am not discouraged, because every wrong attempt discarded is often a step forward.",
    from: "Thomas Edison",
  },
  {
    text:
      "“Business opportunities are like buses, there’s always another one coming.",
    from: "Richard Branson",
  },
  {
    text:
      "“If we don’t allow ourselves to make mistakes, we will never invest in things that are radical.",
    from: "Jeff Clavier",
  },
  {
    text:
      "“The critical ingredient is getting off your butt and doing something.",
    from: "Nolan Bushnell",
  },
  {
    text: "“Nothing will work unless you do.",
    from: "Maya Angelou",
  },
  {
    text:
      "“Try not to be a man of success, but rather try to become a man of value.",
    from: "Albert Einstein",
  },
  {
    text: "“You won’t get anything unless you have the vision to imagine it.",
    from: "John Lennon",
  },
  {
    text:
      "“A man must be big enough to admit his mistakes, smart enough to profit from them, and strong enough to correct them.",
    from: "John C. Maxwell",
  },
  {
    text:
      "“In the modern world of business, it is useless to be a creative, original thinker unless you can also sell what you create.",
    from: "David Ogilvy",
  },
  {
    text:
      "“Success is doing what you want, where you want, when you want, with whom you want as much as you want.",
    from: "Tony Robbins",
  },
  {
    text: "“If you don’t have a competitive advantage",
    from: "don’t compete.”",
  },
  {
    text:
      "“You were born to win, but to be a winner, you must plan to win, prepare to win, and expect to win.",
    from: "Zig Ziglar",
  },
  {
    text:
      "“If everything seems under control, you’re just not going fast enough.",
    from: "Mario Andretti",
  },
  {
    text: "“Don’t be trapped by dogma",
    from: "which is living with the results of other people’s thinking.”",
  },
  {
    text: "“Do or do not. There is no try.",
    from: "Yoda",
  },
  {
    text:
      "“Show me a person who never made a mistake, and I will show you a person who never did anything.",
    from: "William Rosenberg, founder of Dunkin’ Donuts",
  },
  {
    text: "“Ideas are commodity. Execution of them is not.",
    from: "Michael Dell, CEO of Dell",
  },
  {
    text:
      "“User experience is everything. It always has been, but it’s undervalued and underinvested in. If you don’t know user-centered design, study it. Hire people who know it. Obsess over it. Live and breathe it. Get your whole company on board.",
    from: "Evan Williams, co-founder of Twitter",
  },
  {
    text:
      "“A pessimist sees the difficulty in every opportunity; an optimist sees the opportunity in every difficulty.",
    from: "Winston Churchill, British Prime Minister",
  },
  {
    text:
      "“The man who does not work for the love of work but only for money is likely to neither make money nor find much fun in life.",
    from: "Charles M. Schwab, American steel magnate",
  },
  {
    text:
      "“Be undeniably good. No marketing effort or social media buzzword can be a substitute for that.",
    from: "Anthony Volodkin, founder of Hype Machine",
  },
  {
    text: "“Ideas are easy. Implementation is hard.",
    from: "Guy Kawasaki, founder of AllTop",
  },
  {
    text:
      "“You can say anything to anyone, but how you say it will determine how they will react.",
    from: "John Rampton, entrepreneur and investor",
  },
  {
    text: "“Always deliver more than expected.",
    from: "Larry Page, co-founder of Google",
  },
  {
    text:
      "“Assume you have 90 seconds with a new user before they decide to use your app or delete it.",
    from: "Tamara Steffens, Acompli",
  },
  {
    text:
      "“Even if you don’t have the perfect idea to begin with, you can likely adapt.",
    from: "Victoria Ransom, co-founder of Wildfire Interactive",
  },
  {
    text:
      "“Make your team feel respected, empowered and genuinely excited about the company’s mission.",
    from: "Tim Westergen, founder of Pandora",
  },
  {
    text: "“Stay self-funded as long as possible.",
    from: "Garrett Camp, co-founder of Stumbleupon",
  },
  {
    text:
      "“In between goals is a thing called life, that has to be lived and enjoyed.",
    from: "Sid Caesar, Entertainer",
  },
  {
    text: "“Wonder what your customer really wants? Ask. Don’t tell.",
    from: "Lisa Stone, co-founder of BlogHer",
  },
  {
    text: "“When times are bad is when the real entrepreneurs emerge.",
    from: "Robert Kiyosaki, author of Rich Dad Poor Dad",
  },
  {
    text:
      "“What do you need to start a business? Three simple things: know your product better than anyone, know your customer, and have a burning desire to succeed.",
    from: "Dave Thomas, founder of Wendy’s",
  },
  {
    text: "“Get big quietly, so you don’t tip off potential competitors.",
    from: "Chris Dixon, co-founder of Hunch",
  },
  {
    text: "“Don’t worry about failure; you only have to be right once.",
    from: "Drew Houston, founder of Dropbox",
  },
  {
    text:
      "“Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma",
    from:
      "which is living with the results of other people’s thinking. Don’t let the noise of other’s opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary.”",
  },
  {
    text:
      "“Don’t be cocky. Don’t be flashy. There’s always someone better than you.",
    from: "Tony Hsieh, Zappos.com CEO",
  },
  {
    text:
      "“Don’t take too much advice. Most people who have a lot of advice to give — with a few exceptions — generalize whatever they did. Don’t over-analyze everything. I myself have been guilty of over-thinking problems. Just build things and find out if they work.",
    from: "Ben Silbermann, co-founder of Pinterest",
  },
  {
    text:
      "“Openly share and talk to people about your idea. Use their lack of interest or doubt to fuel your motivation to make it happen.",
    from: "Todd Garland, founder of BuySellAds",
  },
  {
    text: "“How you climb a mountain is more important than reaching the top.",
    from: "Yvon Chouinard, founder of Patagonia",
  },
  {
    text:
      "“Associate yourself with people of good quality, for it is better to be alone than in bad company.",
    from: "Booker T. Washington, Educator and author",
  },
  {
    text:
      "“It’s fine to celebrate success but it is more important to heed the lessons of failure.",
    from: "Bill Gates, co-founder of Microsoft",
  },
  {
    text:
      "“It takes 20 years to build a reputation and five minutes to ruin it. If you think about that, you’ll do things differently.",
    from: "Warren Buffett, Investor",
  },
  {
    text:
      "“Statistics suggest that when customers complain, business owners and managers ought to get excited about it. The complaining customer represents a huge opportunity for more business.",
    from: "Zig Ziglar, author and motivational speaker",
  },
  {
    text:
      "“There is only one success- to be able to spend your life in your own way.",
    from: "Christopher Morley, journalist",
  },
  {
    text:
      "“Formal education will make you a living; self-education will make you a fortune.",
    from: "Jim Rohn, author and speaker",
  },
  {
    text:
      "“When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
    from: "Henry Ford, founder of Ford Motor Company",
  },
  {
    text:
      "“Rarely have I seen a situation where doing less than the other guy is a good strategy.",
    from: "Jimmy Spithill, Australian yachtsman",
  },
  {
    text: "“You miss 100 percent of the shots you don’t take.",
    from: "Wayne Gretzky, NHL Hall of Famer",
  },
  {
    text:
      "“The best time to plant a tree was 20 years ago. The second best time is now.",
    from: "Chinese proverb",
  },
  {
    text:
      "“The secret to successful hiring is this: look for the people who want to change the world.",
    from: "Marc Benioff, CEO of Salesforce",
  },
  {
    text:
      "“Twenty years from now, you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.",
    from: "Mark Twain, author",
  },
  {
    text:
      "“If you’ve got an idea, start today. There’s no better time than now to get going. That doesn’t mean quit your job and jump into your idea 100% from day one, but there’s always small progress that can be made to start the movement.",
    from: "Kevin Systrom, co-founder of Instagram",
  },
  {
    text:
      "“It’s almost always harder to raise capital than you thought it would be, and it always takes longer. So plan for that.",
    from: "Richard Harroch, Venture Capitalist",
  },
  {
    text:
      "“For all of the most important things, the timing always sucks. Waiting for a good time to quit your job? The stars will never align and the traffic lights of life will never all be green at the same time. The universe doesn’t conspire against you, but it doesn’t go out of its way to line up the pins either. Conditions are never perfect. “Someday is a disease that will take your dreams to the grave with you. Pro and con lists are just as bad. If it’s important to you and you want to do it “eventually, just do it and correct course along the way.",
    from: "Timothy Ferriss, author of The 4-Hour Work Week",
  },
  {
    text:
      "“I don’t have big ideas. I sometimes have small ideas, which seem to work out.",
    from: "Matt Mullenweg, founder of Automattic",
  },
  {
    text: "“Fail often so you can succeed sooner.",
    from: "Tom Kelley, Ideo partner",
  },
  {
    text: "“When you cease to dream you cease to live.",
    from: "Malcolm Forbes, chairman and editor in chief of Forbes Magazine",
  },
  {
    text: "“Whatever the mind can conceive and believe, the mind can achieve.",
    from: "Dr. Napoleon Hill, author of Think and Grow Rich",
  },
  {
    text:
      "“Running a start-up is like eating glass. You just start to like the taste of your own blood.",
    from: "Sean Parker, co-founder of Napster",
  },
  {
    text: "“My number one piece of advice is: you should learn how to program.",
    from: "Mark Zuckerberg, founder of Facebook",
  },
  {
    text: "“The way to get started is to quit talking and begin doing.",
    from: "Walt Disney, co-founder of the Walt Disney Company",
  },
  {
    text:
      "“The pace of change for entrepreneurs is rapidly accelerating, and the cost and risk of launching a new business and getting off the ground is just amazing. The ability to gain user feedback really quickly and adapt to what your consumers want is totally different with the web as it is now. But finding a new market, helping people and taking that original idea and turning it into a business is really exciting right now.",
    from: "Matt Mickiewicz, co-founder of 99 Designs",
  },
  {
    text:
      "“Building and hanging on to an audience is the biggest role of social media.",
    from: "Matthew Inman, The Oatmeal",
  },
  {
    text:
      "“Every feature has some maintenance cost, and having fewer features lets us focus on the ones we care about and make sure they work very well.",
    from: "David Karp, founder of Tumblr",
  },
  {
    text: "“A poorly implemented feature hurts more than not having it at all.",
    from: "Noah Everett, founder of Twitpic",
  },
  {
    text: "“This defines entrepreneur and entrepreneurship",
    from:
      "the entrepreneur always searches for change, responds to it, and exploits it as an opportunity.”― Peter F. Drucker, educator and author",
  },
  {
    text:
      "“You don’t learn to walk by following rules. You learn by doing and falling over.",
    from: "Richard Branson, founder of Virgin Group",
  },
  {
    text:
      "“The fastest way to change yourself is to hang out with people who are already the way you want to be.",
    from: "Reid Hoffman, co-founder of Linkedin",
  },
  {
    text:
      "“Risk more than others think is safe. Dream more than others think is practical.",
    from: "Howard Schultz, CEO of Starbucks",
  },
  {
    text:
      "“You shouldn’t focus on why you can’t do something, which is what most people do. You should focus on why perhaps you can, and be one of the exceptions.",
    from: "Steve Case, co-founder of AOL",
  },
  {
    text:
      "“The critical ingredient is getting off your butt and doing something. It’s as simple as that. A lot of people have ideas, but there are few who decide to do something about them now. Not tomorrow. Not next week. But today. The true entrepreneur is a doer not a dreamer.",
    from: "Nolan Bushnell, founder of Atari",
  },
  {
    text: "“If you cannot do great things, do small things in a great way.",
    from: "Napoleon Hill, author",
  },
  {
    text: "“Success is not what you have, but who you are.",
    from: "Bo Bennet, author and entreprenuer",
  },
  {
    text:
      "“One of the huge mistakes people make is that they try to force an interest on themselves. You don’t choose your passions; your passions choose you.",
    from: "Jeff Bezos, founder and CEO of Amazon.com",
  },
  {
    text:
      "“Lots of companies don’t succeed over time. What do they fundamentally do wrong? They usually miss the future.",
    from: "Larry Page, CEO of Google",
  },
  {
    text:
      "“It takes humility to realize that we don’t know everything, not to rest on our laurels and know that we must keep learning and observing. If we don’t, we can be sure some startup will be there to take our place.",
    from: "Cher Wang, CEO of HTC",
  },
  {
    text:
      "“There’s an entrepreneur right now, scared to death, making excuses, saying, ‘It’s not the right time just yet.’ There’s no such thing as a good time. Get out of your garage and go take a chance, and start your business.",
    from: "Kevin Plank, CEO of Under Armour",
  },
  {
    text:
      "“Be really picky with your hiring, and hire the absolute best people you possibly can. People are the most important component of almost every business, and attracting the best talent possible is going to make a huge difference.",
    from: "Peter Berg, founder of October Three",
  },
  {
    text:
      "“Worry about being better; bigger will take care of itself. Think one customer at a time and take care of each one the best way you can.",
    from: "Gary Comer, founder of Land’s End",
  },
  {
    text:
      "“You have a viable business only if your product is either better or cheaper than the alternatives. If it’s not one or the other, you might make some money at first, but it’s not a sustainable business.",
    from: "Jim Koch, founder of Boston Beer Co.",
  },
  {
    text:
      "“Every time I took these bigger risks, the opportunity for a bigger payout was always there.",
    from: "Casey Neistat, filmmaker",
  },
  {
    text:
      "“If you can do something to get somebody excited — not everybody — but if you can be the best for somebody, then you can win.",
    from: "Ron Shaich, founder and CEO of Panera Bread",
  },
  {
    text:
      "“Would you like me to give you a formula for success? It’s quite simple, really: Double your rate of failure. You are thinking of failure as the enemy of success. But it isn’t at all. You can be discouraged by failure or you can learn from it, so go ahead and make mistakes. Make all you can. Because remember that’s where you will find success.",
    from: "Thomas J. Watson, businessman",
  },
  {
    text:
      "“People who succeed have momentum. The more they succeed, the more they want to succeed, and the more they find a way to succeed. Similarly, when someone is failing, the tendency is to get on a downward spiral that can even become a self-fulfilling prophecy.",
    from: "Tony Robbins, motivational speaker",
  },
  {
    text:
      "“The only limit to our realization of tomorrow will be our doubts of today.",
    from: "Franklin D. Roosevelt",
  },
  {
    text: "“The successful warrior is the average man, with laser-like focus.",
    from: "Bruce Lee, actor and martial arts instructor",
  },
  {
    text: "“Fall seven times and stand up eight.",
    from: "Japanese proverb",
  },
  {
    text:
      "“The successful man is the one who finds out what is the matter with his business before his competitors do.",
    from: "Roy L. Smith, animator and film director",
  },
  {
    text:
      "“There’s no shortage of remarkable ideas, what’s missing is the will to execute them.",
    from: "Seth Godin, author and speaker",
  },
  {
    text:
      "“Keep on going, and the chances are that you will stumble on something, perhaps when you are least expecting it. I never heard of anyone ever stumbling on something sitting down.",
    from: "Charles F. Kettering, inventor",
  },
  {
    text:
      "“A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
    from: "David Brinkley, newscaster",
  },
  {
    text:
      "“Everyone is a genius. But if you judge a fish by its ability to climb a tree, it will spend its whole life believing it is stupid.",
    from: "Albert Einstein, Theoretical Physicist",
  },
  {
    text:
      "“Success in business requires training and discipline and hard work. But if you’re not frightened by these things, the opportunities are just as great today as they ever were.",
    from: "David Rockefeller, American banker",
  },
  {
    text: "“It is never too late to be what you might have been.",
    from: "George Eliot, journalist and novelist",
  },
  {
    text:
      "“I am not a product of my circumstances. I am a product of my decisions.",
    from: "Stephen Covey, author and businessman",
  },
  {
    text:
      "“There is only one way to avoid criticism: Do nothing, say nothing, and be nothing.",
    from: "Aristotle, Greek philosopher",
  },
  {
    text:
      "“Build your own dreams, or someone else will hire you to build theirs.",
    from: "Farrah Gray, investor and motivational speaker",
  },
  {
    text:
      "“You may be disappointed if you fail, but you are doomed if you don’t try.",
    from: "Beverly Sills, operatic soprano",
  },
];

let updated = quotes.filter((quote) => {
  let num = quote.text.length + quote.from.length;
  return num < 120;
});

const random = Math.floor(Math.random() * quotes.length);
const quotesPara = document.querySelector(".quotes");
window.addEventListener("load", () => {
  let result = updated[random];
  quotesPara.innerHTML = `${result.text} - ${result.from}`;
});
