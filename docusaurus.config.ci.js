import config from './docusaurus.config';
import headerItems from './src/config/header.navitems.js';

/** @type {import('@docusaurus/types').Config} */
const prConfig = {
  ...config,
  noIndex: true,
  baseUrl: `${config.baseUrl}/pr-preview/pr-${process.env.GH_PR_NUMBER}`
};

// Modify the header items to include the PR number
if(prConfig.themeConfig) {
  prConfig.themeConfig.navItems = headerItems(prConfig.baseUrl);
}

export default prConfig;
