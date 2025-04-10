import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPostById } from '../apiCalls/community';
const CommunityPost = () => {
    const { id } = useParams() as { id: string };
    const [post, setPost] = useState({});
    useEffect(() => {
        getPostById(id).then((data) => {
            console.log({ data })
            setPost(data.data);
        })
    }, [])
  return (
    <div className='w-full h-screen'>
        <div className='w-full h-full bg-white rounded-lg shadow-md mb-4 p-4'>
            <button 
                onClick={() => window.history.back()}
                className="mt-36 pt-4 bg-none text-primary rounded-lg text-sm hover:bg-primary/90 transition-colors"
            >
                 ← Go Back
            </button>
            <h1 className='text-2xl font-bold pt-2 pb-8'>{post.heading_text}</h1>
            <p className='text-sm text-gray-500 pb-36' dangerouslySetInnerHTML={{ __html: (post.formatted_long_description || '').replace(/<([^>]+)>/g, '<$1 class="py-1">').replace(/<a([^>]+)>/g, '<a$1 class="py-1 text-blue-500">')}}></p>
        </div>
    </div>
  )
}

export default CommunityPost