// pages/dashboard.js
import { useState } from 'react';
import FileUpload from '../components/FileUpload';
import Layout from '../components/Layout';

const Dashboard = () => {
  const [blogData, setBlogData] = useState(null);

  const handleFileUpload = async (file) => {
    // TODO: 这里应该是上传文件到服务器的逻辑
    // 例如，使用 FormData 发送 POST 请求
    const postData = {
        video_path: 'data/audio/BBC_News.mp3',
        res_mode: 'blog'
      };
    // 将数据对象转换为JSON格式
    const jsonPostData = JSON.stringify(postData);

    // 定义请求的URL
    const apiUrl = 'http://0.0.0.0:8501/content_embed';

    // 发起POST请求
    fetch(apiUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json', // 指定请求的内容类型为JSON
    },
    body: jsonPostData, // 将JSON数据作为请求体
    })
    .then(response => response.json()) // 解析响应的JSON数据
    .then(data => {
        // 处理响应数据
        console.log(data);
    })
    .catch(error => {
        // 处理请求错误
        console.error('Error:', error);
    });

    // 假设响应包含转换后的博客数据
    const mockResponse = {
      title: '视频标题',
      content: '视频内容摘要...'
    };

    setBlogData(mockResponse);
  };

  return (
    <Layout>
      <h1>Dashboard</h1>
      <FileUpload onFileUpload={handleFileUpload} />
      {blogData && (
        <div>
          <h2>{blogData.title}</h2>
          <p>{blogData.content}</p>
        </div>
      )}
    </Layout>
  );
};

export default Dashboard;

