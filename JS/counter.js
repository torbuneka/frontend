function f10(){
    f10.counter = 0;
    f10.counter = f10.counter ? f10.counter : 0;
    return function(){
        return ++f10.counter;
    }
}

var a = f10();
a();
1
a();
2
a();
3
a();
4
a();
5
a();
6