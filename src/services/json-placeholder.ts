/**
 * Represents a Post from the JSONPlaceholder API.
 */
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

/**
 * Fetches a list of posts from the JSONPlaceholder API.
 * @returns A promise that resolves to an array of Post objects.
 */
export async function getPosts(): Promise<Post[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  return response.json();
}
