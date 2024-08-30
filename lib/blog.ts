import glob from "fast-glob";

interface Blog {
  title: string;
  description: string;
  author: {
    name: string;
    src: string;
  };
  date: string;
  image?: string;
}

export interface BlogWithSlug extends Blog {
  slug: string;
}

export interface CoverPhoto {
  url: string;
}

// Define types
export interface Post {
  id: string;
  title: string;
  datePublished: string;
  description: string;
  coverPhoto: CoverPhoto[];
  content: { text: string };
  slug: string;
  url: string;
}

export interface PostsResponse {
  posts: Post[];
}
async function importBlog(blogFilename: string): Promise<BlogWithSlug> {
  let { blog } = (await import(`../app/(marketing)/blog/${blogFilename}`)) as {
    default: React.ComponentType;
    blog: Blog;
  };

  return {
    slug: blogFilename.replace(/(\/page)?\.mdx$/, ""),
    ...blog,
  };
}

export async function getAllBlogs() {
  let blogFilenames = await glob("*/page.mdx", {
    cwd: "./app/(marketing)/blog",
  });

  let blogs = await Promise.all(blogFilenames.map(importBlog));

  return blogs.sort((a, z) => +new Date(z.date) - +new Date(a.date));
}
