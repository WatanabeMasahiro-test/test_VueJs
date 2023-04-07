$(function() {
    var undefined;

    f_test();

    function f_test() {
		// alert('TESTのアラーム');
        return false;
	}

});


/*** Vue.jsの記述 ***/

// Vue.createApp({
//     }).component('hello', {
//         template: '<p>こんにちは</p>',
//     }).mount('#comp');


const vm1 =  Vue.createApp({
    // data() {
    //     return {
    //         msg    : 'HELLO',
    //     }
    // },
    data: () => ({
        msg    : 'HELLO',
    }),
    methods: {
    }
}).mount('#app');