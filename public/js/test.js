$(function() {
    var undefined;

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
            ok      : true,
        }
    },
    methods: {
        reverseMessage  : function() {
            this.message = this.message.split('').reverse().join('');
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
            twitterObj  : {
                    href    : 'https://twitter.com',
                    id      : 31,
            }
        }
    },
    methods: {}
}
Vue.createApp(app2).mount('#app2');

const app3 = {
    data() {
        return {
            number  : 0,
            x       : 0,
            y       : 0,
        }
    },
    methods: {
        counter             : function(multiple) {
            console.log(multiple);
            if(multiple === undefined) {
                this.number++;
            } else {
                this.number += 1 * multiple;
            }
        },
        changeMousePosition : function(event, divideNumber) {
            // console.log(event);
            if(divideNumber === undefined || !(Number.isInteger(divideNumber))) {
                this.x = event.clientX;
                this.y = event.clientY;
            } else {
                this.x = event.clientX / divideNumber;
                this.y = event.clientY / divideNumber;
            }
        },
        myAlert             : function() {
            alert('アラート!');
        }
    }
}
Vue.createApp(app3).mount('#app3');

const app4 = {
    data() {
        return {
            number  : 0,
            event   : 'click',
        }
    },
    methods: {
        counter             : function(multiple) {
            if(multiple === undefined) {
                this.number++;
            } else {
                this.number += 1 * multiple;
            }
        },
    }
}
Vue.createApp(app4).mount('#app4');

const app5 = {
    data() {
        return {
            message : 'こんにちは',
            counter     : 0,
            otherCounter: 0,
        }
    },
    computed: {
        lessThanThree_Computed  : function() {
            console.log('computed');
            return this.counter > 3 ? '3よりも上' : '3以下'
        }
    },
    methods: {
        lessThanFive_Method     : function() {
            console.log('methods');
            return  this.counter > 5 ? '5よりも上' : '5以下'
        }
    },
}
Vue.createApp(app5).mount('#app5');


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