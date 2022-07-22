type User = {
    name: string;
    email: string;
    address: {
        city: string;
        state?: string; // ? serve para dizer que o parametro não é obrigatorio
    }
}

function showWelcomeMessage(user: User) {
    return `Welcome ${user.name}, your e-mail is ${user.email}. Your city is ${user.address.city} and your state is ${user.address.state}`;

}

const user = {
    name: 'Lucas',
    email: 'Lucas@gmail.com',
    address: {
        city: 'Cupira',
        state: 'PE',
    }
}

const message = showWelcomeMessage(user);