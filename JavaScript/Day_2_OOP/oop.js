// dictionary
// user1 = {
//     name: "Cody",
//     age: 30,
//     sayhello: () => {
//         // function code for saying hello
//     }
// }
// context['key1']

// var context = {
//     key1: value1,
//     key2: value2,
//     key3: value3
// }

// context.key1

// when we have an object that has a function attached to it, that function
// is now called a method


class Superhero {
    constructor(heroName, alias = "Unknown", powers = []){
        this.heroName = heroName;
        this.alias = alias;
        this.powers = powers;
    }

    announceName(){
        console.log(`No need to fear, ${this.heroName} is here!`);
    }

    punchOtherHero(hero){
        if(hero == undefined){
            console.log(`${this.heroName} looks confused as they punch themselves in the face!`);
        } else {
            console.log(`${this.heroName} punches ${hero.heroName} in the face! Pow!`)
        }
    }
}

class SuperDuperHero extends Superhero {
    constructor(heroName, alias="Unkown", powers=[], rank="Rookie"){
        super(heroName, alias, powers);
        this.rank = rank;
    }

    announceName(){
        // console.log(`That's right, it's a real superduper hero! ${this.heroName} is here to save the day!`);
        super.announceName();
        console.log(`A real live member of the superduper club!`);
    }
}

const wonderwoman = new SuperDuperHero("Wonder Woman", "Diana Prince", ["Flight", "Strength", "lasso of truth"], "Lieutenant");

console.log(wonderwoman);


const batman = new Superhero("Batman", "Bruce Wayne", ["Money", "Kung fu", "Anger", "Darkness"]);

wonderwoman.punchOtherHero(batman);
wonderwoman.announceName();

// const flash = new Superhero("Flash", "Barry Allen", ["superspeed", "high metabolism", "smort"]);
// const superman = new Superhero("Superman", "Clark Kent", ["Flight", "strength", "heat vision", "frost breath"]);

// const newguy = new Superhero("Newguy");


// console.log(newguy);

// console.log(batman.powers[1]);
// console.log(flash.powers[1]);
// console.log(superman.powers[1]);


// superman.announceName();
// batman.announceName();
// batman.punchOtherHero(superman);
// superman.punchOtherHero();


// var something = {
//     name: "Cody",
//     age: 30
// }

// something.name = "new value";
// console.log(something);