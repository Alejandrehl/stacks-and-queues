let StackExample = function() {
    this.storage = "";
};

StackExample.prototype.push = function(val) {
    this.storage = this.storage.concat("***", val);
};

StackExample.prototype.pop = function() {
    // Slice off the last characters up until ***
    let str = this.storage.slice(this.storage.lastIndexOf("***") + 3);
    // Updating the new stack without the last item
    this.storage = this.storage.substr(0, this.storage.lastIndexOf("***"));
    // Return the last item
    console.log(str);
    return str;
};

StackExample.prototype.size = function() {

};

let myWeeklyMenu= new StackExample();
myWeeklyMenu.push("Red Beans");
myWeeklyMenu.push("Bananas");
myWeeklyMenu.push("Sandwiches");
myWeeklyMenu.push("Junk Food");

myWeeklyMenu.pop();

