import fetch from 'node-fetch';

const getPage = component => `src/pages/${component}`;
const getRoute = (path, component, options = {}) => ({
  path,
  component: getPage(component),
  ...options,
});

export default {
  webpack: (config, { defaultLoaders }) => {
    const rules = [
      {
        oneOf: [
          defaultLoaders.jsLoader,
          defaultLoaders.cssLoader,
          {
            loader: ['json-loader', 'yaml-loader'],
            test: /\.ya?ml$/i,
          },
          defaultLoaders.fileLoader,
        ],
      },
    ];
    return { ...config, module: { ...config.module, rules } };
  },
  getSiteData: () => ({ title: 'Thankyou Payroll' }),
  getRoutes: async () => {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(async res =>
      res.json());
    return [
      getRoute('/', 'Home'),
      getRoute('/fees', '404'),
      getRoute('/how', '404'),
      getRoute('/about', '404'),
      getRoute('/contact', '404'),
      getRoute('/blog', '404', {
        getData: () => ({ posts }),
        children: posts.map(post =>
          getRoute(`/post/${post.id}`, '404', {
            getData: () => ({ post }),
          })),
      }),
      {
        is404: true,
        component: getPage('404'),
      },
    ];
  },
};
