let ladder = {
    step: 0,
    up(){
        this.step++;
        return this.step;
    },
    down(){
        this.step--;
        return this.step;
    },
    showStep: function(){
        alert(this.step);
        return this;
    }
}
ladder.up().up().down().showStep().down().showStep();
