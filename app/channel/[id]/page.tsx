import React from "react";

export default function page(props: {
  params: {
    id: string;
  };
}) {
  return <div>channel/{props.params.id}</div>;
}
