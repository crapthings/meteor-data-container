### installation

    meteor npm i lodash react-komposer --save

    meteor add crapthings:meteor-data-container

### how to use

    Meteor.isServer && Meteor.publish('posts', function () {
      return Posts.find()
    })

    <!-- "subscriptions" is an object. key of subscriptions is the subscribe name, and value should be an array that apply to publish args -->

    const subscriptions = {
      posts: []
    }

    const data = {
      posts () {
        return Posts.find().fetch()
      }
    }

    <MeteorDataContainer sources={{ subscriptions, data }} options={{ cache: false }} component={({ posts }) => <ul>
      {posts.map(post => <li>
        {post.title}
      </li>)}
    </ul>} />
