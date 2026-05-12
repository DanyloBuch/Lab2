class Authenticator {
    constructor() {
        if (Authenticator.instance) {
            return Authenticator.instance; // Повертаємо вже існуючий об'єкт
        }
        this.id = Math.random(); // Для перевірки унікальності
        Authenticator.instance = this;
    }

    static getInstance() {
        if (!Authenticator.instance) {
            Authenticator.instance = new Authenticator();
        }
        return Authenticator.instance;
    }
}

// Перевірка
const auth1 = new Authenticator();
const auth2 = Authenticator.getInstance();

console.log(auth1 === auth2); // Має бути true
console.log(`ID 1: ${auth1.id}, ID 2: ${auth2.id}`); // ID мають збігатися