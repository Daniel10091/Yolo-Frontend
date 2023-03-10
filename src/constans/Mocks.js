const Profile = {

}

const Users = [
  {
    id: 1,
    avatar: 'https://yolo-api-9a3967.netlify.app/Users/person-male-2.jpg',
    name: 'Daniel',
    username: 'daniel10091',
    email: 'daniel@doe.com',
    password: '123',
    role: 'user'
  },
  {
    id: 2,
    avatar: 'https://yolo-api-9a3967.netlify.app/Users/person-male-1.jpg',
    name: 'Flávio',
    username: 'flávioo',
    email: 'flavio@doe.com',
    password: '123',
    role: 'user'
  },
  {
    id: 3,
    avatar: 'https://yolo-api-9a3967.netlify.app/Users/person-female-2.jpg',
    name: 'Alicie',
    username: 'alicie_046',
    email: 'alicie@doe.com',
    password: '123',
    role: 'user'
  },
  {
    id: 4,
    avatar: 'https://yolo-api-9a3967.netlify.app/Users/person-female-4.jpg',
    name: 'Thalita',
    username: 'thalita_leo',
    email:'thalita@doe.com',
    password: '123',
    role: 'user'
  },
  {
    id: 5,
    avatar: 'https://yolo-api-9a3967.netlify.app/Users/person-male-5.jpg',
    name: 'Alex',
    username: 'alexona',
    email:'alex@doe.com',
    password: '123',
    role: 'user'
  },
  {
    id: 6,
    avatar: 'https://yolo-api-9a3967.netlify.app/Users/person-male-3.jpg',
    name: 'Lucas',
    username: 'luke',
    email:'lucas@doe.com',
    password: '123',
    role: 'user'
  },
  {
    id: 7,
    avatar: 'https://yolo-api-9a3967.netlify.app/Users/person-female-14.jpg',
    name: 'Lisa',
    username: 'lisa_123',
    email:'lisa@doe.com',
    password: '123',
    role: 'user'
  }
]

const Posts = [
  {
    id: 1,
    title: 'Post 1',
    content: 'https://yolo-api-9a3967.netlify.app/Users/person-female-11.jpg',
    description: 'Lorem ipsum dolor sit amet❤️',
    userId: 7,
    user: Users[0],
    likes: [
      {
        id: 1,
      },
      {
        id: 3,
      },
    ],
    comments: [
      {
        id: 1,
        content: 'Lorem ipsum dolor sit amet',
        userId: 2,
        user: Users[0]
      }
    ]
  },
  {
    id: 2,
    title: 'Post 2',
    content: 'https://yolo-api-9a3967.netlify.app/Users/person-female-2.jpg',
    description: 'Lorem ipsum dolor sit amet❤️ Lorem ipsum dolor sit amet',
    userId: 3,
    user: Users[0],
    likes: [
      {
        id: 1,
      },
      {
        id: 3,
      },
    ],
    comments: [
      {
        id: 1,
        content: 'Lorem ipsum dolor sit amet',
        userId: 2,
        user: Users[0]
      }
    ]
  },
]

export {
  Profile,
  Users,
  Posts
}