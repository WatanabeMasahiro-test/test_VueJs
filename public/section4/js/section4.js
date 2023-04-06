$(function() {
    var undefined;

    f_test();

    function f_test() {
		// alert('TESTのアラーム');
        return false;
	}

});


/*** Vue.jsの記述 ***/
const vm1 =  Vue.createApp({
    data() {
        return {
            msg    : 'HELLO',
        }
    },
    methods: {
    }
}).mount('#app');

// vm1.msg = 'CHANGE!!!';


const vm2 = Vue.createApp({
    data() {
        return {
            msg     : 'HELLO AGAIN',
            bool    : false,
        }
    },
    methods: {
        changeMsg : function() {
            this.bool = !this.bool;
            if(this.bool == true) {
                vm1.msg = 'メッセージの変更'; // thisとの違いに注意
            } else {
                vm1.msg = 'HELLO';         // thisとの違いに注意
            }
        }
    }
}).mount('#app2');

// console.log(vm2);
// console.log(vm2.msg);
// console.log(vm2.$data);


const vm3 = Vue.createApp({
    data() {
        return {
            name     : '渡辺 太郎',
        }
    },
    template    : '<h1>こんにちは、{{ name }}</h1>',
    methods     : {
    }
}).mount('#app3');


const vm4 = Vue.createApp({
    data() {
        return {
            name     : '渡辺 太郎',
        }
    },
    render() {
        return Vue.h('h1', 'こんにちは、' + this.name);
    },
    methods     : {
    }
}).mount('#app4');

var dir = document.createElement('div');