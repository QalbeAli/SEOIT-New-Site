// app/api/BlogCms/route.ts

import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';
import { fetchPosts } from '@/lib/fetchPosts';

export async function GET() {
  try {
    const data = await fetchPosts();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

// Optional: Handle POST request to revalidate cache

export async function POST() {
  try {
    await fetchPosts(); // Optionally fetch posts or perform other actions
    revalidatePath("/blogs"); // Revalidate the specific path
    return NextResponse.json({ message: 'Cache revalidated' });
  } catch (error) {
    console.error('Error revalidating cache:', error);
    return NextResponse.json({ error: 'Failed to revalidate cache' }, { status: 500 });
  }
}