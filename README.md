# This documentation is old, it WILL NOT work with the current version of this addon, new documentation will come soon

# Ember Magic Crud
This Ember Addon is a utility for simplifying the adition of simple CRUD (Create, Read, Update and Delete) functionality to ember projects.

## Dependencies
In order for this addon to work it will have to install it's required addons to your host application, but don't worry, they are mostly for displaying information, the addons that will be installed with ember-imdt-magic-crud are ember-imdt-table, ember-validations, ember-bootstrap-switch, Ember-selectize.

### Pages
* [Ember-imdt-table - Table component](https://www.npmjs.com/package/ember-imdt-table)
* [Ember-validations - Form validation](https://github.com/dockyard/ember-validations)
* [Ember-bootstrap-switch - Bootstrap switch](https://github.com/Panman8201/ember-bootstrap-switch)
* [Ember-selectize - Select and multi select](https://github.com/miguelcobain/ember-cli-selectize)

## Setting up your magic-cruds

After you have everything installed and ready to go, it is time to start coding.
in order for you to have a magic crud working, you need 3 things:

1. Some data to display in the table, for instance a `Model`
2. A `Route` that mixin the `magic-route` addon's `Mixin`
3. A `Controller` with the table and form definitions

#### Here is how your `Routes` should look like:

```javascript
/* app/routes/person.js */
import Ember from 'ember';
import MagicRoute from 'ember-imdt-magic-crud/mixins/magic-route';

export default Ember.Route.extend(MagicRoute, {});

/* app/routes/person/add.js */
import Ember from 'ember';
import MagicRoute from 'ember-imdt-magic-crud/mixins/magic-route';

export default Ember.Route.extend(MagicRoute, {});

/* app/routes/person/edit.js */
import Ember from 'ember';
import MagicRoute from 'ember-imdt-magic-crud/mixins/magic-route';

export default Ember.Route.extend(MagicRoute, {});

```

#### Also, edit your router in order for the parameters to match the route

```javascript
import Ember from 'ember';

Router.map(function() {
  this.route('person', function() {
    this.route('add');
    this.route('edit', {path:'edit/:id'});
  });
});

export default Router;

```

#### Here is how your `Controller`
```javascript
/* app/routes/person.js */
import Ember from 'ember';

const{
  A
} = Ember;

export default Ember.Controller.extend({
  tableOptionsMC: new A([{
    contentPath: 'id',
    columnTitle: 'Id'
  },
  {
    contentPath: 'name',
    columnTitle: 'Name'
  },
  {
    contentPath: 'template',
    columnTitle: 'Actions',
    template: 'custom/table-actions',
    isSortable: false
  }]),

  formDefinitionsMC: [
    {
      attribute: 'model.name',
      label: 'Name',
      type: 'text',
      validations:{
        presence: true,
        length: {minimum: 3}
      }
    },
    {
   	  attribute: 'model.description',
      label: 'Description',
      type: 'text',
      validations:{
      	presence:true
      }
    }
  ]
});

```

Thats it, you have a fully functional Crud for a model.
