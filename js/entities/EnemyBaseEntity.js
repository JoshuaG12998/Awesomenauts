game.EnemyBaseEntity = me.Entity.extend({
	init : function(x, y, settings){
		this._super(me.Entity, 'init', [x, y, {
			//adds image
			image: "tower",
			width: 100,
			height: 100,
			spritewidth: "100",
			spriteheight: "100",
			getShape: function() {
				return (new me.Rect(0, 0, 100, 70)).toPolygon();
			}
		}]);
			//variable that say that tower is not destroyed
		this.broken = false;
		this.health = game.data.enemyBaseHealth;
		this.alwaysUpdate = true;
		//if someone runs with the tower, they will collide
		this.body.onCollision = this.onCollision.bind(this);
		
		this.type = "EnemyBaseEntity";
			//sets animation for EnemyBase
		this.renderable.addAnimation("idle", [0]);
			//burned base
		this.renderable.addAnimation("broken", [1]);
			//fixed base
		this.renderable.setCurrentAnimation("idle");
	},

	update:function(delta) {
		//if health is below 0, then you should die
		if(this.health<=0){
			this.broken = true;
		//renders broken animation
			this.renderable.setCurrentAnimation("broken");
		}
		this.body.update(delta);

	this._super(me.Entity, "update", [delta]);
	return true;
	},

	onCollision: function(){
		
	},
	//loss of health
	loseHealth: function(){
		this.health--;
	}

});