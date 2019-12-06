var notebook = {
    brand: prompt ("Enter a brand"),
    type: prompt ("Enter a type"),
    model: prompt ("Enter a model"),
    ram: +prompt ("Enter a ram"),
    size: prompt ("Enter a size"),
    weight: +prompt ("Enter a weight"),
    resolution: {
        width: +prompt ("Enter a width"),
        height: +prompt ("Enter a height")
    },
    owner: person 
};

var phone = {
    brand: prompt ("Enter a brand"),
    model: prompt ("Enter a model"),
    ram: +prompt ("Enter a ram"),
    color: prompt ("Enter a color"),
    owner: person
};

var person = {
    name: prompt ("Enter a name"),
    surname: prompt ("Enter a surname"),
    married: confirm ("Enter a married"),
    smartphone: phone,
    laptop: notebook 
};

notebook.owner = person;
phone.owner = person;

console.log(person.smartphone.owner.laptop.owner.smartphone == person.smartphone)
