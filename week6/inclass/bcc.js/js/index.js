$(function() {
  // ColorChanger Model
  var ColorChanger = Backbone.Model.extend({
    defaults: function() {
      var randomColor = function() {
        return "#"+("000"+(Math.random()*(1<<24)|0).toString(16)).substr(-6); // 0009f7
      };
      return {
        foreground: randomColor(),
        background: randomColor()
      };
    }
  });

  // ColorChanger Collection
  var ColorChangerList = Backbone.Collection.extend({
    model: ColorChanger
  });

  var ColorChangers = new ColorChangerList();

  // ColorChanger View
  var ColorChangerView = Backbone.View.extend({
    tagName: "div",
    template: _.template($("#color-template").html()),
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },
    initialize: function() {
      this.listenTo(this.model, "change", this.update);
      this.listenTo(this.model, "destroy", this.remove);
    },
    events: {
      "keyup .fg": "store",
      "keyup .bg": "store",
      "click .remove": "clear"
    },
    store: function(e) {
      var $target = $(e.target);
      var prop = $target.is(".fg") ? "foreground" : "background";
      this.model.set(prop, $target.val());
    },
    update: function() {
        this.$(".color-changer").css({
          background: this.model.get("background"),
          color: this.model.get("foreground")
        });
    },
    clear: function() {
      this.model.destroy();
    }
  });

  // AppView
  var AppView = Backbone.View.extend({
    el: $(".container"),
    events: {
      "click .add": "create"
    },
    initialize: function() {
      this.listenTo(ColorChangers, 'add', this.add);
      this.listenTo(ColorChangers, 'add remove', this.render);
    },
    add: function(colorChanger) {
      var view = new ColorChangerView({model: colorChanger });
      this.$(".changers").append(view.render().el);
    },
    create: function() {
      console.log("Created!");
      ColorChangers.create();
    },
    render: function(colorChanger) {
      this.$(".summary").text(colorChanger.collection.length);
    }
  });

  var App = new AppView();

  Backbone.sync = function() {};
});
















