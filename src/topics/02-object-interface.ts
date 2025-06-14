const skills: string[] = ["Bash", "Counter", "Healing"];

interface Character {
  name: string;
  hpPoints: number | "Full";
  skills: string[];
  hometown?: string;
}

const strider: Character = {
  name: "Strider",
  hpPoints: 100,
  skills: skills,
};

strider.hometown = "Rivendell";

console.table(strider);
