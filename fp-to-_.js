// Gunar C. Gessner (@gunar) 2016
// https://github.com/gunar/js-transforms
// http://astexplorer.net/#/OI26iPysaz/1

// Replaces identifier "fp" for "_"

export default function transformer(file, api) {
  const j = api.jscodeshift;
  return j(file.source)
    .find(j.Identifier, { name: 'fp' })
    .replaceWith(p =>  j.identifier('_'))
   .toSource({ quote: 'single' })
}
