var models = require('../model');


exports.view = function(req, res) {

    models.Message
    .find()
    .sort('-date')
    .exec(displayPosts);

    function displayPosts(err,blog_posts) {
      var data = {posts: blog_posts};
      /*
        {
            "data": [....  // blog_posts]
        }
      */
      res.render("index", data);
      console.log('BLOG POSTS', blog_posts);
    }
}
