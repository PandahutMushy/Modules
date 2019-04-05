var sortModule = require("./modulesort");
var numList = [4, 15, 1, 3, 10];

for (var num of numList)
    sortModule.store(num);

sortModule.sort();