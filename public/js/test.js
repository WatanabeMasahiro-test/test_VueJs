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

const app2 = {
    data() {
        return {
            html_1      : '<h1>h1タグです</h1>',
            urlGoogle   : 'https://google.com',
            urlTwitter  : 'https://twitter.com',
            idNumber      : 31,
            attribute   : 'href',
            teitterObj  : {
                    href    : 'https://twitter.com',
                    id      : 31
            }
        }
    },
    methods: {}
}
Vue.createApp(app2).mount('#app2');

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