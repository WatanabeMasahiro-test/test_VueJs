$(function() {
    var undefined;

    f_test();

    function f_test() {
		// alert('TESTのアラーム');
        return false;
	}

});


/*** Vue.jsの記述 ***/

Vue.createApp({
    }).component('hello', {
        data: () => ({
            number    : 12345,
        }),
        template: '<p>こんにちはNO.{{ number }}'
                    + '<button @click="increment">+1</button>'
                    + '</p>',
        methods: {
            increment : function() {
                this.number++;
            }
        }
    }).mount('#comp');

// var component = {
//     data: () => ({
//         number    : 12345,
//     }),
//     template: '<p>こんにちはNO.{{ number }}'
//                 + '<button @click="increment">+1</button>'
//                 + '</p>',
//     methods: {
//         increment : function() {
//             this.number++;
//         }
//     }
// }
// Vue.createApp({}).component('hello', component).mount('#comp');


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