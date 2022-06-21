import {Config} from '@stencil/core';
import { readFileSync } from 'fs';

export const config: Config = {
  namespace: 'elsa-workflows-studio',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null, // disable service workers,
      copy: [
        {src: 'assets', dest: 'build/assets'},
        {src: '../node_modules/monaco-editor/min', dest: 'build/assets/js/monaco-editor/min'},
        {src: '../node_modules/monaco-editor/min-maps', dest: 'build/assets/js/monaco-editor/min-maps'}
      ]
    },
  ],
  globalStyle: 'src/globals/tailwind.css',
  plugins: [],
  devServer: {
    reloadStrategy: 'pageReload',
    port: 4445,
    // https: {
    //   cert: readFileSync('cert.pem', 'utf8'),
    //   key: readFileSync('key.pem', 'utf8')
    // }
  },
};
