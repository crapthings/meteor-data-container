### installation

    meteor npm i lodash react-komposer --save

    meteor add crapthings:meteor-data-container

### how to use

#### example1 subscribe a collection publication that return all posts

> publish posts on server

    Meteor.publish('posts', function () {
      return Posts.find()
    })

> use meteor data container to get reactive data source.

> "subscriptions" is an object. each of keys in subscriptions is the subscribe name, and value should be an array that apply as publish args

    const subscriptions = {
      posts: [] // empty array that means no publish args
    }

> "data" is an object, each of keys can be use in container under props

    const data = {
      posts () { // this posts is your container props
        return Posts.find().fetch()
      }
    }

> your container component looks like

    <MeteorDataContainer sources={{ subscriptions, data }} component={({ posts }) => <ul>
      {posts.map(post => <li>
        {post.title}
      </li>)}
    </ul>} />
