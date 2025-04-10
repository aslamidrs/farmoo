import React, { useState } from 'react'
import { animalIcons } from '../assets/animal-icons';

const ProfilePage = () => {
    const [search, setSearch] = useState('');
    const [list, setList] = useState([
        {
            id: 1,
            name: 'Akash',
            age: 20,
            gender: 'Male',
            category: 'Cow',
            breed: 'Katphodwa',
            image: ''
        },
        {
            id: 1,
            name: 'Sunil',
            age: 2,
            gender: 'Female',
            category: 'Goat',
            breed: 'chota',
            image: ''
        },
        {
            id: 3,
            name: 'Sandeep',
            age: 20,
            gender: 'Male',
            category: 'Bull',
            breed: 'Neon',
            image: 'https://plus.unsplash.com/premium_photo-1677850456958-d2d54a85f126?fm=jpg&q=60&w=100'
        },
    ]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearch(searchTerm);
  };

  const filteredList = list.filter(item => 
    item.name.toLowerCase().includes(search) ||
    item.breed.toLowerCase().includes(search) ||
    item.category.toLowerCase().includes(search) ||
    item.gender.toLowerCase().includes(search)
  );
  return (
    <div className='w-full bg-background px-4 py-4 h-screen flex flex-col'>
        <div className="flex items-center gap-6 justify-center">
            <div className='rounded-full h-20 w-20 overflow-hidden'>
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=100" alt="profile" className='w-full h-full object-cover'/>
            </div>
            <div className='flex flex-col max-w-64'>
                <h1 className='text-2xl font-bold text-secondary'>John Doe</h1>
                <p className='text-md text-gray-500'>+91 70079 92740</p>
                <p className='text-md text-gray-500'>Akhil Bhartiya Farm, Gurgaon, HR</p>
            </div>
        </div>
        <div className="mt-8 w-full max-w-md mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
            </div>
            <input
                type="text"
                placeholder="Search items..."
                value={search}
                onChange={handleSearch}
                className="pl-10 w-full rounded-lg border border-gray-300 focus:ring-0 focus:border-0 p-2.5"
            />
        </div>
        <div className="mt-8 w-full max-w-md mx-auto relative max-h-[500px] overflow-y-auto">
            <div className="grid grid-cols-1 gap-4">
                {filteredList.map((item) => (
                    <div key={item.id} className="flex justify-between gap-2 items-center bg-white p-4 shadow-md">
                        <div className='h-16 w-16 overflow-hidden flex items-center justify-center'>
                            {item.image ? <img src={item.image} alt="profile" className='w-full h-full rounded-full object-cover'/> : <img src={animalIcons[item.category as keyof typeof animalIcons]} alt="profile" className='object-cover h-12 w-12'/>}
                        </div>
                        <div className='flex flex-col text-right'>
                            <h2 className="text-lg font-bold text-primary">{item.name}</h2>
                            <p className="text-sm text-gray-500">{item.breed} | {item.category}</p>
                            <p className="text-sm text-gray-500">{item.age} | {item.gender}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ProfilePage