class Animal {
  //   public name: string;
  //   public species: string;
  //   public sound: string;
  // Parameter Properties
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {
    // (this.name = name),
    //  (this.species = species),
    //   (this.sound = sound);
    // Arro function এ this কাজ করেনা।
  }

  public makeSound() {
    console.log(`The ${this.name} say ${(this, this.sound)}`);
  }
}

const dog = new Animal("Bruno", "Dog", "Ghew Ghew");
const cat = new Animal("Guddu", "cat", "Mew Mew");
dog.makeSound();
cat.makeSound();
