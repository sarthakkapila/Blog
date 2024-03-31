interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Motion',
    description: `🚀 Motion a Notion-like app built with Next.js, Tailwind CSS, TypeScript, Convex, & Clerk! Publish your notes effortlessly.
    Github:- https://github.com/sarthakkapila/Notionclone`,
    imgSrc: '/static/images/Motion.png',
    href: 'https://notionclone-ivory.vercel.app/',
  },
  {
    title: 'BareBonesAI',
    description: `"BarebonesAI" conveys deep learning using minimal or basic, stripped down to its essential components by using fundamental building
     blocks, without the additional layers of abstraction provided by different frameworks like PyTorch or TensorFlow. Everything is made from scratch, including 
     the backpropagation engine :)`,
    imgSrc: '/static/images/Barebones.jpeg',
    href: 'https://github.com/sarthakkapila/BareBonesAI',
  },
  {
    title: 'Tic Tac Toe AI',
    description: `"The Tic Tac Toe Player is a Python-based implementation of the classic Tic Tac Toe game. It features a robust computer AI that uses the minimax algorithm to provide challenging gameplay.

    `,
    imgSrc: '/static/images/minimax.jpg',
    href: 'https://github.com/sarthakkapila/Tic-Tac_Toe_AI',
  },
  {
    title: 'AntiqueScan',
    description: `"Coming soooon ....

    `,
    imgSrc: '/static/images/Page1.jpeg',
    href: 'https://github.com/sarthakkapila/AntiqueScan',
  },
]

export default projectsData
