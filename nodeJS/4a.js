var fs = require('fs');
var request = require('request');
var async = require('async');
var pathFront = "./images/";
var pathExtention = '.jpg';
var imgURL = {
  'img1': "http://sousmonarbre.com/qphj/bd963843d2239ed78aa6f7b0a36b537d/qdp/shapely-table-mat-design-office-bay-decoration-mes-at-work-decorating-ideas-office-decoration-mes-design-ideas-cream-wall-paint-decoration-messroom-wooden-laminate-ing-tosca-color__office-decorating-ideas.jpg",
  'img2': "https://doodleart.redbull.com/assets/managed/entries/processed/sm/367010617181759_36211000.jpg",
  'img3': "https://www.justcolor.net/wp-content/uploads/sites/1/nggallery/doodle-art-doodling/coloring-page-adults-doodle-art-rachel.jpg",
  'img4': "https://i.pinimg.com/originals/e5/55/a3/e555a39ca5457a079a9bcce59f61f8d5.jpg",
  'img5': "http://canhotopazelite.info/wp-content/uploads/2018/08/office-bay-decoration-themes-with-office-bay-decoration-themes-elegant-yet-fun-office-bay-decoration-14.jpg",
  'img6': "https://i.pinimg.com/originals/ef/4c/91/ef4c91fb73e61e19211a0589187ccaa6.jpg",
  'img7': "https://static.vecteezy.com/system/resources/previews/000/107/464/non_2x/huge-doodle-vector-pack.jpg",
  'img8': "https://i.ytimg.com/vi/O5u1apUkYV0/maxresdefault.jpg",
  'img9': "https://media.glassdoor.com/l/e9/c1/7a/84/independence-day-celebration.jpg"
};
// if (!fs.existsSync(pathToImgDir)) //if there's no img dir, create a new one.
//   fs.mkdirSync(pathToImgDir);


async.parallel(async.forEachOf(imgURL, function(value, key, callback) {

  request({
    value, encoding: 'binary'
  }, function(error, response, body) {

    fs.writeFile(pathFront + key + pathExtention, body, 'binary',
      function(err) {

        if (err) console.log("err");
        else {
          console.log(pathFront + key + pathExtention +
            " written!!");
        }
      })
    console.log("Files " + pathFront + key + pathExtention);
  })
  callback();

}));
