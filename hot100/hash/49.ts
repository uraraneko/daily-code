// https://leetcode.cn/problems/group-anagrams?envType=study-plan-v2&envId=top-100-liked

function groupAnagrams(strs: string[]): string[][] {
  const mp = {};
  for (let i = 0; i < strs.length; i++) {
    const temp = strs[i].split("").sort().join("");
    mp[temp] ? mp[temp].push(strs[i]) : (mp[temp] = [strs[i]]);
  }
  const res: string[][] = [];
  for (const key in mp) res.push(mp[key]);

  return res;
}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));

const groupAnagrams2 = (words = ["eat", "tea", "tan", "ate", "nat", "bat"]) => {
  const mp = new Map();
  for (let i = 0; i < words.length; i++) {
    const w = [...words[i]].sort().join("");
    mp.has(w) ? mp.get(w).push(words[i]) : mp.set(w, [words[i]]);
  }
  return [...mp.values()];
  // console.log(typeof mp[Symbol.iterator]);
};

console.log(groupAnagrams2(strs));
