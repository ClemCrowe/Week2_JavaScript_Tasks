function firstAndLastLetterSame(str) {
    const firstLetter = str.charAt(0);
    const lastLetter = str.charAt(str.length - 1);
    return firstLetter === lastLetter;
  }

  console.log(firstAndLastLetterSame("hannah"))