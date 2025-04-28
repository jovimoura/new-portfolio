import { gql, request } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT!;

export const getBlogs = async () => {
  const query = gql`
    query Blogs {
      blogs {
        id
        slug
        title
        createdAt
        publishedAt
        description
        content {
          raw
          html
          markdown
        }
        categorie {
          id
          name
          slug
        }
        featuredImage {
          url
        }
      }
    }
  `;

  const result: any = await request(graphqlAPI, query);
  return result.blogs;
};

export const getBlogDetails = async (slug: string) => {
  const query = gql`
    query BlogDetails($slug: String!) {
      blog(where: { slug: $slug }) {
        id
        title
        createdAt
        publishedAt
        description
        content {
          raw
          html
          markdown
        }
        categorie {
          id
          name
          slug
        }
        featuredImage {
          url
        }
      }
    }
  `;

  const result: any = await request(graphqlAPI, query, { slug });
  return result.blog;
};
