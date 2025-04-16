const load = async ({ params }) => {
  const session_id = params.session_id;
  return { session_id };
};

export { load };

