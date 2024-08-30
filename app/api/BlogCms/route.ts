import { GraphQLClient, gql } from "graphql-request";
import { revalidatePath } from "next/cache";

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
// Define types
interface Post {
  id: string;
  title: string;
  datePublished: string;
  description: string;
  coverPhoto: CoverPhoto[];
  content: { text: string };
  slug: string;
  url: string;
}

interface PostsResponse {
  posts: Post[];
}

// Fetch data on the server
export async function fetchPosts(): Promise<PostsResponse> {
  try {
    const data = await graphCms.request<PostsResponse>(Query);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return { posts: [] }; // Return an empty array in case of an error
  }
}

export const revalidatePosts = async () => {
  await fetchPosts(); // Fetch the posts to ensure data is up-to-date
  revalidatePath("/blogs"); // Revalidate the homepage or the specific path
};
