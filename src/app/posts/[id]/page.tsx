

import React from 'react';
import CommentSection from '@/components/commentsSection';
import AuthorCard from '@/components/authorcard';

import Image from 'next/image';

const posts = [
  { id: '1', title: 'Static Resume', description: 'Simple Static Resume built using HTML & CSS.', image: '/images/projectt1.png' },
  { id: '2', title: 'Shareable Resume Builder', description: 'Shareable Resume builder using HTML, CSS & Typescript.', image: '/images/projectt2.png' },
  { id: '3', title: 'Governor Initiative Website', description: 'The Governor House Initiative website clone developed using Next.js and Tailwind CSS.', image: '/images/governorweb.webp' },
  { id: '4', title: 'Amazon Website Clone', description: 'Amazon website clone developed using HTML and CSS.', image: '/images/project4.png' },
  { id: '5', title: 'Portfolio', description: 'Portfolio built using Next.js and Tailwind CSS.', image: '/images/project5.png' },
  { id: '6', title: 'Portfolio', description: 'Portfolio built using Next.js and custom CSS.', image: '/images/Screenshot 2025-01-02 184713.png' },
];

interface PostProps {
  params: {
    id: string;
  };
}

export default function Post({ params }: PostProps) {
  const { id } = params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <h2 className="text-2xl font-bold text-center mt-10">Post Not Found</h2>;
  }

  const renderParagraphs = (description: string) => {
    return description.split('\n').map((para, index) => (
      <p key={index} className="mt-4 text-justify">{para.trim()}</p>
    ));
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="md:text-4xl text-3xl font-bold text-red-600 text-center">{post.title}</h1>
      {post.image && (
        <Image
          src={post.image}
          alt={`Image for ${post.title}`}
          className="w-full h-auto rounded-md mt-4"
          width={800}  // Specify dimensions for Next.js Image
          height={400}
        />
      )}
      <div className="mt-6 text-xl text-slate-700">
        {renderParagraphs(post.description)}
      </div>
      <CommentSection postId={post.id} />
      <AuthorCard />
    </div>
  );
}

// Generate Static Params
export async function generateStaticParams() {
  // Assuming you are generating static pages for each post
  return posts.map(post => ({
    id: post.id,
  }));
}
