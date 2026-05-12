// --- БАЗОВІ КЛАСИ ПРОДУКТІВ ---
class Smartphone { constructor(brand) { this.brand = brand; this.type = "Smartphone"; } info() { return `${this.brand} ${this.type}`; } }
class Laptop { constructor(brand) { this.brand = brand; this.type = "Laptop"; } info() { return `${this.brand} ${this.type}`; } }
class Netbook { constructor(brand) { this.brand = brand; this.type = "Netbook"; } info() { return `${this.brand} ${this.type}`; } }
class EBook { constructor(brand) { this.brand = brand; this.type = "EBook"; } info() { return `${this.brand} ${this.type}`; } }

// --- КОНКРЕТНІ ПРОДУКТИ (Бренди) ---
class IProneSmartphone extends Smartphone { constructor() { super("IProne"); } }
class IProneLaptop extends Laptop { constructor() { super("IProne"); } }

class KiaomiSmartphone extends Smartphone { constructor() { super("Kiaomi"); } }
class KiaomiLaptop extends Laptop { constructor() { super("Kiaomi"); } }

class BalaxySmartphone extends Smartphone { constructor() { super("Balaxy"); } }
class BalaxyLaptop extends Laptop { constructor() { super("Balaxy"); } }
// (Для Netbook та EBook можна додати аналогічно за потреби)

// --- АБСТРАКТНА ФАБРИКА ---
class TechFactory {
    createSmartphone() { throw new Error("Метод не реалізовано"); }
    createLaptop() { throw new Error("Метод не реалізовано"); }
}

// --- КОНКРЕТНІ ФАБРИКИ ---
class IProneFactory extends TechFactory {
    createSmartphone() { return new IProneSmartphone(); }
    createLaptop() { return new IProneLaptop(); }
}

class KiaomiFactory extends TechFactory {
    createSmartphone() { return new KiaomiSmartphone(); }
    createLaptop() { return new KiaomiLaptop(); }
}

class BalaxyFactory extends TechFactory {
    createSmartphone() { return new BalaxySmartphone(); }
    createLaptop() { return new BalaxyLaptop(); }
}

// --- ТЕСТУВАННЯ (Main) ---
function clientCode(factory) {
    const phone = factory.createSmartphone();
    const laptop = factory.createLaptop();

    console.log(`Клієнт замовив техніку:`);
    console.log(`- ${phone.info()}`);
    console.log(`- ${laptop.info()}`);
    console.log('---------------------------');
}

console.log("Працюємо з IProne:");
clientCode(new IProneFactory());

console.log("Працюємо з Kiaomi:");
clientCode(new KiaomiFactory());

console.log("Працюємо з Balaxy:");
clientCode(new BalaxyFactory());

