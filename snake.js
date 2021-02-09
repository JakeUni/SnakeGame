function Snake() {
    this.x = 300;
    this.y = 300;
    this.xspeed = 0;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];

    this.eat = function(pos) {
        let d = dist(this.x, this.y, pos.x, pos.y);
        if (d < 1) {
            this.total++;
            return true;
        } else {
            return false;
        }
    };

    this.dir = function(x, y) {
        this.xspeed = x;
        this.yspeed = y;
        moved = true;
    };
    this.getDir = function(){
        if ((this.xspeed === 0) && (this.yspeed === -1)) {
            return('up');
        } else if ((this.xspeed === 0) && (this.yspeed === 1)){
            return('down');
        } else if ((this.xspeed === 1) && (this.yspeed === 0)){
            return('right');
        } else if ((this.xspeed === -1) && (this.yspeed === 0)){
            return('left');
        }
    }
    this.death = function() {
        for (let i = 0; i < this.tail.length; i++) {
            let pos = this.tail[i];
            let d = dist(this.x, this.y, pos.x, pos.y);
            if (d < 1) {
                console.log('starting over');
                const scoreVal = parseInt(scoreElem.html().substring(8));
                highScoreElem.html('');
                scoreElem.html('Game ended! Your score was : ' + scoreVal);
                wasDead = 1;
                this.x = 300;
                this.y = 300;
                this.xspeed = 0;
                this.yspeed = 0;
                this.total = 0;
                this.tail = [];
            }
        }
    };

    this.update = function() {
        for (let i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1];
        }
        if (this.total >= 1) {
            this.tail[this.total - 1] = createVector(this.x, this.y);
        }

        this.x = this.x + this.xspeed * scale;
        this.y = this.y + this.yspeed * scale;

        this.x = constrain(this.x, 0, width - scale);
        this.y = constrain(this.y, 0, height - scale);
    };

    this.show = function() {
        fill(255);
        for (let i = 0; i < this.tail.length; i++) {
            rect(this.tail[i].x, this.tail[i].y, scale, scale);
        }
        rect(this.x, this.y, scale, scale);
    };
}