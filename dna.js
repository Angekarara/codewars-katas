function dnaStrand(dna) {
  let dna1 = dna.split("");

  let results = dna1.map((dn) => {
    if (dn === "A") {
      return dn.replace("A", "T");
    } else if (dn === "G") {
      return dn.replace("G", "C");
    } else if (dn === "T") {
      return dn.replace("T", "A");
    } else if (dn === "C") {
      return dn.replace("C", "G");
    }
  });
  return results.join("");
}
console.log(dnaStrand("ATGC")); // Output: "TACG"
