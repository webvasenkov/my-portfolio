const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export const typeWriterEffect = async (about, setDescription, setAnimationLine) => {
  for (let i = 0; i < about.length; i++) {
    if (!i) {
      setAnimationLine((animationLinePrev) => ({ ...animationLinePrev, animationDuration: '0.6s' }));
      await delay(2000);
    }

    for (let j = 0; j < about[i].length * 2 + 1; j++) {
      // type text
      if (j < about[i].length) {
        setAnimationLine((animationLinePrev) => ({ ...animationLinePrev, animationDuration: '0s' }));
        await delay(180);
        setDescription((descriptionPrev) => {
          return descriptionPrev + about[i][j];
        });
      }
      // delay after typed text
      else if (j === about[i].length) {
        setAnimationLine((animationLinePrev) => ({ ...animationLinePrev, animationDuration: '0.6s' }));
        await delay(1500);
      }
      // remove text
      else if (i !== about.length - 1) {
        setAnimationLine((animationLinePrev) => ({ ...animationLinePrev, animationDuration: '0s' }));
        await delay(50);
        setDescription((descriptionPrev) => {
          return descriptionPrev.slice(0, descriptionPrev.length - 1);
        });
      }
      // line display none
      else {
        setAnimationLine((animationLinePrev) => ({ ...animationLinePrev, animationDuration: '0s', display: 'none' }));
      }
    }
  }
};
