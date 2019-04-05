module.exports = {
    numList: [],
    store: function(num) {
        this.numList.push(num);
    },
    sort: function() {
        this.numList.sort(function(a, b) {
            return a - b;
        });
        console.log(this.numList);   
    }
  };

  