/**
 * Created by Администратор on 02.04.2017.
 */
'use strict';

window.renderStatistics = function(ctx, names,times) {

  /*тень облака с текстом*/
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.strokeRect(110, 20, 420, 270);
  ctx.fillRect(110, 20, 420, 270);

  /*облако с текстом*/
  ctx.fillStyle = 'white';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  /*текст в облаке*/
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, вы победили!' , 120, 40 );
  ctx.fillText('Список результатов:' , 120, 60 );


  var max = -1;

  for (var k = 0; k < times.length; k++) {
    var time = times[k];
    if (time > max) {
      max = time;
    }
  }

  var histogramHeight = 150;
  var step = histogramHeight / max;
  var barWidth = 40;
  var indent = 50;
  var initialX = 120;
  var initialY = 250;

  for (var i = 0; i < times.length; i++) {
    var height = times[i] * step;
    ctx.fillText(times[i].toFixed(0), (initialX + (barWidth + indent) * i), initialY - height - 10);  // вывод времени

      if (names[i] === 'Вы') {
        ctx.fillStyle ='rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'rgba(0, 0, 255,' + Math.random() + ')';
      }
    ctx.fillRect(initialX + (indent + barWidth) * i, initialY - height, barWidth, height);
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], initialX + (indent + barWidth) * i, initialY +18); //вывод имени
  }
};

