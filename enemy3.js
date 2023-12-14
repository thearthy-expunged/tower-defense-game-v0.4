class Enemy3{
    
    constructor(){
        this.sprite = createSprite(
            width + 50,
            random(height / 2 + 100, height - 100)
          );
          this.sprite.velocityX = -1;
          this.sprite.addAnimation("enemy3Ani", enemy3Ani);
          this.speed = "fast"
          this.sprite.scale = 3;
          this.life = 200;
          
    }

}