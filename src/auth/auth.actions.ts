export async function fetchUser(credentials: any) {
  // todo: fetch user from your API ...
  const user = {
    id: '1',
    name: 'User',
    email: credentials.email,
  };

  if (!user) return null;

  return user;
}
