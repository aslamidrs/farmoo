const getCommunity = async () => {
  try {
    const response = await fetch('https://prod-retailer.farmartos.com/v3/news_feed/merchant?page_id=null&page_no=1&limit=20&state_id=13', {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbmNyeXB0ZWRfdG9rZW4iOiJkMzA1NjM2Yzk4YWM5YmZjMzA2YjhiOTNjMTNjOWVmMDY3NzJkNTc4MGQ1MDU3YzY1ZTdjMGU1Y2I4OWQwZTYwZjM4MGI3MTZiMmY0OGRiYWRmNjJiMmY0M2U2Y2RjN2EzYjlhYjA3MGQ4MTJjZWY5ZWYwYzM2OGI1NmZhOTA4NTIxZWM2Mzc3Y2UyMjcyODY1ZDJhNTA0NTI0ZGNiMzNkMGNmOGViMWIzZWNmZmZlM2E4YzYzNDlhZmM0MmE0MzVlYTA3ZGIyZmIwNWNlYjVhZDFhNjJjMzNhNGU2IiwiaWF0IjoxNzQ0MjYxODk2LCJleHAiOjE5NDQzMDUwOTZ9.gQ4BqYcM6NhXiZ6yVomjc6JeZOh60NbZZWvzsLF0Yls'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching community data:', error);
    throw error;
  }
};

const getPostById = async (id: string) => {
  try {
    const response = await fetch(`https://prod-retailer.farmartos.com/v3/news_feed/fetch_news_feed_post_by_id?news_feed_id=${id}`, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbmNyeXB0ZWRfdG9rZW4iOiJkMzA1NjM2Yzk4YWM5YmZjMzA2YjhiOTNjMTNjOWVmMDY3NzJkNTc4MGQ1MDU3YzY1ZTdjMGU1Y2I4OWQwZTYwZjM4MGI3MTZiMmY0OGRiYWRmNjJiMmY0M2U2Y2RjN2EzYjlhYjA3MGQ4MTJjZWY5ZWYwYzM2OGI1NmZhOTA4NTIxZWM2Mzc3Y2UyMjcyODY1ZDJhNTA0NTI0ZGNiMzNkMGNmOGViMWIzZWNmZmZlM2E4YzYzNDlhZmM0MmE0MzVlYTA3ZGIyZmIwNWNlYjVhZDFhNjJjMzNhNGU2IiwiaWF0IjoxNzQ0MjYxODk2LCJleHAiOjE5NDQzMDUwOTZ9.gQ4BqYcM6NhXiZ6yVomjc6JeZOh60NbZZWvzsLF0Yls'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching post by ID:', error);
    throw error;
  }
};

export { getCommunity, getPostById };
