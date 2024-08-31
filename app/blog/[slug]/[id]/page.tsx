import React, { useEffect, useState } from "react";
import { GraphQLClient, gql } from "graphql-request";
import { BeamWorking } from "@/components/AnimationComponents/BeamWorking";

const GET_ITEM_BY_ID = gql`
  query MyQuery($id: ID!) {
    post(where: { id: $id }) {
      id
      title
      datePublished
      slug
      description
      content {
        text
      }
      coverPhoto {
        url
      }
    }
  }
`;

const client = new GraphQLClient(
  "https://ap-south-1.cdn.hygraph.com/content/cm06ss2nu033r07w4itqdq9j2/master"
);

const Page = async ({ params }: { params: { slug: string; id: string } }) => {
  const data: any = await client.request(GET_ITEM_BY_ID, { id: params.id });
  if (!data) {
    console.log("Sorry No Data was Found from cms");
  }
  return (
    <div>
      {data ? <BeamWorking params={data.post} /> : <p>No data found</p>}
    </div>
  );
};

export default Page;
