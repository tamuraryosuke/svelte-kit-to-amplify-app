import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

export default {
  kit: {
    adapter: adapter({
      // Amplify に静的ホスティングさせるため fallback を指定
      fallback: 'index.html'
    }),
    paths: {
      base: ''
    }
  },
  preprocess: vitePreprocess()
};
