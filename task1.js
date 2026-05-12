class Subscription {
    constructor(price, minPeriod, channels) {
        this.price = price;
        this.minPeriod = minPeriod;
        this.channels = channels;
    }

    getInfo() {
        return `Price: ${this.price}, Minimum Period: ${this.minPeriod} months, Channels: ${this.channels.join(', ')}`;
    }
}

class DamesticSubscription extends Subscription {
    constructor() {
        super(150, 1, ["ICTV", "1+1", "Новий канал"]);
    }
}

class EducationalSubscription extends Subscription {
    constructor() {
        super(200, 3, ["Discovery", "National Geographic", "History"]);
    }
}

class PremiumSubscription extends Subscription {
    constructor() {
        super(500, 12, ["HBO", "Netflix", "Sports HD", "4K Movies"]);
    }
}

// Базовий клас-творець
class PurchaseChannel {
    createSubscription(type) {
        throw new Error("Метод createSubscription() має бути реалізований");
    }
}

// Конкретні творці
class WebSite extends PurchaseChannel {
    createSubscription(type) {
        console.log("Створення підписки через Веб-сайт...");
        if (type === 'domestic') return new DomesticSubscription();
        if (type === 'educational') return new EducationalSubscription();
        if (type === 'premium') return new PremiumSubscription();
    }
}

class MobileApp extends PurchaseChannel {
    createSubscription(type) {
        console.log("Створення підписки через Мобільний додаток...");
        // Тут може бути своя логіка, наприклад, знижка або інший набір
        if (type === 'premium') return new PremiumSubscription();
        return new DomesticSubscription(); 
    }
}

class ManagerCall extends PurchaseChannel {
    createSubscription(type) {
        console.log("Оформлення підписки через Менеджера...");
        // Менеджер може оформити будь-яку підписку
        if (type === 'educational') return new EducationalSubscription();
        return new PremiumSubscription();
    }
}


// Тестування
const webStore = new WebSite();
const appStore = new MobileApp();

const sub1 = webStore.createSubscription('educational');
console.log(sub1.getInfo());

const sub2 = appStore.createSubscription('premium');
console.log(sub2.getInfo());