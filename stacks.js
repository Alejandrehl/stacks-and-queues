// Make Eggs = Hacer Huevos
// Completed Egg = Huevo completado/terminado
// Cracked Eggs = Huevos rotos
// Scrambled = Revuelto
// Boiled = Hervido
// Fry Egg = Huevo frito
// Prepped Eggs = Huevos preparados
// Whip Eggs = Batir huevos

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

    return completedEgg;
};

makeEggs("scrambled", 3);