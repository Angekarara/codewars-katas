function cogRpm(cogs, n) {
  var s = 1;
  for (var i = n; i > 0; --i) s *= -cogs[i] / cogs[i - 1];
  var d = 1;
  for (var i = n; i < cogs.length - 1; ++i) d *= -cogs[i] / cogs[i + 1];
  return [s, d];
}
