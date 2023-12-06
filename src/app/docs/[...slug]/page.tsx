const Docs = ({
  params,
}: {
  params: {
    slug: string[];
  };
}) => {
  if (params.slug.length === 2) {
    return (
      <div>
        You are viewing of {params.slug[0]} of {params.slug[1]}
      </div>
    );
  } else if (params.slug.length === 1) {
    return <div>You are viewing of {params.slug[0]}</div>;
  }
  return <div>This is the docs page</div>;
};

export default Docs;
