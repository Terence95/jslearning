//        声明Animal对象构造器
        function Animal() {}
        Animal.prototype = {
          name:'animal',
          weight:0,
          eat:function () {
            alert('animal is eating!');
          }
        }
        
//        声明Mammal对象构造器
        function Mammal() {
          this.name = 'Mammal';
        }
        
//        指定Mammal对象的原型为一个Animal对象
//        创建Mammal对象和Animal对象之间的原型链
        Mammal.prototype = new Animal();
//        声明horse 对象构造器
        function Horse(height,weight) {
           this.name = 'horse';
           this.height = height;
           this.weight = weight;
        }
//        将horse对象的原型指定为一个Mamal对象，继续构建Horse 与  Mammal 之间的原型链
        Horse.prototype = new Mammal();
//        重新指定 eat 方法，此方法覆盖从Animal原型继承过来的 eat 方法
        Horse.prototype.eat = function () {
          alert('Horse is eating grass');
        }
        
        var horse = new Horse(100,300);
        console.log(horse.__proto__ === Horse.prototype); //true
        console.log(Horse.prototype.__proto__ === Mammal.prototype); //true
        console.log(Mammal.prototype.__proto__ === Animal.prototype); //true