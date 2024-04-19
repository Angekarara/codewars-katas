function well(x) {
  const goodIdeasCount = x.filter((idea) => idea === "good").length;

  if (goodIdeasCount === 0) {
    return "Fail!";
  } else if (goodIdeasCount <= 2) {
    return "Publish!";
  } else {
    return "I smell a series!";
  }
}
console.log(well(["good", "bad", "good", "good"])); // outpu 'Publish!'
console.log(well(["bad", "bad", "bad"])); // output 'Fail!'
console.log(well(["good", "bad", "bad", "good", "bad"])); // output 'I smell a series!'
