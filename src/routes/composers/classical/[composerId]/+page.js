import { composers } from '$lib/data/composers.js';
console.info('composers', composers)

export function load( page ) {
  const foundComposer = composers.find( composer => composer.id == page.params.composerId)

  if (foundComposer) {
    return {
       composer: foundComposer
    };
  } else {
    return {
      composer: {name: 'Not Found'}
    }
  }
}