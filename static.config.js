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
  getSiteData: () => ({ title: 'Canada Immigration' }),
  getRoutes: async () => {
    return [
      getRoute('/', 'Home'),
      getRoute('/home', 'Home'),
      getRoute('/citizenship', 'Citizenship'),
      getRoute('/study', 'Study'),
      getRoute('/work', 'Work'),
      getRoute('/caregiver', 'Caregiver'),
      getRoute('/asylum', 'Asylum'),
      getRoute('/appeal', 'Appeals'),
      getRoute('/contact', 'Contact'),
      getRoute('/about', 'About'),
      getRoute('/assessment', 'Assessment'),

      {
        is404: true,
        component: getPage('404'),
      },
    ];
  },
};
