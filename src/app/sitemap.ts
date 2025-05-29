import { MetadataRoute } from 'next';

// Asume que tienes una forma de obtener tus rutas dinámicas,
// por ejemplo, de una API o listándolas manualmente si son pocas.

// Ejemplo: si tienes posts de blog
// async function getBlogPosts() {
//   const res = await fetch('https://.../api/posts');
//   const posts = await res.json();
//   return posts.map((post: { slug: string; updatedAt: string }) => ({
//     url: `https://centralize.dev/blog/${post.slug}`,
//     lastModified: new Date(post.updatedAt),
//   }));
// }

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // const blogPostsUrls = await getBlogPosts();

  return [
    {
      url: 'https://centralize.dev',
      lastModified: new Date(),
      changeFrequency: 'yearly', // 'always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never'
      priority: 1, // 0.0 to 1.0
    },
    {
      url: 'https://centralize.dev/chatbot-whatsapp',
      lastModified: new Date(), // O la fecha real de última modificación
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://centralize.dev/chatbot-whatsapp-exito-uno', // Tu página de caso de éxito
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // ...añade aquí todas tus páginas importantes
    // ...y las URLs dinámicas como los posts del blog
    // ...blogPostsUrls,
  ];
} 