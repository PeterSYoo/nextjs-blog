export interface Post {
  _id: string;
  _createdAt: string;
  title: string;
  author: {
    name: string;
    mainImage: string;
  };
  description: string;
  image: string;
  slug: {
    current: string;
  };
  body: [ojbect];
}
