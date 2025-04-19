
"use client";

import { useEffect, useState } from "react";
import { getPosts, Post } from "@/services/json-placeholder";
import { Profile } from "@/components/Profile";
import { Counter } from "@/components/Counter";
import { TodoList } from "@/components/TodoList";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
        setError(null);
      } catch (e: any) {
        setError(`Failed to fetch posts: ${e.message}`);
        setPosts([]);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-bold mb-4">Owen Imudia User Profile</h1>

      <nav className="mb-4">
        <Link href="/about">
          <Button variant="outline">About Owen Imudia</Button>
        </Link>
      </nav>

      <Card className="w-full max-w-md mb-4">
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>This is My Information.</CardDescription>
        </CardHeader>
        <CardContent>
          <Profile
            name="Owen Imudia"
            profilePicture="https://picsum.photos/100/100"
            bio="A passionate developer."
          />
        </CardContent>
      </Card>

      <Card className="w-full max-w-md mb-4">
        <CardHeader>
          <CardTitle>Counter</CardTitle>
          <CardDescription>Increment, decrement, and reset a counter value.</CardDescription>
        </CardHeader>
        <CardContent>
          <Counter />
        </CardContent>
      </Card>

      <Card className="w-full max-w-md mb-4">
        <CardHeader>
          <CardTitle>To-Do List</CardTitle>
          <CardDescription>Add and remove items.</CardDescription>
        </CardHeader>
        <CardContent>
          <TodoList />
        </CardContent>
      </Card>

      <Card className="w-full max-w-md mb-4">
        <CardHeader>
          <CardTitle>API Data Fetching</CardTitle>
          <CardDescription>Fetch and display data from a public API.</CardDescription>
        </CardHeader>
        <CardContent>
          {error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <ul>
              {posts.map((post) => (
                <li key={post.id} className="mb-2">{post.title}</li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

