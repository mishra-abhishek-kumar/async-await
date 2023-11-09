console.log('person1: show ticket');
console.log('person2: show ticket');

const promiseWifeBringTicks = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ticket');
    }, 3000)
});

const getPopcorn = promiseWifeBringTicks.then((t) => {
    console.log('wife: I have tics');
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');
    return new Promise((resolve, reject) => resolve(`${t} popcorn`));
});

const getButter = getPopcorn.then((t) => {
    console.log('husband: i got some popcorn');
    console.log('husband: we should go in');
    console.log('wife: no i need butter on my popcorn');
    return new Promise((resolve, reject) => resolve(`${t} butter`));
})

const getColdDrinks = getButter.then((t) => {
    console.log(`husband: i got some butter on popcorn`);
    console.log('husband: anything else madam?');
    console.log('wife: lets go we are getting late');
    console.log('husband: thanks for the remiender *grins*');
    console.log('wife: ohh wait i need some colddrink too');
    console.log(`husband: i have got the colddrinks already, lets go now`);
    return new Promise((resolve, reject) => resolve(`${t} colddrink`));
});

getColdDrinks.then((t) => console.log(t))


//Async / Await

const preMovie = async () => {
    const promiseWifeBringTicks = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ticket');
        }, 3000)
    });
    const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));
    const getButter = new Promise((resolve, reject) => resolve('butter'));
    const getColdDrinks = new Promise((resolve, reject) => resolve('colddrink'));

    let ticket = await promiseWifeBringTicks;

    console.log(`wife: I have ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');

    let popcorn = await getPopcorn;

    console.log(`husband: i got some ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife: no i need butter on my popcorn');

    let butter = await getButter;

    console.log(`husband: i got some ${butter} on popcorn`);
    console.log('husband: anything else madam?');
    console.log('wife: lets go we are getting late');
    console.log('husband: thanks for the remiender *grins*');
    console.log('wife: ohh wait i need some colddrink too');

    let coldDrink = await getColdDrinks;

    console.log(`husband: i have got the ${coldDrink} already`);


    return ticket;
};

preMovie().then((m) => console.log(`person3: shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');