### installation

    meteor npm i lodash react-komposer --save

    meteor add crapthings:meteor-data-container

### how to use

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
