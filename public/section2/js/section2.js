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
            bool    : true,
            oddEvenBool: false,
            counter : 0,
        }
    },
    methods: {
        boolSwitching       : function() {
            this.bool = !this.bool;
            this.counter++;
            if(this.counter % 2 == 1 && this.counter % 3 != 0) {
                this.oddEvenBool = true;
            } else if(this.counter % 3 == 0) {
                this.oddEvenBool = false;
            } else {
                this.oddEvenBool = false;
            }
        }
    }
}
Vue.createApp(app).mount('#app');


const app2 = {
    data() {
        return {
            bool    : true,
        }
    },
    methods: {
        boolSwitching2       : function() {
            this.bool = !this.bool;
        }
    }
}
Vue.createApp(app2).mount('#app2');


const app3 = {
    data() {
        return {
            fruits  : ['りんご', 'バナナ', 'ぶどう'],
            obj     : {
                firstName   : '太郎',
                lastName    : '田中',
                age         : 21
            },
            arrayObj: [
                {
                    firstName   : '太郎',
                    lastName    : '田中',
                    age         : 21
                },
                {
                    firstName   : '太一',
                    lastName    : '山田',
                    age         : 32
                },
                {
                    firstName   : '吾郎',
                    lastName    : '設楽',
                    age         : 44
                },
            ]
        }
    },
    methods: {
        remove : function() {
            this.arrayObj.shift();
        }
    }
}
Vue.createApp(app3).mount('#app3');