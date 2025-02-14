import {useEffect, useState} from 'react'
import fetchNewsApi from "../../api/fetchNews";
import mountain from "../../images/mountain.png";


const News = () => {
  const [news, setNews] = useState();
  useEffect(()=>{
    fetchNewsApi().then((data)=>{
      if(data.status == "ok"){
        const randomIndex = Math.floor(Math.random() * data.articles.length);
        setNews(data.articles[randomIndex])
      }
    })
  },[])
  console.log(news);
  return (
    <div className="bg-card bg-white w-full rounded-2xl">
      <div className="max-h-80 overflow-hidden relative">
        <img src={mountain} alt="mountain" className="w-full object-cover"/>
        <h3 className="font-semibold absolute bottom-0 bg-slate-900 bg-opacity-45 w-full text-white px-2 py-4 text-2xl">
         {news?.title}
        </h3>
      </div>
      <p className="mt-2 text-primary-foreground p-3">
        In the years since human beings first reached the summit of Mount
        Everest in 1953, climbing the highest mountain has changed dramatically.
        Today, hundreds of...
      </p>
    </div>
  );
};

export default News;
