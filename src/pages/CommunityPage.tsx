import React, { useEffect, useState } from 'react'
import { getCommunity } from '../apiCalls/community'
import { useNavigate } from 'react-router-dom'

const CommunityPage = () => {
    const navigate = useNavigate();
    const [community, setCommunity] = useState<any>([])
    useEffect(() => {
        getCommunity().then((data) => {
            setCommunity(data.data.rows)
        })
    }, [])

  const handlePostClick = (postId: string) => {
    navigate(`/protected/community/${postId}`);
  };
  return (
    <div className="w-full my-36">
        {
            community.map((item) => (
                <div key={item.id} onClick={() => handlePostClick(item.id)} className="w-full bg-white rounded-lg shadow-md mb-4 p-4">
                    <div className="flex items-center mb-4">
                        <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
                            <img 
                                src={item.created_by.profile_pic_url || 'https://via.placeholder.com/40'} 
                                alt="profile" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="ml-3">
                            <h3 className="font-semibold text-gray-800">{item.created_by.name}</h3>
                            <p className="text-sm text-gray-500">{new Date(item.live_from).toLocaleDateString()}</p>
                        </div>
                    </div>
                    {item.image_thumbnails[0] && (
                        <div className="w-full rounded-lg overflow-hidden mb-4">
                            <img 
                                src={item.image_thumbnails[0]} 
                                alt="post" 
                                className="w-full h-full object-contain"
                            />
                        </div>
                    )}
                </div>
            ))
        }
    </div>
  )
}

export default CommunityPage