// Anagram - when two words are same and contains same letters

function isAnagram(str1, str2) {
   if(str1.length!== str1.length) return false;
   const freq = {};
   for(let c of str1) {
    freq[c] = (freq[c] || 0) +1
   }
   for(let c of str2) {
    if(!freq[c]) return false;
    freq[c]--;
   }
   return true;
}

export default function Anagram() {
  console.log(isAnagram("sint", "listen"));
}
