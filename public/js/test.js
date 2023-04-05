$(function() {

    f_test();

    function f_test() {
		// alert('TESTのアラーム');
        return false;
	}




});

/*** Vue.jsの記述 ***/
const app = {
    data() {
        return {
            message : 'HelloWorld!',
            message2: 'HELLO',
            ok      : true
        }
    },
    methods: {
        reverseMessage  : function() {
            this.message = this.message.split('').reverse().join('')
        },
        sayHi           : function() {
            return 'Hi!!!';
        },
        returnMsg       : function() {
            this.message2 = 'HelloVueJS';
            return this.message2 + '___' + this.sayHi();
        }
    }
}
Vue.createApp(app).mount('#app');


// new Vue({
//     el: '#app',
//     data: {
//         message: 'HelloWorld'
//     }
// })


// const app = {
// 	data() {
// 		return {
// 			Photos: []
// 		}
// 	},
// 	created: function() {
// 		var self = this;
// 		$.getJSON('https://h2o-space.com/htmlbook/images.php', function(data) {
// 			self.Photos = data;
// 		});
// 	}
// }
// Vue.createApp(app).mount('#img_unit');