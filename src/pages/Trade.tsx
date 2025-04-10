import React, { useEffect, useState } from 'react'
import getCommunity from '../apiCalls/community'

const Trade = () => {
    const [community, setCommunity] = useState<any>([])
    useEffect(() => {
        getCommunity().then((data) => {
            setCommunity(data)
        })
    }, [])
  return (
    <div className="w-full h-screen">
        {
            community.map((item: any) => (
                <div key={item.id} className="w-full h-12 bg-white rounded-md">
                    <p>{item.title}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Trade