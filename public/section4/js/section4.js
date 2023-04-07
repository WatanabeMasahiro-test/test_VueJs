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
        template: '<p>こんにちは</p>',
    }).mount('#comp');


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
            name     : '渡辺 サブ郎',
        }
    },
    render() {
        return Vue.h('h1', 'こんにちは、' + this.name);
    },
    methods     : {
    }
}).mount('#app4');


const vm5 = Vue.createApp({
    data() {
        return {
            name : '渡辺 英五郎',
        }
    },
    beforeCreate()  {
        return console.log('beforeCreate');
    },
    create()  {
        return console.log('created');
    },
    beforeMount()  {
        return console.log('beforeMount');
    },
    mounted()  {
        return console.log('mounted');
    },
    beforeUpdate()  {
        return console.log('beforeUpdate');
    },
    updated()  {
        return console.log('updated');
    },
    /**
     * Vue3で、beforeDestroyとdestroyedは使えない
     */
    // beforeDestroy()  {
    //     return console.log('beforeDestroy');
    // },
    // destroyed()  {
    //     return console.log('destroyed');
    // },
    methods     : {
        nameChange : function() {
            this.name = "名無しに変更した";
        },
        // destroy     : function() {
        //     this.$unmounted();
        // }
    }
}).mount('#app5');
