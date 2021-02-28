// ES5
let list = {
    category: 'phone',
    names: ['iPhone 6', 'iPhone 7', 'iPhone 8'],
    call: function() {
        var self = this;
        this.names.map(function(name) {
            console.log(`${self.category} ${name}`);
        })
    }
}
list.call();

//ES6
let list = {
    category: 'phone',
    names: ['iPhone 6', 'iPhone 7', 'iPhone 8'],
    call: function() {
        this.names.map((name) => {
            console.log(`${this.category} ${name}`);
        })
    }
}
list.call();