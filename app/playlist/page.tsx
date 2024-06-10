import React from "react";

export default function page(props: {
  searchParams: {
    list: string;
  };
}) {
  return <div>playlist/{props.searchParams.list}</div>;
}
