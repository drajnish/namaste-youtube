import React from 'react';

const commentsData = [
  {
    name: 'Akshay Saini',
    text: 'I love namaste React',
    replies: [
      {
        name: 'Rajnish Deshmukh',
        text: 'I love namaste Javascript',
        replies: [
          {
            name: 'Rajnish Deshmukh',
            text: 'I love namaste Javascript',
            replies: [],
          },
          {
            name: 'Rajnish Deshmukh',
            text: 'I love namaste Javascript',
            replies: [
              {
                name: 'Rajnish Deshmukh',
                text: 'I love namaste Javascript',
                replies: [
                  {
                    name: 'Rajnish Deshmukh',
                    text: 'I love namaste Javascript',
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Chetan nada',
        text: 'I love namaste DSA',
        replies: [],
      },
      {
        name: 'Naufil',
        text: 'I love namaste Browser',
        replies: [],
      },
    ],
  },
  {
    name: 'Akshay Saini',
    text: 'I love namaste React',
    replies: [
      {
        name: 'Rajnish Deshmukh',
        text: 'I love namaste Javascript',
        replies: [],
      },
      {
        name: 'Chetan nada',
        text: 'I love namaste DSA',
        replies: [],
      },
      {
        name: 'Chetan nada',
        text: 'I love namaste Browser',
        replies: [],
      },
    ],
  },
  {
    name: 'Akshay Saini',
    text: 'I love namaste React',
    replies: [
      {
        name: 'Rajnish Deshmukh',
        text: 'I love namaste Javascript',
        replies: [],
      },
      {
        name: 'Chetan nada',
        text: 'I love namaste DSA',
        replies: [],
      },
      {
        name: 'Chetan nada',
        text: 'I love namaste Browser',
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 my-2 rounded-lg">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQavCDvlRFf6Y1gcbHAoYvLDWSjR6GFpI1sYErd3F8&s"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
