export default function transform(file, api) {
  const j = api.jscodeshift
  const root = j(file.source)

  const x = root
  	.find(j.ClassDeclaration)
  	.find(j.MethodDefinition, { kind: 'constructor' })
  	.filter(c =>
      j(c).find(j.BlockStatement).get('body').value.filter(s =>
        s.expression.callee.type !== 'Super'
      ).length === 0
    )
    .remove()

  return root.toSource()
}
