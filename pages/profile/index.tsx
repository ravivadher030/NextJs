import Head from "next/head";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export interface postsInterface {
  posts: {
    userId: string;
    id: string;
    title: string;
    body: string;
  }[];
}

export default function Profile({ posts }: postsInterface): React.ReactElement {
  //{ posts }: postsInterface
  // const [data, setData] = useState();
  // const fetching=async()=>{
  //   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   const posts = await res.json();
  //   setData(posts)
  // }
  // useEffect(() => {
  //   fetching()
  // }, []);
  // console.log(data, "posts");
  return (
    <div>
      <Head>
        <title>Profile - Portfolio</title>
        <link className="rounded-full" rel="icon" href="/ravi.jpg" />
      </Head>
      <div className="">
        {posts?.map((el) => {
          return (
            <>
              <Link className="my-2" href={`/profile/${el?.id}`}>
                {el?.title}
              </Link>
              <br />
            </>
          );
        })}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return { props: { posts } };
};

// export async function getServerSideProps() {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//   const posts = await res.json()
//   return {
//     props: { posts }, // will be passed to the page component as props
//   }
// }
