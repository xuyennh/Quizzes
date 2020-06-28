function counter(option) {
  const defaultOption = {
    from: 20,
    to: 0,
    onStart: () => {},
    onChange: () => {},
    onEnd: () => {},
  };

  const options = { ...defaultOption, ...option };
  let { from } = options;
  const { to, onStart, onChange, onEnd } = options;
  const ONE_SECONDS = 1000;
  if (from === to) {
    throw new Error("Bạn cần xét giá trị from và to khác nhau");
  }
  onStart();
  const id = setInterval(() => {
    if (from > to) {
      from--;
    } else {
      from++;
    }
    onChange(from);
    if (from === to) {
      onEnd();
      clearInterval(id);
    }
  }, ONE_SECONDS);
  return {
    clear() {
      onEnd();
      clearInterval(id);
    },
  };
}

export default counter;
