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
  };
}
const pAequor = pAequorFactory(5, mockUpStrand());
console.log(
  `pAequor BFEORE mutation\nSpecimen: ${pAequor.specimenNum}\nDNA Strand: ${pAequor.dna}`
);
pAequor.mutate();
console.log(
  `pAequor AFTER muatation\nSpecimen: ${pAequor.specimenNum}\nDNA Strand: ${pAequor.dna}`
);
