class Virus {
    constructor(name, type, weight, age, children = []) {
        this.name = name;
        this.type = type;
        this.weight = weight;
        this.age = age;
        this.children = children;
    }

    clone() {
        // Клонуємо дітей рекурсивно (глибоке копіювання) [cite: 37]
        const clonedChildren = this.children.map(child => child.clone());
        return new Virus(this.name + " (copy)", this.type, this.weight, this.age, clonedChildren);
    }
}

// Створюємо сімейство (3 покоління) [cite: 32]
const child = new Virus("Онук", "Грип", 0.1, 1);
const parent = new Virus("Батько", "Грип", 0.5, 5, [child]);
const root = new Virus("Дід", "Грип", 1.0, 10, [parent]);

const rootCopy = root.clone();
console.log(rootCopy);

