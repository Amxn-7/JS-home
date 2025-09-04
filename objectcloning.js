let src = {
    age:18,
    wt:68,
    ht:342
};
let src2 = {
    age:32,
    wt:232,
    name: "aman",
    visit: "home"
}
let dest = Object.assign({}, src,src2);
// let dest = {...src};
// let dest = src;
src.age = 23;
console.log("src:", src);
console.log("dest:", dest);
