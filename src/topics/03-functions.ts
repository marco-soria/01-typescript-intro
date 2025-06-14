function addNumbers(a: number, b: number) {
  return a + b;
}

//const addNumbersArrow = (a: number, b: number): number => a + b;
const addNumbersArrow = (a: number, b: number): string => {
  return `${a + b}`;
};

function multiply(
  firstNumber: number,
  secondNumber?: number,
  base: number = 2
): number {
  return firstNumber * base;
}

// const result1: number = addNumbers(5, 10);
// const result2: string = addNumbersArrow(5, 10);
// const multiplyResult: number = multiply(5);

//console.log({ result1, result2, multiplyResult });

interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}

const healCharacter = (character: Character, amount: number): void => {
  character.hp += amount;
  //console.log(`Character healed by ${amount}. New HP: ${character.hp}`);
};

const strider: Character = {
  name: "Strider",
  hp: 100,
  showHp() {
    console.log(`HP: ${this.hp}`);
  },
};

healCharacter(strider, 10);
healCharacter(strider, 50);

strider.showHp();
