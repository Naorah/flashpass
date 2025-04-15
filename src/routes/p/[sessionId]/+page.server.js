const load = async ({ params }) => {
  const sessionId = params.sessionId;
  return { sessionId };
};

export { load };

