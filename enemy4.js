class Enemy4{
    
    constructor(){
        this.sprite = createSprite(
            width + 50,
            random(height / 2 + 100, height - 100)
          );
          
          this.sprite.velocityX = -0.25;
          this.sprite.addAnimation("enemy4Ani", enemy4Ani);
          this.sprite.addAnimation("enemy4pAni",enemy4pAni)
          this.sprite.scale = 3;
          this.life = 20;
          
    }

}