// Call StackExample => LIFO => Last In First Out
// 7. etc
// 6. etc
// 5. etc
// 4. etc
// 3. etc
// 2. getBowl()
// 1. CrackEggs()
// 0. MakeEggs()

let makeEggs = function(style, n) {
    let completedEgg;

    if (style !== "boiled") {
        let crackedEggs = crackEggs(n);
        if (style !== "scrambled") {
            completedEgg = fryEgg(crackedEggs, style);
        } else {
            let preppedEggs = whipEggs(crackedEggs);
            completedEgg = fryEgg(preppedEggs);
        }
    }
    // Other procedures here
    return completedEgg;
};

makeEggs("scrambled", 3);

// Dictionary En-Es
// Make Eggs = Hacer Huevos
// Completed Egg = Huevo completado/terminado
// Cracked Eggs = Huevos rotos
// Scrambled = Revuelto
// Boiled = Hervido
// Fry Egg = Huevo frito
// Prepped Eggs = Huevos preparados
// Whip Eggs = Batir huevos