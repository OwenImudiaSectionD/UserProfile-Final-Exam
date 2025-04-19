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
  // TODO: Implement this by calling an API.
  return [
    {
      userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    },
    {
      userId: 1,
      id: 2,
      title: 'qui est esse',
      body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
    }
  ];
}
