
export interface CollectiveNoun {
  noun: string;
  collective: string;
  options: string[];
}

export const collectiveNouns: CollectiveNoun[] = [
  // Mammals
  { noun: "lions", collective: "pride", options: ["pride", "herd", "flock", "pack"] },
  { noun: "wolves", collective: "pack", options: ["pack", "pride", "herd", "school"] },
  { noun: "cows", collective: "herd", options: ["herd", "flock", "pack", "pride"] },
  { noun: "sheep", collective: "flock", options: ["flock", "herd", "pack", "group"] },
  { noun: "horses", collective: "herd", options: ["herd", "pack", "flock", "stable"] },
  { noun: "elephants", collective: "herd", options: ["herd", "pack", "group", "family"] },
  { noun: "kangaroos", collective: "mob", options: ["mob", "herd", "pack", "bounce"] },
  { noun: "zebras", collective: "dazzle", options: ["dazzle", "herd", "stripe", "group"] },
  { noun: "giraffes", collective: "tower", options: ["tower", "herd", "tall", "group"] },
  { noun: "tigers", collective: "streak", options: ["streak", "pack", "pride", "group"] },
  { noun: "leopards", collective: "leap", options: ["leap", "pack", "spot", "group"] },
  { noun: "panthers", collective: "shadow", options: ["shadow", "pack", "dark", "group"] },
  { noun: "cheetahs", collective: "coalition", options: ["coalition", "pack", "speed", "group"] },
  { noun: "rhinos", collective: "crash", options: ["crash", "herd", "horn", "group"] },
  { noun: "hippos", collective: "bloat", options: ["bloat", "herd", "pod", "group"] },
  { noun: "monkeys", collective: "troop", options: ["troop", "pack", "band", "group"] },
  { noun: "gorillas", collective: "band", options: ["band", "troop", "family", "group"] },
  { noun: "rabbits", collective: "warren", options: ["warren", "hutch", "group", "burrow"] },
  { noun: "squirrels", collective: "dray", options: ["dray", "nest", "group", "scurry"] },
  { noun: "mice", collective: "mischief", options: ["mischief", "nest", "group", "trouble"] },
  { noun: "rats", collective: "pack", options: ["pack", "nest", "group", "swarm"] },
  { noun: "cats", collective: "clowder", options: ["clowder", "pack", "group", "litter"] },
  { noun: "dogs", collective: "pack", options: ["pack", "group", "litter", "kennel"] },
  { noun: "puppies", collective: "litter", options: ["litter", "pack", "group", "cute"] },
  { noun: "kittens", collective: "kindle", options: ["kindle", "litter", "group", "adorable"] },
  { noun: "bears", collective: "sleuth", options: ["sleuth", "pack", "den", "group"] },
  { noun: "deer", collective: "herd", options: ["herd", "pack", "group", "family"] },
  { noun: "moose", collective: "herd", options: ["herd", "pack", "group", "antler"] },
  { noun: "elk", collective: "gang", options: ["gang", "herd", "pack", "group"] },
  { noun: "buffalo", collective: "herd", options: ["herd", "pack", "stampede", "group"] },
  { noun: "pigs", collective: "sounder", options: ["sounder", "herd", "group", "sty"] },
  { noun: "goats", collective: "tribe", options: ["tribe", "herd", "flock", "group"] },
  { noun: "donkeys", collective: "pace", options: ["pace", "herd", "group", "bray"] },
  { noun: "mules", collective: "pack", options: ["pack", "herd", "group", "stubborn"] },
  { noun: "camels", collective: "caravan", options: ["caravan", "herd", "group", "desert"] },
  { noun: "llamas", collective: "herd", options: ["herd", "group", "pack", "wool"] },
  { noun: "seals", collective: "pod", options: ["pod", "herd", "group", "colony"] },
  { noun: "otters", collective: "romp", options: ["romp", "group", "family", "play"] },
  { noun: "beavers", collective: "colony", options: ["colony", "group", "lodge", "dam"] },
  { noun: "badgers", collective: "cete", options: ["cete", "group", "set", "burrow"] },
  { noun: "foxes", collective: "skulk", options: ["skulk", "pack", "group", "den"] },
  { noun: "weasels", collective: "gang", options: ["gang", "group", "pack", "sneak"] },

  // Birds
  { noun: "birds", collective: "flock", options: ["flock", "pack", "herd", "school"] },
  { noun: "geese", collective: "gaggle", options: ["gaggle", "flock", "herd", "group"] },
  { noun: "penguins", collective: "waddle", options: ["waddle", "flock", "group", "colony"] },
  { noun: "flamingos", collective: "flamboyance", options: ["flamboyance", "flock", "group", "pink"] },
  { noun: "owls", collective: "parliament", options: ["parliament", "flock", "hoot", "group"] },
  { noun: "ravens", collective: "unkindness", options: ["unkindness", "flock", "murder", "group"] },
  { noun: "crows", collective: "murder", options: ["murder", "flock", "unkindness", "group"] },
  { noun: "peacocks", collective: "ostentation", options: ["ostentation", "flock", "display", "group"] },
  { noun: "eagles", collective: "convocation", options: ["convocation", "flock", "soar", "group"] },
  { noun: "hawks", collective: "cast", options: ["cast", "flock", "hunt", "group"] },
  { noun: "vultures", collective: "wake", options: ["wake", "flock", "circle", "group"] },
  { noun: "swans", collective: "bevy", options: ["bevy", "flock", "grace", "group"] },
  { noun: "ducks", collective: "raft", options: ["raft", "flock", "quack", "group"] },
  { noun: "chickens", collective: "flock", options: ["flock", "coop", "group", "cluck"] },
  { noun: "turkeys", collective: "rafter", options: ["rafter", "flock", "gobble", "group"] },
  { noun: "pigeons", collective: "kit", options: ["kit", "flock", "coo", "group"] },
  { noun: "starlings", collective: "murmuration", options: ["murmuration", "flock", "group", "swarm"] },
  { noun: "sparrows", collective: "host", options: ["host", "flock", "group", "chirp"] },
  { noun: "robins", collective: "round", options: ["round", "flock", "group", "red"] },
  { noun: "finches", collective: "charm", options: ["charm", "flock", "group", "song"] },
  { noun: "cardinals", collective: "college", options: ["college", "flock", "group", "red"] },
  { noun: "bluejays", collective: "party", options: ["party", "flock", "group", "blue"] },
  { noun: "woodpeckers", collective: "descent", options: ["descent", "flock", "group", "peck"] },
  { noun: "hummingbirds", collective: "charm", options: ["charm", "flock", "group", "hover"] },
  { noun: "parrots", collective: "pandemonium", options: ["pandemonium", "flock", "group", "talk"] },
  { noun: "pelicans", collective: "squadron", options: ["squadron", "flock", "group", "pouch"] },
  { noun: "storks", collective: "mustering", options: ["mustering", "flock", "group", "nest"] },
  { noun: "herons", collective: "siege", options: ["siege", "flock", "group", "wade"] },
  { noun: "cranes", collective: "sedge", options: ["sedge", "flock", "group", "tall"] },

  // Marine Life
  { noun: "fish", collective: "school", options: ["school", "flock", "herd", "pride"] },
  { noun: "dolphins", collective: "pod", options: ["pod", "school", "pack", "group"] },
  { noun: "whales", collective: "pod", options: ["pod", "school", "group", "ocean"] },
  { noun: "sharks", collective: "shiver", options: ["shiver", "school", "pack", "group"] },
  { noun: "jellyfish", collective: "smack", options: ["smack", "school", "group", "sting"] },
  { noun: "octopi", collective: "consortium", options: ["consortium", "group", "tentacle", "eight"] },
  { noun: "squid", collective: "squad", options: ["squad", "school", "group", "tentacle"] },
  { noun: "salmon", collective: "run", options: ["run", "school", "group", "swim"] },
  { noun: "tuna", collective: "school", options: ["school", "group", "swim", "can"] },
  { noun: "herrings", collective: "army", options: ["army", "school", "group", "silver"] },
  { noun: "sardines", collective: "family", options: ["family", "school", "group", "tin"] },
  { noun: "eels", collective: "swarm", options: ["swarm", "group", "slither", "electric"] },
  { noun: "rays", collective: "fever", options: ["fever", "school", "group", "flat"] },

  // Insects and Small Creatures
  { noun: "bees", collective: "swarm", options: ["swarm", "hive", "cluster", "group"] },
  { noun: "ants", collective: "colony", options: ["colony", "swarm", "group", "pack"] },
  { noun: "spiders", collective: "cluster", options: ["cluster", "web", "group", "eight"] },
  { noun: "butterflies", collective: "flutter", options: ["flutter", "group", "wing", "colorful"] },
  { noun: "bats", collective: "colony", options: ["colony", "group", "cave", "night"] },
  { noun: "wasps", collective: "nest", options: ["nest", "swarm", "group", "sting"] },
  { noun: "hornets", collective: "nest", options: ["nest", "swarm", "group", "buzz"] },
  { noun: "flies", collective: "swarm", options: ["swarm", "group", "buzz", "pest"] },
  { noun: "mosquitoes", collective: "scourge", options: ["scourge", "swarm", "group", "bite"] },
  { noun: "moths", collective: "eclipse", options: ["eclipse", "group", "flutter", "night"] },
  { noun: "grasshoppers", collective: "cloud", options: ["cloud", "swarm", "group", "hop"] },
  { noun: "crickets", collective: "orchestra", options: ["orchestra", "group", "chirp", "music"] },
  { noun: "beetles", collective: "swarm", options: ["swarm", "group", "hard", "shell"] },
  { noun: "termites", collective: "colony", options: ["colony", "swarm", "group", "wood"] },
  { noun: "locusts", collective: "plague", options: ["plague", "swarm", "group", "destroy"] },

  // Reptiles and Amphibians
  { noun: "turtles", collective: "bale", options: ["bale", "group", "shell", "slow"] },
  { noun: "snakes", collective: "nest", options: ["nest", "group", "slither", "coil"] },
  { noun: "lizards", collective: "lounge", options: ["lounge", "group", "scale", "sun"] },
  { noun: "frogs", collective: "army", options: ["army", "group", "hop", "pond"] },
  { noun: "toads", collective: "knot", options: ["knot", "group", "wart", "croak"] },
  { noun: "salamanders", collective: "congress", options: ["congress", "group", "moist", "tail"] },
  { noun: "alligators", collective: "congregation", options: ["congregation", "group", "teeth", "swamp"] },
  { noun: "crocodiles", collective: "bask", options: ["bask", "group", "snap", "river"] },
  { noun: "iguanas", collective: "mess", options: ["mess", "group", "green", "sun"] },

  // Marine Creatures (Crustaceans and Mollusks)
  { noun: "crabs", collective: "cast", options: ["cast", "group", "shell", "pinch"] },
  { noun: "lobsters", collective: "risk", options: ["risk", "group", "claw", "red"] },
  { noun: "shrimp", collective: "troupe", options: ["troupe", "group", "small", "pink"] },
  { noun: "oysters", collective: "bed", options: ["bed", "group", "shell", "pearl"] },
  { noun: "clams", collective: "bed", options: ["bed", "group", "shell", "dig"] },
  { noun: "mussels", collective: "bed", options: ["bed", "group", "shell", "rock"] },

  // Exotic and Mythical-sounding
  { noun: "unicorns", collective: "blessing", options: ["blessing", "herd", "magic", "horn"] },
  { noun: "dragons", collective: "thunder", options: ["thunder", "flight", "fire", "group"] },
  { noun: "phoenixes", collective: "resurrection", options: ["resurrection", "fire", "group", "rise"] }
];

// Function to shuffle array
export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Function to get a random question with shuffled options
export const getRandomQuestion = (usedQuestions: number[] = []): { question: CollectiveNoun; index: number } => {
  const availableQuestions = collectiveNouns
    .map((_, index) => index)
    .filter(index => !usedQuestions.includes(index));
  
  if (availableQuestions.length === 0) {
    // Reset if all questions used
    const randomIndex = Math.floor(Math.random() * collectiveNouns.length);
    return {
      question: {
        ...collectiveNouns[randomIndex],
        options: shuffleArray(collectiveNouns[randomIndex].options)
      },
      index: randomIndex
    };
  }
  
  const randomIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
  return {
    question: {
      ...collectiveNouns[randomIndex],
      options: shuffleArray(collectiveNouns[randomIndex].options)
    },
    index: randomIndex
  };
};
