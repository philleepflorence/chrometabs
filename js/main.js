
var App = {

  el: elements,

  getObjectKeys: function(obj) {
    // Returns the object's keys as an array
    return Object.keys(obj);
  },

  getRandomElement: function(obj) {
    // Returns a random element from the elements object
    var objectKeys = this.getObjectKeys(obj);
    var randomPropertyName = objectKeys[ Math.floor(Math.random() * objectKeys.length) ];
    return this.el[randomPropertyName];
  },

  updateUI: function() {

    // Since we're not using templating engine - I added this
    // helper function to handle cases where the element's value
    // is an array - maybe we should use a templating solution?
    function looper(arr) {
      var html = '';
      for (x in arr) {
        html += arr[x] + '<br />'
      }
      return html;
    }

    var data = this.getRandomElement(this.el);

    // Update the view, again since we don't have templating
    // I'm doing this the ol' fashioned way...
    var title       = document.getElementById('title'),
        description = document.getElementById('description'),
        links       = document.getElementById('links'),
        didYouKnow  = document.getElementById('did-you-know');

    title.innerHTML       = data.title               || 'Default Title';
    description.innerHTML = data.description         || 'Default Description';
    links.innerHTML       = looper(data.links)       || 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5';
    didYouKnow.innerHTML  = looper(data.disclaimer)  || 'HTML is used to render every web page you\'ve ever seen!';
  }

}

// Run the updateUI method on page load
App.updateUI();




