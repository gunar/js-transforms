export default function transformer(file, api) {
  const j = api.jscodeshift;
  const {expression, statement, statements} = j.template;

  let root = j(file.source)


  const update = p => j.callExpression(
    j.memberExpression(
      j.identifier('fp'),
      j.identifier(p.node.callee.property.name)
    ),
    p.node.arguments.reverse()
  )
  
  return root
    .find(j.CallExpression, {
      callee: {
        type: 'MemberExpression',
        object: {name: '_'}
      }
    })
    .replaceWith(update)
    .toSource();
    
}
