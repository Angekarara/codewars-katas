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
