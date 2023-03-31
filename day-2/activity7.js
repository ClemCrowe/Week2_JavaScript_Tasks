function findLastVowel(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let lastVowelIndex = -1;
    
    for (let i = 0; i < str.length; i++) {
      const char = str[i].toLowerCase();
      if (vowels.includes(char)) {
        lastVowelIndex = i;
      }
    }
    return lastVowelIndex >= 0 ? str[lastVowelIndex] : null;
  }
  
  const str = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi';
  const lastVowel = findLastVowel(str);
  console.log(lastVowel);
    