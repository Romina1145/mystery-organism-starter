// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// console.log(mockUpStrand());

function pAequorFactory(specimenNum, dna) {
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate() {
      let randomBaseIndex = Math.floor(Math.random() * this.dna.length);
      let randomSelectedBase = returnRandBase();
      if (this.dna[randomBaseIndex] === randomSelectedBase) {
        // don't do nothing
        console.log(
          `pAequorFactory.mutate() - The new DNA base '${randomSelectedBase}' is identical to the current base '${this.dna[randomBaseIndex]}' and does not need to change.\n`
        );
        return this.dna;
      } else {
        // overwrite the original DNA base with the new randomly generated one.
        console.log(
          `\nOriginal DNA base: ${this.dna[randomBaseIndex]} at index: ${randomBaseIndex}`
        );
        this.dna[randomBaseIndex] = randomSelectedBase;
        console.log(
          `Newly inserted DNA base: ${this.dna[randomBaseIndex]} at index ${randomBaseIndex}\n----------\n `
        );
        return this.dna;
      }
    },
    compareDNA(pAequorObject) {
      console.log(`current DNA is: ${this.dna}`);
      console.log(`Other DNA sequence: ${pAequorObject.dna}`);
      if (this.dna === pAequorObject.dna) {
        console.log(
          `Specimen ${pAequorObject.specimenNum}  has an identical DNA sequence.`
        );
      } else {
        let sameBases = 0;
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === pAequorObject.dna[i]) sameBases++;
        }
        console.log(`DNA in common for: ${this.specimenNum} and ${
          pAequorObject.specimenNum
        }:
       ${(sameBases / this.dna.length).toFixed(2)}%`);
      }
    },
  };
}

// checking mutate method
const pAequor = pAequorFactory(1, mockUpStrand());

// checking compare method
const pAequor1 = pAequorFactory(1, mockUpStrand());
const pAequor2 = pAequorFactory(2, mockUpStrand());

console.log(
  `pAequor BFEORE mutation\nSpecimen: ${pAequor.specimenNum}\nDNA Strand: ${pAequor.dna}`
);
pAequor.mutate();
console.log(
  `pAequor AFTER muatation\nSpecimen: ${pAequor.specimenNum}\nDNA Strand: ${pAequor.dna}`
);

pAequor1.compareDNA(pAequor2);
