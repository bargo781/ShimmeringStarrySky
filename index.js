// 获取画布
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.body.appendChild(canvas);

// 设置画布大小
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 定义星星数组
const stars = [];

// 创建星星对象
class Star {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 3;
    this.speed = Math.random() * 0.2;
  }

  // 绘制星星
  draw() {
    ctx.fillStyle = 'white';
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }

  // 更新星星位置
  update() {
    this.x += this.speed;
    if (this.x > canvas.width) {
      this.x = 0;
      this.y = Math.random() * canvas.height;
    }
  }
}

// 创建星星并加入数组
for (let i = 0; i < 100; i++) {
  stars.push(new Star());
}

// 动画循环
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 更新并绘制每颗星星
  stars.forEach(star => {
    star.update();
    star.draw();
  });
}

// 开始动画
animate();
