let Stack = function() {
    this.storage = "";
};

Stack.prototype.push = function(val) {
    this.storage = this.storage.concat("***", val);
};

Stack.prototype.pop = function() {
    // Slice off the last characters up until ***
    let str = this.storage.slice(this.storage.lastIndexOf("***") + 3);
    // Updating the new stack without the last item
    this.storage = this.storage.substr(0, this.storage.lastIndexOf("***"));
    // Return the last item
    console.log(str);
    return str;
};

Stack.prototype.size = function() {

};

let myWeeklyMenu= new Stack();
myWeeklyMenu.push("Red Beans");
myWeeklyMenu.push("Bananas");
myWeeklyMenu.push("Sandwiches");
myWeeklyMenu.push("Junk Food");

myWeeklyMenu.pop();

