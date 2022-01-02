import Layout from "../components/layouts/main";
import Link from "next/link";
import postsData from "../posts";

const { posts } = postsData;

export function getStaticProps() {
  return {
    props: {
      posts: posts.map(post => ({
        ...post,
        url: `blog/${post.id}`,
      })),
    },
  };
}

const Home = ({ posts, date }) => (
  <Layout>
    <ul>
      <div className="px-4 sm:flex items-center space-y-4 sm:space-y-0 sm:space-x-4 pb-2">
        <p className="text-xl font-semibold">いつか火影になりま。😏</p>
      </div>
      <section className="grid sm:grid-flow-col">
        <a
          className="flex flex-col px-4 py-2 hover:text-gray-700"
          href="/ctf-toolkit"
        >
          <p className="text-lg font-semibold">ctf toolkit</p>
          <p className="text-sm font-medium">tools & scripts</p>
        </a>
        <a className="flex flex-col px-4 py-2 hover:text-gray-700" href="/whoami">
          <p className="text-lg font-semibold">about</p>
          <p className="text-sm font-medium">
            engineering at H1 ┊ pro web surfer 
          </p>
        </a>
      </section>
      <div className="px-4 sm:flex items-center space-y-4 sm:space-y-0 sm:space-x-4 pb-2">
        <h2 className="text-xl font-semibold">blog posts</h2>
      </div>
      {posts.map(post => (
        <li key={post.id}>
          <span>{post.date}</span>
          <Link href={post.url}>
            <a href={post.url}>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
    <style jsx>{`
      ul li {
        padding: 10px 15px;
      }

      ul li span {
        color: #5b5b5b;
        display: block;
        font-size: 13px;
      }

      ul li a {
        font-weight: bold;
        color: black;
        text-decoration: none;
      }

      @media (any-hover: hover) {
        ul li a:hover {
          background: #eee;
        }

        ul li a:active {
          background: #ccc;
        }
      }

      @media (min-width: 500px) {
        ul {
          padding: 20px 0;
          max-width: 42rem;
          margin: auto;
        }

        ul li {
          padding-left: 0;
        }

        ul li a {
          padding: 10px 15px;
          transition: 150ms background-color ease-in;
        }

        ul li span {
          display: inline-block;
          width: 160px;
          padding-right: 10px;
          text-align: right;
          font-size: inherit;
        }
      }
    `}</style>
  </Layout>
);

export default Home;
