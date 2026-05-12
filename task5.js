class Character {
    constructor() {
        this.equipment = [];
        this.actions = [];
    }
}

class CharacterBuilder {
    constructor() {
        this.character = new Character();
    }
    
    // Текучий інтерфейс: повертаємо this
    setHeight(height) { this.character.height = height; return this; }
    setBuild(build) { this.character.build = build; return this; }
    setEyes(color) { this.character.eyes = color; return this; }
    addEquipment(item) { this.character.equipment.push(item); return this; }
    
    build() { return this.character; }
}

class HeroBuilder extends CharacterBuilder {
    addGoodDeed(deed) {
        this.character.actions.push(`Добро: ${deed}`);
        return this;
    }
}

class EnemyBuilder extends CharacterBuilder {
    addEvilDeed(deed) {
        this.character.actions.push(`Зло: ${deed}`);
        return this;
    }
}

class Director {
    constructSuperHero(builder) {
        return builder.setHeight(190).setBuild("Strong").setEyes("Blue")
                      .addEquipment("Cape").addGoodDeed("Saved the city")
                      .build();
    }
    
    constructVillain(builder) {
        return builder.setHeight(185).setBuild("Thin").setEyes("Red")
                      .addEquipment("Toxic Mask").addEvilDeed("Stole the moon")
                      .build();
    }
}

// Перевірка
const director = new Director();
const hero = director.constructSuperHero(new HeroBuilder());
const enemy = director.constructVillain(new EnemyBuilder());

console.log("Твій Герой:", hero);
console.log("Твій Ворог:", enemy);