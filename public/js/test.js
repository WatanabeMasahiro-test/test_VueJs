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
            message: 'HelloWorld!'
        }
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
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