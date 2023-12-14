class Enemy{
    constructor(){
        this.sprite = createSprite(
            width + 50,
            random(height / 2 + 100, height - 100)
          );
          this.sprite.addAnimation("enemyAni", enemyAni);
          this.sprite.velocityX = -0.5
          this.sprite.scale = 3;
          this.life = 10;
          
    }

}