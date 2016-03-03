# Ember-imdt-magic-crud
This Ember Addon is a utility for simplifying the adition of simple CRUD (Create, Read, Update and Delete) functionality to ember projects.

## Dependencies
In order for this addon to work it will have to install it's required addons to your host application, but don't worry, they are just for displaying information and validation.

### Pages
* [Ember-imdt-table - Table component](https://www.npmjs.com/package/ember-imdt-table)
* [Ember-validations - Form validation](https://github.com/dockyard/ember-validations)
* [Ember-bootstrap-switch - Bootstrap switch](https://github.com/Panman8201/ember-bootstrap-switch)
* [Ember-selectize - multi select (will soon be fully replaced for ember-power-select)](https://github.com/miguelcobain/ember-cli-selectize)
* [Ember-power-select - Select component](https://github.com/cibernox/ember-power-select)

## Setting up your magic-cruds

### The Blueprint
After you have everything installed and ready to go, it is time to start coding.
in order to create a magic-crud you can use the blueprint that we provide like this: `ember generate magic-crud <resource name>`, this will create the routes, and the controller you need in order for the crud to work, after this you will only need
to set the crud settings in your generated controller and create the routes in the router.

### The Router
Now all you need to do is set the routes in your router. In your router you can use the `magicRouteMapper`, this will create the `index`, `new`, `edit` and `show` routes in your router in a single line of code. here is an example.

```javascript
// router.js
import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

const MagicRouter = MagicRouteMapper.create();

Router.map(function() {
  MagicRouter.map(this, 'person');
  MagicRouter.map(this, 'city');
  MagicRouter.map(this, 'country');
});

export default Router;
```

### The Base route Route
If you used the blueprint this is the root route of the resource you have created. It already has some commented code to help you visualize what you want to end up with.
Here is where most of the magic is set to happen. In the route you set the table and form options. You only need to set these in one route for each resource, the magic-crud will set the other routes automatically for you.

The table options are set just like the [`ember-imdt-table`](https://www.npmjs.com/package/ember-imdt-table) addon you can see details there.

#### Form definitions
The form definitions is where you set the form inputs.
The supported input types are:
 - text
 - password
 - checkbox
 - switch
 - select
 - multiselect
 - textarea

#### Validations
The validations use [`ember-validations`](https://github.com/dockyard/ember-validations), the only difference being that we set the validations in the form definitions.

```javascript
import Ember from 'ember';
import MagicIndexRoute from 'ember-imdt-magic-crud/mixins/magic-index-route';

const{
  A
} = Ember;

export default Ember.Route.extend(MagicIndexRoute, {
  MagicCrud:{
    options: {
      tableTitle: "City",
      crudTitle: "City CRUD"
    },

    table: {
      sortProperties: new A(['nome:asc']),
      columns: new A([{
        contentPath: 'id',
        columnTitle: '#'
      }, {
        contentPath: 'name',
        columnTitle: 'Name'
      }, {
        contentPath: 'country.name',
        columnTitle: 'Country'
      }, {
        contentPath: 'active',
        columnTitle: 'Active'
      }, {
        contentPath: 'template',
        columnTitle: 'Actions',
        template: 'custom/table-actions',
        isSortable: false
      }]),
    },

    form: [{
      attribute: 'model.active',
      type: 'switch',
    }, {
      attribute: 'model.country',
      label: 'Country',
      type: 'select',
      selectFunction: function(self) {
        return self.store.peekAll('country').filter((c) => {
          return c.get('active') || c.get('id') === self.get('model.country.id');
        });
      },
      selectValuePath: 'id',
      selectLabelPath: 'name'
    }, {
      attribute: 'model.name',
      label: 'Name',
      type: 'text',
      validations: {
        presence: true,
      }
    }, {
      attribute: 'model.description',
      label: 'Description',
      type: 'textarea',
      validations: {
        presence: true,
      }
    }]
  }
});
```

Thats it, any questions or suggestions are welcome as this is a very early stage addon.
