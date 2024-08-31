// lib/fetchPosts.ts

import { GraphQLClient, gql } from "graphql-request";

const graphCms = new GraphQLClient(
  "https://ap-south-1.cdn.hygraph.com/content/cm06ss2nu033r07w4itqdq9j2/master"
);

const Query = gql`
  query {
    posts {
      id
      title
      datePublished
      slug
      description
      content {
        text
      }
      coverPhoto {
        url
      }
    }
  }
`;

interface CoverPhoto {
  url: string;
}

interface Post {
  id: string;
  title: string;
  datePublished: string;
  description: string;
  coverPhoto: CoverPhoto[];
  content: { text: string };
  slug: string;
  url:string
}

interface PostsResponse {
  posts: Post[];
}

export async function fetchPosts(): Promise<PostsResponse> {
  try {
    const data = await graphCms.request<PostsResponse>(Query);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return { posts: [] }; // Return an empty array in case of an error
  }
}
