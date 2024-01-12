import React from "react";
import CommentList from "./CommentList";
const commentData = [
  {
    name: "Alice",
    text: "Just watched the trailer for the upcoming movie 'Starlight Odyssey.' The visuals are stunning, and I can't wait to see it on the big screen!",
    replies: [
      {
        name: "Bob",
        text: "Totally agree, Alice! The special effects look top-notch. I'm particularly excited about the space scenes. Did you catch that epic spaceship battle?",
        replies: [
          {
            name: "Charlie",
            text: "Yes, Bob! The spaceship battle was mind-blowing. I'm also curious about the storyline. Any insights on that?",
          },
          {
            name: "David",
            text: "I heard it's a sci-fi adventure with a twist. Can't wait to see how the plot unfolds!",
          },
        ],
      },
      {
        name: "Eve",
        text: "The movie seems like a visual masterpiece! I'm hoping the storyline lives up to the trailer. Fingers crossed!",
        replies: [
          {
            name: "Frank",
            text: "Absolutely, Eve! Trailers can be deceiving, but I'm optimistic about 'Starlight Odyssey.' Let's hope for an unforgettable cinematic experience!",
          },
        ],
      },
    ],
  },
  {
    name: "Grace",
    text: "Recently watched 'Midnight Whispers' and was blown away by the suspense. The unexpected plot twists kept me on the edge of my seat!",
    replies: [
      {
        name: "Harry",
        text: "Oh, I've heard great things about 'Midnight Whispers.' How's the cinematography?",
      },
      {
        name: "Ivy",
        text: "The cinematography is fantastic, Harry! The use of shadows adds to the mystery. Plus, the soundtrack is hauntingly beautiful.",
      },
      {
        name: "Jack",
        text: "Planning to watch 'Midnight Whispers' this weekend. Thanks for the recommendation, Grace! I hope it lives up to the hype.",
        replies: [
          {
            name: "Karen",
            text: "Let me know how it goes, Jack! I'm always on the lookout for a good thriller.",
          },
        ],
      },
    ],
  },
  {
    name: "Leo",
    text: "Checked out the latest video essay on film editing techniques. It provided some fascinating insights into how editing can impact storytelling!",
    replies: [
      {
        name: "Mia",
        text: "Sounds interesting, Leo! Do you have a link to the video essay? I'd love to learn more about film editing.",
      },
      {
        name: "Noah",
        text: "I'm always looking for resources to enhance my filmmaking skills. Thanks for the heads up, Leo!",
      },
      {
        name: "Olivia",
        text: "I watched a similar video recently, and it completely changed how I view movies. The art of editing is truly powerful!",
        replies: [
          {
            name: "Peter",
            text: "Agreed, Olivia! It's amazing how the pacing and rhythm of a film can be shaped by skillful editing.",
          },
        ],
      },
    ],
  },
];

const CommentContainer = () => {
  return (
    <div className="m-4 p-2">
      <h1 className="text-xl font-bold">Comments :</h1>
      {/* <Comment data={commentData[0]}/> */}
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentContainer;
