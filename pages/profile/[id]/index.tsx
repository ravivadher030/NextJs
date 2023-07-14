import { useRouter } from "next/router";
import { postsInterface } from "..";
import { GetServerSideProps } from "next";
import { AppContext } from "next/app";
import { useEffect, useState } from "react";
type params = {
  id: string;
};

interface singlePost {
  userId: string;
  id: string;
  title: string;
  body: string;
}
interface paramsInterface {
  params: singlePost;
}

export default function User(props: { posts: singlePost }) {
  const router = useRouter();
  // console.log(router.query.id)
  // const [data, setData] = useState();
  // const fetching=async()=>{
  //   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${router?.query?.id?.toString()}`);
  //   const posts = await res.json();
  //   setData(posts)
  // }
  // useEffect(() => {
  //   fetching()
  // }, []);
  // console.log(props)

  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return <div>User : {props.posts?.title}</div>;
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  const paths = posts?.map((p:singlePost) => ({
    params: { id: p?.id?.toString() },
  }));

  return { paths, fallback: true };
}

export const getStaticProps = async ({params}:paramsInterface) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.id}`
    );
    const posts = await res.json();
  return { props: { posts } };
};

// export async function getServerSideProps(context) {
//   const { params } = context;
//   console.log(typeof context);
//   const { id } = params;
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   const posts = await res.json();
//   return {
//     props: { posts }, // will be passed to the page component as props
//   };
// }
