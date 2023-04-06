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
                vm1.msg = 'メッセージの変更';
            } else {
                vm1.msg = 'HELLO';
            }
        }
    }
}).mount('#app2');