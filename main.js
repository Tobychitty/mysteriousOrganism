// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

// Factory function to model pAequor specimens
const pAequorFactory = (number, array) => {
  return {
    specimen: number,
    dna: array,

    // Randomly mutates a base (cannot be the same as previous)
    mutate() {
      const base = Math.floor(Math.random() * 15)
      prev = array[base]
      do {
        array[base] = returnRandBase()
      } while (array[base] === prev);
    },

    // Returns similarty (%) between two specimens
    compareDNA(pAequor) {
      same = []
      this.dna.forEach((base, index) => {
        if (base === pAequor[index]){
          same.push(base)
          console.log(base)
        };
      })
      return `specimen #1 and specimen #2 have ${same.length / this.dna.length * 100}% DNA in common`
    },

    // Returns true if C and G bases make up at least 60%
    willLikelySurvive() {
      count = 0
      this.dna.forEach(base => {
        if (base === 'C' || base === 'G') { count += 1 }
      })
      return count / this.dna.length >= 0.6
    }
  };
};

// Returns array of 30 random specimens likely to survive
const thirtySurvivors = () => {
  let survivors = []
  let i = 1
  while (i<31) {
    instance = pAequorFactory(i, mockUpStrand())
    if (instance.willLikelySurvive()){
      survivors.push([`Specimen: ${instance.specimen}, DNA: ${instance.dna}`])
      i++;
    };
  };
  return survivors;
};

console.log(thirtySurvivors())



