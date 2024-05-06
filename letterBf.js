function bestFriend(txt, a, b) {
  const sentences = txt.split("");
  for (let i = 0; i < sentences.length; i++) {
    console.log(sentences[i]);
    if (sentences[i] === a && sentences[i + 1] !== b) {
      return false;
    }
  }
  return true;
}
