function Food() {
    this.x = 0;
    this.y = 0;
    this.type = foodTypes[0];

    this.newLocation = function(){
        let cols = floor(width / scale);
        let rows = floor(height / scale);
        this.x = floor(random(cols)) * scale;
        this.y = floor(random(rows)) * scale;
        this.type = random(foodTypes);
    };

    this.getLocation = function() {
        return createVector(this.x,this.y);
    };

    this.getX = function(){
        return this.x;
    };
    this.getColour = function(){
        return this.type[1];
    }

    this.getY = function(){
        return this.y;
    };
}