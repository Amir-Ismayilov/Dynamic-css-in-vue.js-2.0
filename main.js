new Vue({
    el : "#app",
    data : {
        attachedClass : false,
        color : "",
    },
    computed : {
        divClass : function() {
            return {
                yellow: this.attachedClass,
                blue: !this.attachedClass
            }
        }
    }
})


new Vue({
    el : "#app2",
    data : {
        color : "green",
        height: 100
    },
    computed : {
        customStyle : function() {
            return {
                backgroundColor: this.color,
                height: this.height + "px"
            }
        }
    }
})