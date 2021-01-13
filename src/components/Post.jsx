import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import sanityClient from '../client.js'

export default function Post() {
  const [postData, setPost] = useState(null)

  useEffect(() => {
    sanityClient.fetch(`*[_type == 'post']{
        title,
        slug,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        }
      }`)
      .then((data) =>{setPost(data)})
      .catch(console.error)
  }, [])
 
  return (
    <main className='bg-green-100 min-h-screen p-12'>
      <section className='container mx-auto'>
        <h1 className='text-5xl flex justify-center cursive'>Blog Posts Page</h1>
        <h2 className='text-lg text-gray-600 flex justify-center mb-12'>Welcome to my page of blog posts</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {postData && postData.map((post, index) => (
          <article>
            <Link to={'/post/' + post.slug.current} key={post.slug.current}>
            <span className='block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400' key={index}>
              <img src={post.mainImage.asset.url} alt={post.mainImage.alt} className='w-full h-full rounded-r object-cover absolute'/>
              <span className='block relative h-full flex justify-end items-end pr-4 pb-4'>
                <h3 className='text-gray-800 text-lg font-bold px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded'>{post.title}</h3>
              </span>
            </span>
            </Link>
          </article>
          ))}
        </div>
      </section>
    </main>
  )
}


// return (
//     <main className="bg-gray-200 min-h-screen p-12">
//       <article className="container shadow-lg mx-auto bg-green-100 rounded-lg">
//         <header className="relative">
//           <div className="absolute h-full w-full flex items-center justify-center p-8">
//             <div className="bg-white bg-opacity-75 rounded p-12">
//               <h2 className="cursive text-3xl lg:text-6xl mb-4">
//                 {singlePost.title}
//               </h2>
//               <div className="flex justify-center text-gray-800">
//                 <img
//                   src={urlFor(singlePost.authorImage).url()}
//                   className="w-10 h-10 rounded-full"
//                   alt={singlePost.name}
//                 />
//                 <h4 className="cursive flex items-center pl-2 text-2xl">
//                   {singlePost.name}
//                 </h4>
//               </div>
//             </div>
//           </div>
//           <img
//             className="w-full object-cover rounded-t"
//             src={urlFor(singlePost.mainImage).url()}
//             alt=""
//             style={{ height: "400px" }}
//           />
//         </header>
//         <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
//           <BlockContent
//             blocks={singlePost.body}
//             projectId='4h4xcnig'
//             dataset='production'
//           />
//         </div>
//       </article>
//     </main>
//   );
// }